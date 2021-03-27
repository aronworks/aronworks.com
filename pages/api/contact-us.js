const nameRegx = /^[A-Za-z_ ][A-Za-z0-9_ ]{2,29}$/;
const emailRegx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const mobileRegx = /^(\+\d{1,3}[- ]?)?\d{10}$/;

// const SENDGRID_API_KEY = "123";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name: fullName, mobile, email, message } = req.body;

    const isMobileValid = mobileRegx.test(mobile);
    const isEmailValid = emailRegx.test(email);
    const isNameValid = nameRegx.test(fullName);

    const error = {};

    if (!isMobileValid) {
      error.mobile = true;
    }

    if (!isEmailValid) {
      error.email = true;
    }

    if (!isNameValid) {
      error.name = true;
    }

    if (!isNameValid || !isEmailValid || !isMobileValid) {
      res.status(400).json({ error });
      return;
    }

    // const sgMail = require("@sendgrid/mail");
    // sgMail.setApiKey(SENDGRID_API_KEY);

    // const msg = {
    //   to: "hello@aronworks.com", // Change to your recipient
    //   from: "hello@aronworks.com", // Change to your verified sender
    //   subject: "Leads from AronWorks",
    //   text: `Name: ${fullName} |  Mobile: ${mobile} | Email: ${email} | Message: ${message}`,
    // };
    // sgMail
    //   .send(msg)
    //   .then(() => {})
    //   .catch((error) => {
    //     console.error(error);
    //   });

    res.status(200).json({ msg: "Thank you for contacting us!" });
  }
}
