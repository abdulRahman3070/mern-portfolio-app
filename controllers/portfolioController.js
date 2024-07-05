const postmark = require("postmark");
require('dotenv').config();

// Initialize the Postmark client with your server token from environment variables
const client = new postmark.ServerClient(process.env.POSTMARK_SERVER_TOKEN);

const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // Validation
    if (!name || !email || !msg) {
      return res.status(400).send({
        success: false,
        message: "Please provide all fields"
      });
    }

    // Define the email details
    const emailDetails = {
      From: process.env.EMAIL_FROM, // Sender's email address (configured in Postmark)
      To: "2019gu3557@student.gudgk.edu.pk", // Recipient's email address (replace with dynamic value if needed)
      Subject: "Regarding Mern Portfolio App", // Email subject
      HtmlBody: `
        <h5>Detail Information</h5>
        <ul>
          <li><p>Name: ${name}</p></li>
          <li><p>Email: ${email}</p></li>
          <li><p>Message: ${msg}</p></li>
        </ul>
      ` // HTML body
    };

    // Send the email using Postmark
    client.sendEmail(emailDetails)
      .then(response => {
        console.log("Email sent successfully:", response);
        return res.status(200).send({
          success: true,
          message: "Your message is sent successfully"
        });
      })
      .catch(error => {
        console.error("Error sending email:", error);
        return res.status(500).send({
          success: false,
          message: "Send Email API Error",
          error: error.message
        });
      });

  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error: error.message,
    });
  }
};

module.exports = { sendEmailController };
