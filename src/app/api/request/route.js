import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const {
      name,
      email,
      phone,
      requestType,
      message,
    } = bodyJSON;

    // Configure nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail email
        pass: process.env.EMAIL_PASS, // Your Gmail password or app password
      },
      tls: {
        rejectUnauthorized: false, // This bypasses the certificate validation
      },
    });

    // Set up email data for the recipient
    const mailOptionsRecipient = {
      from: '"Clarity Global" <info@clarityglobal.si>', // Sender address
      to: "info@clarityglobal.si ", // Change to your recipient's email
      subject: "Assistance Request Confirmation",
      text: `Name: ${name}\n
      Email: ${email}\n
      Phone: ${phone}\n
      Request Type: ${requestType}\n
      Message: ${message}`,
    };

    // Set up email data for the client
    const mailOptionsClient = {
      from: '"Clarity Global" <info@clarityglobal.si>', // Sender address
      to: email, // Client's email
      subject: "Assistance Request Confirmation",
      html: `
       
      `,
    };

    // Send email to the recipient
    await transporter.sendMail(mailOptionsRecipient);
    // Send email to the client
    //await transporter.sendMail(mailOptionsClient);

    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.status(500).json({
      message: "COULD NOT SEND MESSAGE",
      error: error.message,
    });
  }
}
