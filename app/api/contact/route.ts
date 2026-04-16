import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO ?? process.env.EMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] Message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e2d4ff;border-radius:12px;">
          <h2 style="color:#7c3aed;margin-top:0">New message from your portfolio</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#666;width:80px"><strong>Name:</strong></td><td style="padding:8px 0;color:#1a0a2e">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666"><strong>Email:</strong></td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#7c3aed">${email}</a></td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e2d4ff;margin:16px 0"/>
          <p style="color:#666;margin-bottom:8px"><strong>Message:</strong></p>
          <p style="background:#faf7ff;padding:16px;border-radius:8px;color:#1a0a2e;line-height:1.6;margin:0">${message.replace(/\n/g, '<br/>')}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact]', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
