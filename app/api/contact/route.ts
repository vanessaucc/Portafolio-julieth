import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO_EMAIL = 'vmena7604@gmail.com'

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    // Field validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }
    if (message.trim().length < 10) {
      return NextResponse.json({ error: 'Message too short.' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      // Dev fallback — log to console when key is not configured
      console.log('[contact] No RESEND_API_KEY — message received:')
      console.log({ name, email, message })
      return NextResponse.json({ success: true, dev: true })
    }

    const resend = new Resend(apiKey)

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [TO_EMAIL],
      reply_to: email,
      subject: `[Portfolio] Message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:580px;margin:0 auto;background:#faf7ff;border-radius:16px;overflow:hidden;border:1px solid #e2d4ff;">
          <div style="background:linear-gradient(135deg,#7c3aed,#a855f7);padding:28px 32px;">
            <h2 style="color:#fff;margin:0;font-size:1.3rem">📬 New Portfolio Message</h2>
          </div>
          <div style="padding:28px 32px;">
            <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
              <tr>
                <td style="padding:8px 0;color:#6b4a9a;font-weight:600;width:70px">Name</td>
                <td style="padding:8px 0;color:#1a0a2e;font-weight:500">${name}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#6b4a9a;font-weight:600">Email</td>
                <td style="padding:8px 0"><a href="mailto:${email}" style="color:#7c3aed;text-decoration:none">${email}</a></td>
              </tr>
            </table>
            <div style="background:#fff;border:1px solid #e2d4ff;border-radius:12px;padding:20px;">
              <p style="color:#6b4a9a;font-weight:600;margin:0 0 8px">Message</p>
              <p style="color:#1a0a2e;line-height:1.7;margin:0;white-space:pre-wrap">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
            </div>
          </div>
          <div style="padding:16px 32px;background:#f0e8ff;text-align:center;">
            <p style="color:#6b4a9a;font-size:0.75rem;margin:0">Sent from vanessa-mena.vercel.app</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact]', err)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
