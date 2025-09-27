import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string) {
	return str
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#039;');
}

export async function POST(req: Request) {
	try {
		const { services, budget, name, email, projectDetails } = await req.json();

		// простая валидация
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

		const { error } = await resend.emails.send({
			from: process.env.BRIEF_FROM!,
			to: [process.env.BRIEF_TO!],
			replyTo: email,
			subject: `Новый бриф от ${name} (бюджет ${budget})`,
			html,
		});

		if (error) {
			console.error(error);
			return NextResponse.json({ error: 'send failed' }, { status: 500 });
		}

		return NextResponse.json({ ok: true });
	} catch (e: any) {
		console.error(e);
		return NextResponse.json({ error: 'unexpected' }, { status: 500 });
	}
}
