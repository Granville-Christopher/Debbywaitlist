import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const msg = {
    to: "granvillechris.dev@gmail.com",
    from: "support@stratiumctb.com", // MUST be verified in SendGrid
    subject: "New Debby Waitlist Signup",
    text: `New signup email: ${email}`,
    html: `<strong>New signup email:</strong> ${email}`,
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}