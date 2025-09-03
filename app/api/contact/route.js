import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_EMAIL_APP_PASSWORD,
      },
    });

    const html = `
      <h2>New message from portfolio</h2>
      <p><b>Name:</b> ${firstName} ${lastName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone || "-"}</p>
      <p><b>Message:</b></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `;

    await transporter.sendMail({
      from: process.env.CONTACT_EMAIL,
      to: process.env.CONTACT_TO,
      subject: `Portfolio contact — ${firstName} ${lastName}`,
      html,
      replyTo: email,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("Contact form error:", err);
    return new Response(JSON.stringify({ error: "Failed to send message" }), { status: 500 });
  }
}
