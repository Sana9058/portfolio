const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ name, email, subject, message }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.EMAIL_USER],
      reply_to: email,
      subject: `📩 New Portfolio Contact: ${subject}`,
      html: `
        <h2>New Portfolio Contact</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      throw new Error(error.message || "Failed to send email via Resend");
    }

    return data;
  } catch (err) {
    console.error("sendEmail failed:", err);
    throw err;
  }
};

module.exports = sendEmail;