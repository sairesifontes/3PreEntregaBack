import nodemailer from "nodemailer";
import envs from "../config/env.config.js";
import __dirname from "../../dirname.js";

export const sendMail = async (email, subject, message, template) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    auth: {
      user: "sairesifontes@gmail.com",
      pass: envs.GMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: "sairesifontes@gmail.com",
    to: email,
    subject,
    text: message,
    html: template,
    attachments: [
      {
        filename: "perrito.jpg",
        path: __dirname + "/public/images/perrito.jpg",
        cid: "perrito",
      },
    ],
  });
};