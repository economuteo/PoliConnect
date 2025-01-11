import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendVerificationEmail = (email, code) => {
    const mailOptions = {
        from: "poliConnectSocialApp@gmail.com",
        to: email,
        subject: "Verification Code",
        text: `Your verification code is: ${code} ! Don't share it with anyone!`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
};
