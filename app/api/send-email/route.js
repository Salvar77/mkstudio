import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Wszystkie pola są wymagane." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Nieprawidłowy format adresu e-mail." },
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: "kabe@kabetintleather.opole.pl",
      to: "mkstudio.opole@gmail.com",
      subject: "Wiadomość z formularza kontaktowego",
      text: `Nowa wiadomość od: ${name} \nEmail: ${email} \nTreść wiadomości: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Wiadomość e-mail została wysłana." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Błąd wysyłania e-maila: ", error);
    return NextResponse.json(
      { error: "Wystąpił błąd podczas wysyłania wiadomości e-mail." },
      { status: 500 }
    );
  }
}
