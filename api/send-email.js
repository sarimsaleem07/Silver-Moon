import nodemailer from "nodemailer";

// Helper function to escape HTML
function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function getEmailTemplate(firstName, lastName, email, subject, message) {
    const fullName = `${escapeHtml(firstName)} ${escapeHtml(lastName)}`;
    const escapedEmail = escapeHtml(email);
    const escapedSubject = escapeHtml(subject);
    const escapedMessage = escapeHtml(message).replace(/\n/g, '<br>');
    const currentYear = new Date().getFullYear();

    return `
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Contact Form Submission</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Manrope', 'Helvetica Neue', Arial, sans-serif;
            background-color: #f5f5f5;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .header {
            background-color: #f5f5dc;
            padding: 30px;
            text-align: center;
            border-bottom: 1px solid #e0e0d0;
        }
        .header img {
            max-width: 200px;
            height: auto;
        }
        .content {
            background-color: #5a5c47;
            padding: 40px 30px;
        }
        .content-inner {
            background-color: #f5f5dc;
            border-radius: 14px;
            padding: 35px 30px;
        }
        .section-title {
            font-size: 24px;
            font-weight: 700;
            margin: 0 0 25px 0;
            color: #2c2c2c;
            border-left: 4px solid #5a5c47;
            padding-left: 15px;
        }
        .info-grid {
            margin-bottom: 30px;
        }
        .info-item {
            margin-bottom: 15px;
            padding: 10px;
            background-color: #ffffff;
            border-radius: 8px;
            border-left: 3px solid #5a5c47;
        }
        .info-label {
            font-weight: 700;
            color: #5a5c47;
            margin-bottom: 5px;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .info-value {
            font-size: 16px;
            color: #333333;
            word-break: break-word;
        }
        .message-box {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            margin-top: 20px;
        }
        .message-text {
            font-size: 15px;
            line-height: 1.6;
            color: #555555;
            margin: 0;
            white-space: pre-wrap;
        }
        .footer {
            background-color: #f5f5dc;
            padding: 25px;
            text-align: center;
            border-top: 1px solid #e0e0d0;
        }
        .footer p {
            margin: 0;
            font-size: 12px;
            color: #666666;
        }
        @media only screen and (max-width: 600px) {
            .content {
                padding: 20px 15px;
            }
            .content-inner {
                padding: 25px 20px;
            }
        }
    </style>
</head>
<body style='margin: 0; padding: 20px; background-color: #f5f5f5;'>
    <div class='email-container'>
        <div class='header'>
            <img src='https://silvermoons.com/favicon.svg' alt='Silver Moon' draggable='false'>
        </div>
        
        <div class='content'>
            <div class='content-inner'>
                <h2 class='section-title'>New Contact Form Submission</h2>
                
                <div class='info-grid'>
                    <div class='info-item'>
                        <div class='info-label'>Full Name</div>
                        <div class='info-value'>${fullName}</div>
                    </div>
                    
                    <div class='info-item'>
                        <div class='info-label'>Email Address</div>
                        <div class='info-value'>
                            <a href='mailto:${escapedEmail}' style='color: #5a5c47; text-decoration: none;'>${escapedEmail}</a>
                        </div>
                    </div>
                    
                    <div class='info-item'>
                        <div class='info-label'>Subject</div>
                        <div class='info-value'>${escapedSubject}</div>
                    </div>
                </div>
                
                <h3 style='font-size: 18px; font-weight: 700; margin: 30px 0 15px 0; color: #2c2c2c;'>Message</h3>
                <div class='message-box'>
                    <p class='message-text'>${escapedMessage}</p>
                </div>
            </div>
        </div>
        
        <div class='footer'>
            <p>This email was sent from your website contact form.</p>
            <p style='margin-top: 10px;'>© ${currentYear} Silver Moon. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`;
}

function getPlainTextTemplate(firstName, lastName, email, subject, message) {
    return `
New Contact Form Submission

Full Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This email was sent from your website contact form.
© ${new Date().getFullYear()} Silver Moon. All rights reserved.
    `.trim();
}

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { firstName, lastName, email, message, subject } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message || !subject) {
        return res.status(400).json({ message: "All fields are required" });
    }

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
        res.status(500).json({
            message: "Error sending email",
            error: error.message
        });
    }
}