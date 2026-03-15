import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST (req: Request) {
  const body = await req.json()
  const { nome, email, mensagem } = body

  try {
    await resend.emails.send({
      from: 'Contato <onboarding@resend.dev>',
      to: 'jhordan.kendy@outlook.com',
      subject: `Nova mensagem de ${nome}`,
      html: `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `
    })
    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error })
  }
}
