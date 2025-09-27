import { NextResponse } from 'next/server';

export const runtime = 'edge';

function escapeHtml(str: string) {
	return String(str)
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#039;');
}

export async function POST(req: Request) {
	const RESEND_API_KEY = process.env.RESEND_API_KEY;
	const BRIEF_FROM = process.env.BRIEF_FROM;
	const BRIEF_TO = process.env.BRIEF_TO;

	if (!RESEND_API_KEY || !BRIEF_FROM || !BRIEF_TO) {
		return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
	}

	const { services, budget, name, email, projectDetails } = await req.json();

	if (!Array.isArray(services) || services.length === 0)
		return NextResponse.json({ error: 'services required' }, { status: 400 });
	if (!budget) return NextResponse.json({ error: 'budget required' }, { status: 400 });
	if (!name?.trim()) return NextResponse.json({ error: 'name required' }, { status: 400 });
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email ?? ''))
		return NextResponse.json({ error: 'email invalid' }, { status: 400 });
	const html = `
    <h2>Новый бриф</h2>
    <p><b>Имя:</b> ${escapeHtml(name)}</p>
    <p><b>Email:</b> ${escapeHtml(email)}</p>
    <p><b>Бюджет:</b> ${escapeHtml(budget)}</p>
    <p><b>Сервисы:</b> ${services.map(escapeHtml).join(', ')}</p>
    <p><b>Детали:</b></p>
    <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(projectDetails)}</pre>
  `.trim();

	const resp = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${RESEND_API_KEY}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			from: BRIEF_FROM,
			to: [BRIEF_TO],
			reply_to: email,
			subject: `Новый бриф от ${name} (бюджет ${budget})`,
			html,
		}),
	});

	if (!resp.ok) {
		const text = await resp.text().catch(() => '');
		return NextResponse.json({ error: `Resend ${resp.status}`, details: text }, { status: 502 });
	}

	const data = await resp.json().catch(() => ({}));
	return NextResponse.json({ ok: true, id: data?.id ?? null });
}
