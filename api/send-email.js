import nodemailer from "nodemailer";
import { getEmailTemplate, getPlainTextTemplate } from "./emailTemplate";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { firstName, lastName, email, message, subject } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "sarimsaleem07@gmail.com",
                pass: "alug glvo orna ovpb",
            },
        });

        await transporter.sendMail({
            from: `"${firstName} ${lastName}" <${email}>`,
            to: "sarimsaleem07@gmail.com",
            subject: subject,
            html: getEmailTemplate(firstName, lastName, email, subject, message),
            text: getPlainTextTemplate(firstName, lastName, email, subject, message),
        });

        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Error sending email", error: error.message });
    }
}