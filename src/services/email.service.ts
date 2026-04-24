import nodemailer from "nodemailer";

export const sendEmail = async () => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com",
        pass: "your-app-password",
      },
    });

    const info = await transporter.sendMail({
      from: "your-email@gmail.com",
      to: "test@example.com",
      subject: "Test Email",
      text: "Hello from your Food Ordering API 🚀",
    });

    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Email error:", error);
  }
};