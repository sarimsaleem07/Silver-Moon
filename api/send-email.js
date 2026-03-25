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
        :root {
            --primary-color: #78A0C8;
            --secondary-color: #8CB4C8;
            --text-color: #212529;
            --heading-color: #1A2B3C;
            --white: #ffffff;
            --black: #000000;
            --gradient-bg: linear-gradient(135deg, #f2f4f8 0%, #B0D0E2 70%, #A0C0D8 80%);
            --gradient-card: linear-gradient(to top left, #E3EFF8 0%, #F1F7FC 45%, #ffffff 80%);
            --btn-gradient: linear-gradient(to bottom right, #8CB4C8, #78A0C8);
            --border-radius: 16px;
            --box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }
        
        body {
            margin: 0;
            padding: 20px;
            font-family: 'Montserrat', 'Helvetica Neue', 'Segoe UI', Arial, sans-serif;
            background: linear-gradient(135deg, #f2f4f8 0%, #B0D0E2 70%, #A0C0D8 80%);
            color: var(--text-color);
            line-height: 1.6;
        }
        
        .email-container {
            max-width: 650px;
            margin: 0 auto;
            background: linear-gradient(to top left, #E3EFF8 0%, #F1F7FC 45%, #ffffff 80%);
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: var(--box-shadow);
            border: 1px solid rgba(120, 160, 200, 0.2);
        }
        
        /* Header Section */
        .header {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            padding: 40px 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
            animation: shimmer 8s infinite;
        }
        
        @keyframes shimmer {
            0% { transform: translate(0, 0); }
            100% { transform: translate(20%, 20%); }
        }
        
        .header img {
            max-width: 180px;
            height: auto;
            position: relative;
            z-index: 1;
            filter: brightness(0) invert(1);
            transition: transform 0.3s ease;
        }
        
        .header img:hover {
            transform: scale(1.05);
        }
        
        /* Content Section */
        .content {
            padding: 50px 40px;
        }
        
        .greeting {
            margin-bottom: 30px;
        }
        
        .greeting h1 {
            font-size: 28px;
            font-weight: 700;
            margin: 0 0 10px 0;
            color: var(--heading-color);
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .greeting p {
            font-size: 16px;
            color: #5a6e7c;
            margin: 0;
        }
        
        /* Info Cards */
        .info-grid {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin: 30px 0;
        }
        
        .info-card {
            background: var(--white);
            border-radius: 12px;
            padding: 18px 22px;
            border-left: 4px solid var(--primary-color);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .info-card:hover {
            transform: translateX(5px);
            box-shadow: 0 4px 12px rgba(120, 160, 200, 0.15);
        }
        
        .info-label {
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 8px;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            display: inline-block;
            background: rgba(120, 160, 200, 0.1);
            padding: 3px 10px;
            border-radius: 20px;
        }
        
        .info-value {
            font-size: 16px;
            color: var(--heading-color);
            word-break: break-word;
            margin-top: 8px;
            font-weight: 500;
        }
        
        .info-value a {
            color: var(--primary-color);
            text-decoration: none;
            border-bottom: 1px dashed var(--secondary-color);
            transition: color 0.2s ease;
        }
        
        .info-value a:hover {
            color: var(--secondary-color);
            border-bottom-color: var(--primary-color);
        }
        
        /* Message Section */
        .message-section {
            margin: 30px 0 20px;
        }
        
        .message-section h2 {
            font-size: 20px;
            font-weight: 700;
            margin: 0 0 15px 0;
            color: var(--heading-color);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .message-section h2::before {
            content: '💬';
            font-size: 24px;
        }
        
        .message-box {
            background: linear-gradient(135deg, #F8FBFE 0%, var(--white) 100%);
            padding: 25px;
            border-radius: 16px;
            border: 1px solid rgba(120, 160, 200, 0.2);
            box-shadow: inset 0 1px 3px rgba(0,0,0,0.02), 0 2px 4px rgba(0,0,0,0.02);
        }
        
        .message-text {
            font-size: 15px;
            line-height: 1.7;
            color: #2c3e44;
            margin: 0;
            white-space: pre-wrap;
            font-style: normal;
        }
        
        /* Divider */
        .divider {
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--secondary-color), transparent);
            margin: 35px 0 20px;
        }
        
        /* Quick Actions */
        .quick-actions {
            background: rgba(120, 160, 200, 0.05);
            border-radius: 12px;
            padding: 20px;
            margin-top: 25px;
            text-align: center;
        }
        
        .quick-actions p {
            margin: 0 0 15px 0;
            font-size: 13px;
            color: #5a6e7c;
        }
        
        .action-button {
            display: inline-block;
            background: linear-gradient(to bottom right, #8CB4C8, #78A0C8);
            color: white !important;
            padding: 10px 24px;
            border-radius: 30px;
            text-decoration: none;
            font-size: 14px;
            font-weight: 600;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            box-shadow: 0 2px 8px rgba(120, 160, 200, 0.3);
        }
        
        .action-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(120, 160, 200, 0.4);
        }
        
        /* Footer */
        .footer {
            background: linear-gradient(135deg, #E3EFF8, #F1F7FC);
            padding: 30px 40px;
            text-align: center;
            border-top: 1px solid rgba(120, 160, 200, 0.2);
        }
        
        .footer p {
            margin: 0 0 10px 0;
            font-size: 12px;
            color: #6c7e8c;
        }
        
        .footer .social-links {
            margin-top: 15px;
            display: flex;
            justify-content: center;
            gap: 20px;
        }
        
        .footer .social-links a {
            color: var(--primary-color);
            text-decoration: none;
            font-size: 13px;
            transition: color 0.2s ease;
        }
        
        .footer .social-links a:hover {
            color: var(--secondary-color);
        }
        
        /* Responsive */
        @media only screen and (max-width: 600px) {
            body {
                padding: 10px;
            }
            
            .content {
                padding: 30px 20px;
            }
            
            .header {
                padding: 30px 20px;
            }
            
            .info-card {
                padding: 15px 18px;
            }
            
            .greeting h1 {
                font-size: 24px;
            }
            
            .footer {
                padding: 25px 20px;
            }
        }
        
        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .email-container {
            animation: fadeInUp 0.5s ease-out;
        }
    </style>
</head>
<body>
    <div class='email-container'>
        <!-- Header with Brand -->
        <div class='header'>
            <img src='https://silvermoons.com/favicon.svg' alt='Silver Moon' draggable='false'>
        </div>
        
        <!-- Main Content -->
        <div class='content'>
            <div class='greeting'>
                <h1>New Contact Form Submission ✨</h1>
                <p>You have received a new message from your website contact form</p>
            </div>
            
            <!-- Information Cards -->
            <div class='info-grid'>
                <div class='info-card'>
                    <div class='info-label'>👤 Full Name</div>
                    <div class='info-value'>${fullName}</div>
                </div>
                
                <div class='info-card'>
                    <div class='info-label'>📧 Email Address</div>
                    <div class='info-value'>
                        <a href='mailto:${escapedEmail}'>${escapedEmail}</a>
                    </div>
                </div>
                
                <div class='info-card'>
                    <div class='info-label'>📌 Subject</div>
                    <div class='info-value'>${escapedSubject}</div>
                </div>
            </div>
            
            <!-- Message Section -->
            <div class='message-section'>
                <h2>Message Content</h2>
                <div class='message-box'>
                    <p class='message-text'>${escapedMessage || 'No message provided'}</p>
                </div>
            </div>
            
            <!-- Quick Actions -->
            <div class='quick-actions'>
                <p>💡 Quick Actions</p>
                <a href='mailto:${escapedEmail}?subject=Re: ${encodeURIComponent(escapedSubject)}' class='action-button'>
                    Reply to ${firstName}
                </a>
            </div>
            
            <div class='divider'></div>
            
            <div style='text-align: center; margin-top: 20px;'>
                <p style='font-size: 13px; color: #7a8c9a; margin: 0;'>
                    ⚡ This message was sent from your website's contact form
                </p>
            </div>
        </div>
        
        <!-- Footer -->
        <div class='footer'>
            <p>© ${currentYear} Silver Moon. All rights reserved.</p>
            <p style='font-size: 11px;'>This email was automatically sent from your website contact form.</p>
            <div class='social-links'>
                <a href='#'>Website</a>
                <a href='#'>Contact</a>
                <a href='#'>Privacy Policy</a>
            </div>
        </div>
    </div>
</body>
</html>`;
}

function getPlainTextTemplate(firstName, lastName, email, subject, message) {
    return `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEW CONTACT FORM SUBMISSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Full Name: ${firstName} ${lastName}
📧 Email: ${email}
📌 Subject: ${subject}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 MESSAGE CONTENT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 Quick Action: Reply to ${firstName} at ${email}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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
            subject: `📬 ${subject}`,
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