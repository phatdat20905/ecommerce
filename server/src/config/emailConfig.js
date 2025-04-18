import nodemailer from 'nodemailer';

// Cấu hình transporter cho nodemailer
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Template cho email OTP
const createOtpEmailTemplate = (otp) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #007bff; color: white; padding: 10px; text-align: center; }
    .content { padding: 20px; background-color: #f9f9f9; }
    .otp { font-size: 24px; font-weight: bold; color: #007bff; text-align: center; }
    .footer { text-align: center; font-size: 12px; color: #777; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>E-commerce App</h2>
    </div>
    <div class="content">
      <h3>Hello,</h3>
      <p>We received a request to reset your password. Use the OTP below to proceed:</p>
      <p class="otp">${otp}</p>
      <p>This OTP is valid for 10 minutes. If you did not request a password reset, please ignore this email.</p>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} E-commerce App. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

// Template cho email xác nhận đặt lại mật khẩu
const createResetConfirmationTemplate = () => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #007bff; color: white; padding: 10px; text-align: center; }
    .content { padding: 20px; background-color: #f9f9f9; }
    .footer { text-align: center; font-size: 12px; color: #777; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>E-commerce App</h2>
    </div>
    <div class="content">
      <h3>Hello,</h3>
      <p>Your password has been successfully reset.</p>
      <p>If you did not perform this action, please contact our support team immediately.</p>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} E-commerce App. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

// Hàm gửi email
export const sendEmail = async (to, subject, otp = null) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to,
            subject,
            html: otp ? createOtpEmailTemplate(otp) : createResetConfirmationTemplate(),
        };

        await transporter.sendMail(mailOptions);
        return {
            errCode: 0,
            errMessage: 'Email sent successfully',
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error sending email: ${error.message}`,
        };
    }
};