const nameRegx = /^[A-Za-z_ ][A-Za-z0-9_ ]{2,29}$/;
const emailRegx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const mobileRegx = /^(\+\d{1,3}[- ]?)?\d{10}$/;

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

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

    if (SENDGRID_API_KEY) {
      const sgMail = require("@sendgrid/mail");
      sgMail.setApiKey(SENDGRID_API_KEY);

      const msgToAronWorks = {
        to: "hello@aronworks.com", // Change to your recipient
        from: "hello@aronworks.com", // Change to your verified sender
        subject: "Lead from AronWorks Contact Us form!",
        text: `Name: ${fullName} | Mobile: ${mobile} | Email: ${email} | Message: ${message}`,
        html: `
        <div>
          <div>Hi Team,</div>
          <div><br /></div>
          <div>Name: ${fullName}</div>
          <div><br /></div>
          <div>Mobile: ${mobile}</div>
          <div><br /></div>
          <div>Email: ${email}</div>
          <div><br /></div>
          <div>Message: ${message}</div>
          <div><br /></div>
        </div>`,
      };

      const msgToLead = {
        to: email, // Change to your recipient
        from: "hello@aronworks.com", // Change to your verified sender
        subject: "Thank you for getting in touch with AronWorks!",
        text: `Hi ${fullName}, 

        We appreciate for you contacting us! We have received your message and would like to thank you for writing to us.
        If your inquiry is urgent, please WhatsApp or call us at +91 7708 521 528 to talk to one of our staff
        members.
        
        Otherwise, We will get back in touch with you ASAP!
        
        Talk to you soon, AronWorks`,
        html: `
        <div>
          <div>Hi ${fullName},</div>
          <div><br /></div>
          <div>We appreciate for you contacting us!</div>
          <div><br /></div>
          <div>
            We have received your message and would like to thank you for writing to us.
            If your inquiry is urgent, please WhatsApp or call us at
            <a href="tel:+917708521528">+91 7708 521 528</a> to talk to one of our staff
            members.
          </div>
          <div><br /></div>
          <div>Otherwise, We will get back in touch with you ASAP!</div>
          <div><br /></div>
          <div>Talk to you soon, AronWorks</div>
        </div>`,
      };

      sgMail
        .send(msgToAronWorks)
        .then(() => {})
        .catch((error) => {
          console.error(error);
        });

      sgMail
        .send(msgToLead)
        .then(() => {})
        .catch((error) => {
          console.error(error);
        });
    }

    res.status(200).json({ msg: "Thank you for contacting us!" });
  }
}
