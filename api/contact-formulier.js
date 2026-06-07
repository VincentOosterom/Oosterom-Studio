export const config = {
    api: {
        bodyParser: true,
    },
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    const { type, name, company, email, service, budget, message } = req.body

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Naam, email en bericht zijn verplicht' })
    }

    const isOfferte = type === 'offerte'

    // Email naar Vincent
    const onderwerp = isOfferte
        ? `Nieuwe offerte aanvraag van ${name}${company ? ` (${company})` : ''}`
        : `Nieuw contactbericht van ${name}${company ? ` (${company})` : ''}`

    const inhoudTekst = isOfferte
        ? `Nieuwe offerte aanvraag via oosteromstudio.nl\n\nNaam: ${name}\nBedrijf: ${company || '—'}\nEmail: ${email}\nDienst: ${service || '—'}\nBudget: ${budget || '—'}\n\nBericht:\n${message}`
        : `Nieuw contactbericht via oosteromstudio.nl\n\nNaam: ${name}\nBedrijf: ${company || '—'}\nEmail: ${email}\n\nBericht:\n${message}`

    const inhoudHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
      <h2 style="color: #000000; border-bottom: 2px solid #88e8f4; padding-bottom: 8px;">
        ${isOfferte ? '📋 Nieuwe offerte aanvraag' : '✉️ Nieuw contactbericht'}
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
        <tr><td style="padding: 8px; color: #64748b; width: 120px;">Naam</td><td style="padding: 8px; font-weight: 600;">${name}</td></tr>
        ${company ? `<tr><td style="padding: 8px; color: #64748b;">Bedrijf</td><td style="padding: 8px; font-weight: 600;">${company}</td></tr>` : ''}
        <tr><td style="padding: 8px; color: #64748b;">Email</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
        ${isOfferte && service ? `<tr><td style="padding: 8px; color: #64748b;">Dienst</td><td style="padding: 8px;">${service}</td></tr>` : ''}
        ${isOfferte && budget ? `<tr><td style="padding: 8px; color: #64748b;">Budget</td><td style="padding: 8px;">${budget}</td></tr>` : ''}
      </table>
      <div style="background: #000000; border-left: 3px solid #88e8f4; padding: 16px; border-radius: 4px; margin: 16px 0;">
        <p style="margin: 0; color: #374151; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
      </div>
      <p style="color: #94a3b8; font-size: 12px; margin-top: 24px;">
        Verstuurd via oosteromstudio.nl
      </p>
    </div>
  `

    try {
        // Email naar Vincent
        const resendRes = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: 'Oosterom Studio <info@oosteromstudio.nl>',
                to: ['vincent@oosteromstudio.nl'],
                reply_to: email,
                subject: onderwerp,
                text: inhoudTekst,
                html: inhoudHtml,
            }),
        })

        const data = await resendRes.json()
        if (!resendRes.ok) {
            return res.status(500).json({ error: data.message || 'Versturen mislukt' })
        }

        // Bevestigingsmail naar afzender
        await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: 'Vincent van Oosterom Studio <vincent@oosteromstudio.nl>',
                to: [email],
                subject: 'Bedankt voor je bericht | Oosterom Studio',
                html: `
          <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #1a1a1a; line-height: 1.7; font-size: 15px;">
            <p>Hey ${name},</p>
            <p>Bedankt voor je ${isOfferte ? 'aanvraag' : 'bericht'}! Ik heb het goed ontvangen en neem binnen 24 uur contact met je op.</p>
            <p>Tot snel,</p>
            <p><strong>Vincent Oosterom</strong><br>Oosterom Studio<br><a href="https://www.oosteromstudio.nl">oosteromstudio.nl</a></p>
          </div>
        `,
            }),
        })

        return res.status(200).json({ ok: true })
    } catch (err) {
        return res.status(500).json({ error: `Fout: ${err.message}` })
    }
}