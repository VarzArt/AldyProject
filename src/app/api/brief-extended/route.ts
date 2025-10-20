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

function list(arr?: string[]) {
	if (!arr || !arr.length) return '—';
	return arr.map(escapeHtml).join(', ');
}

export async function POST(req: Request) {
	const RESEND_API_KEY = process.env.RESEND_API_KEY;
	const BRIEF_FROM = process.env.BRIEF_FROM;
	const BRIEF_TO = process.env.BRIEF_TO;

	if (!RESEND_API_KEY || !BRIEF_FROM || !BRIEF_TO) {
		return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
	}

	const body = await req.json().catch(() => null);
	if (!body || typeof body !== 'object') {
		return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
	}

	if (!body?.contact?.name?.trim()) {
		return NextResponse.json({ error: 'name required' }, { status: 400 });
	}
	if (!Array.isArray(body?.timelineBudget?.timeline) || body.timelineBudget.timeline.length === 0) {
		return NextResponse.json({ error: 'timeline required' }, { status: 400 });
	}
	if (!body?.agree) {
		return NextResponse.json({ error: 'agree required' }, { status: 400 });
	}

	const {
		contact,
		projectType,
		mainGoals,
		about,
		audience,
		visual,
		webDigital,
		interior,
		have,
		timelineBudget,
		notes,
	} = body as any;

	const html = `
  <h2>Новый бриф (электронная форма)</h2>

  <h3>1) Контакты</h3>
  <p><b>Имя / Компания:</b> ${escapeHtml(contact?.name ?? '')}</p>
  <p><b>Email:</b> ${escapeHtml(contact?.email ?? '')}</p>
  <p><b>Телефон/Telegram:</b> ${escapeHtml(contact?.phone ?? '')}</p>
  <p><b>Предпочт. контакт:</b> ${escapeHtml(contact?.preferredContact ?? '')}</p>

  <h3>2) Тип проекта</h3>
  <p><b>Web design:</b> ${list(projectType?.webDesign)}</p>
  <p><b>Product design:</b> ${list(projectType?.productDesign)}</p>
  <p><b>Web development:</b> ${list(projectType?.webDevelopment)}</p>
  <p><b>Interior design:</b> ${list(projectType?.interiorDesign)}</p>
  <p><b>Branding:</b> ${list(projectType?.branding)}</p>
  <p><b>SMM:</b> ${list(projectType?.smm)}</p>
  <p><b>Другое:</b> ${escapeHtml(projectType?.other ?? '')}</p>

  <h3>3) Главная цель проекта</h3>
  <p>${list(mainGoals)}</p>

  <h3>4) О бизнесе</h3>
  <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(about ?? '')}</pre>

  <h3>5) Целевая аудитория</h3>
  <p><b>Сегменты:</b> ${list(audience?.segments)}</p>
  <p><b>Другое:</b> ${escapeHtml(audience?.other ?? '')}</p>

  <h3>6) Визуальный стиль</h3>
  <p><b>Направления:</b> ${list(visual?.directions)}</p>
  <p><b>Цветовое настроение:</b> ${escapeHtml(visual?.colorMood ?? '')}</p>
  <p><b>Референсы:</b> ${escapeHtml(visual?.references ?? '')}</p>

  <h3>7) Для Web & Digital</h3>
  <p><b>Тип проекта:</b> ${escapeHtml(webDigital?.projectType ?? '')}</p>
  <p><b>Функциональность:</b> ${list(webDigital?.required)}</p>
  <p><b>Контент:</b> ${escapeHtml(webDigital?.content ?? '')}</p>

  <h3>8) Для интерьера</h3>
  <p><b>Тип проекта:</b> ${escapeHtml(interior?.projectType ?? '')}</p>
  <p><b>Площадь (м²):</b> ${escapeHtml(interior?.area ?? '')}</p>
  <p><b>Объём работ:</b> ${list(interior?.required)}</p>
  <p><b>Стиль:</b> ${list(interior?.styles)}</p>

  <h3>9) Что уже есть</h3>
  <p>${list(have)}</p>

  <h3>10) Сроки и бюджет</h3>
  <p><b>Сроки:</b> ${list(timelineBudget?.timeline)}</p>
  <p><b>Бюджет:</b> ${escapeHtml(timelineBudget?.budget ?? '')}</p>

  <h3>11) Доп. заметки</h3>
  <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(notes ?? '')}</pre>
  `.trim();

	const subjectParts = [
		`Бриф от ${escapeHtml(contact?.name ?? 'клиент')}`,
		timelineBudget?.timeline?.length ? `сроки: ${escapeHtml(timelineBudget.timeline.join(', '))}` : '',
	].filter(Boolean);

	const resp = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${RESEND_API_KEY}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			from: BRIEF_FROM,
			to: [BRIEF_TO],
			reply_to: contact?.email || undefined,
			subject: subjectParts.join(' | '),
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
