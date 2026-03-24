import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { firstName, lastName, email, message, subject } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "sarimsaleem07",
                pass: "alug glvo orna ovpb", // gmail app password
            },
        });

        await transporter.sendMail({
            from: email,
            to: "sarimsaleem07@gmail.com",
            subject: subject,
            html: `<p>${firstName} ${lastName}</p><p>${message}</p>`,
        });

        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error sending email", error });
    }
}