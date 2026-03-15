'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail (prevState: any, formData: FormData) {
  try {
    const nome = formData.get('nome')
    const email = formData.get('email')
    const mensagem = formData.get('mensagem')

    const { data } = await resend.emails.send({
      //   from: 'Contato <onboarding@resend.dev>',
      from: 'Site <contato@zeluizdocandeeiro.com.br>',
      //    to: "contato@zeluizdocandeeiro.com.br",
      to: 'contato@zeluizdocandeeiro.com.br',
      replyTo: email as string[] | string,
      subject: `Mensagem de ${nome}`,
      html: `
        <p><strong>Email:</strong> ${email}</p>
        <p>${mensagem}</p>
      `
    })
    console.log('Email enviado:', data)
    if (!data) return { error: true }
    return { success: true, error: false }
  } catch (error) {
    return { error: true }
  }
}
