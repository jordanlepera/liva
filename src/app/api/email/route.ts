import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `livamaconnerie.com - ${name} (${email})`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, (err) => {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({
      message: 'Merci de nous avoir contacté. Votre message a bien été envoyé.',
    });
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 },
    );
  }
}
