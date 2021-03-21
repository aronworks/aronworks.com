import React, { useRef, useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import Head from "next/head";
import { openFreshChat } from "../utils/freshChat";
import useFirstRender from "../utils/useFirstRender";

const nameRegx = /^[A-Za-z_ ][A-Za-z0-9_ ]{2,29}$/;
const emailRegx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const mobileRegx = /^(\+\d{1,3}[- ]?)?\d{10}$/;

const Contact = () => {
  const firstRender = useFirstRender();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isMobileValid, setIsMobileValid] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  function handleChange(event) {
    setIsFormSubmitted(false);
    const eventName = event.target.name;
    const eventValue = event.target.value;

    switch (eventName) {
      case "name":
        setName(eventValue);
        break;
      case "email":
        setEmail(eventValue);
        break;
      case "mobile":
        setMobile(eventValue);
        break;
      case "message":
        setMessage(eventValue);
        break;
    }
  }

  useEffect(
    function () {
      if (!firstRender && !isFormSubmitted) {
        const isNameValid = nameRegx.test(name);
        setIsNameValid(isNameValid);
      }
    },
    [name]
  );

  useEffect(
    function () {
      if (!firstRender && !isFormSubmitted) {
        const isEmailValid = emailRegx.test(email);
        setIsEmailValid(isEmailValid);
      }
    },
    [email]
  );

  useEffect(
    function () {
      if (!firstRender && !isFormSubmitted) {
        const isMobileValid = mobileRegx.test(mobile);
        setIsMobileValid(isMobileValid);
      }
    },
    [mobile]
  );

  function handleSubmit(event) {
    event.preventDefault();
    validateForm();

    if (
      name !== "" &&
      email !== "" &&
      mobile !== "" &&
      isNameValid &&
      isEmailValid &&
      isMobileValid
    ) {
      submitForm();
    }
  }

  function validateForm() {
    const isMobileValid = mobileRegx.test(mobile);
    setIsMobileValid(isMobileValid);

    const isEmailValid = emailRegx.test(email);
    setIsEmailValid(isEmailValid);

    const isNameValid = nameRegx.test(name);
    setIsNameValid(isNameValid);
  }

  async function submitForm() {
    const data = {
      name,
      email,
      mobile,
      message,
    };

    const response = await fetch("/api/contact-us", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    setIsFormSubmitted(true);

    clearForm();

    return response.json(); // parses JSON response into native JavaScript objects
  }

  function clearForm() {
    setName("");
    setEmail("");
    setMobile("");
    setMessage("");
  }

  return (
    <>
      <Head>
        <title>Contact Us - AronWorks</title>
        <meta
          name="description"
          content="Feel free to get in touch with us at +91 7708 521 528, +91 9940 509 401 for consultation."
        />
      </Head>
      <PageWrapper
        headerConfig={{
          theme: "light",
          align: "right",
          button: "null", // cta, account, null
        }}
        footerConfig={{
          theme: "light",
          style: "style1", //style1, style2
        }}
      >
        <div className="inner-banner pt-29 pb-md-11 bg-default-2">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col lg="9" xl="8">
                <div className="px-md-15 text-center">
                  <h2 className="title gr-text-2 mb-9">Contact us</h2>
                  <p className="gr-text-8 mb-13">
                    You've got Questions, We've got Answers.
                    <br />
                    <span
                      onClick={openFreshChat}
                      className="cursor-pointer btn-link"
                    >
                      {" "}
                      Text us
                    </span>
                    , We are more than happy to help you.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="contact-section pb-5 pb-md-19 bg-default-2 ">
          <Container>
            <Row className="justify-content-center">
              <Col
                sm="5"
                md="6"
                lg="5"
                xl="5"
                className="offset-lg-1 d-flex flex-column justify-content-center mb-9 order-sm-2"
              >
                <div className="single-contact-widget mb-13">
                  <h3 className="gr-text-6 mb-5">Call / WhatsApp us</h3>
                  <p className="gr-text-7 d-flex align-items-center justify-content-start">
                    <a
                      href="https://api.whatsapp.com/send?phone=917708521528"
                      target="_blank"
                      className="text-opacity-eerie-black"
                    >
                      +91 7708 521 528
                    </a>

                    <svg
                      viewBox="0 0 512 512"
                      height="13"
                      style={{ marginLeft: "8px" }}
                      fill="rgba(34, 34, 34, 0.7)"
                    >
                      <path d="M488.727 0H302.545c-12.853 0-23.273 10.42-23.273 23.273s10.42 23.273 23.273 23.273h129.997L192.999 286.09c-9.089 9.089-9.089 23.823 0 32.912a23.195 23.195 0 0016.455 6.816 23.194 23.194 0 0016.457-6.817L465.455 79.458v129.997c0 12.853 10.42 23.273 23.273 23.273s23.273-10.42 23.273-23.273V23.273C512 10.42 501.58 0 488.727 0z" />
                      <path d="M395.636 232.727c-12.853 0-23.273 10.42-23.273 23.273v209.455H46.545V139.636H256c12.853 0 23.273-10.42 23.273-23.273S268.853 93.091 256 93.091H23.273C10.42 93.091 0 103.511 0 116.364v372.364C0 501.58 10.42 512 23.273 512h372.364c12.853 0 23.273-10.42 23.273-23.273V256c-.001-12.853-10.421-23.273-23.274-23.273z" />
                    </svg>
                  </p>

                  <p className="gr-text-7 mb-0 d-flex align-items-center justify-content-start">
                    <a
                      href="https://api.whatsapp.com/send?phone=919940509401"
                      target="_blank"
                      className="text-opacity-eerie-black"
                    >
                      +91 9940 509 401
                    </a>

                    <svg
                      viewBox="0 0 512 512"
                      height="13"
                      style={{ marginLeft: "8px" }}
                      fill="rgba(34, 34, 34, 0.7)"
                    >
                      <path d="M488.727 0H302.545c-12.853 0-23.273 10.42-23.273 23.273s10.42 23.273 23.273 23.273h129.997L192.999 286.09c-9.089 9.089-9.089 23.823 0 32.912a23.195 23.195 0 0016.455 6.816 23.194 23.194 0 0016.457-6.817L465.455 79.458v129.997c0 12.853 10.42 23.273 23.273 23.273s23.273-10.42 23.273-23.273V23.273C512 10.42 501.58 0 488.727 0z" />
                      <path d="M395.636 232.727c-12.853 0-23.273 10.42-23.273 23.273v209.455H46.545V139.636H256c12.853 0 23.273-10.42 23.273-23.273S268.853 93.091 256 93.091H23.273C10.42 93.091 0 103.511 0 116.364v372.364C0 501.58 10.42 512 23.273 512h372.364c12.853 0 23.273-10.42 23.273-23.273V256c-.001-12.853-10.421-23.273-23.274-23.273z" />
                    </svg>
                  </p>
                </div>
                <div className="single-contact-widget mb-13">
                  <h3 className="gr-text-6 mb-5">Email us</h3>
                  <p className="gr-text-7 mb-0 d-flex align-items-center justify-content-start">
                    <a
                      href="mailto:hello@aronworks.com"
                      className="text-opacity-eerie-black"
                    >
                      hello@aronworks.com
                    </a>

                    <svg
                      viewBox="0 0 512 512"
                      height="13"
                      style={{ marginLeft: "8px" }}
                      fill="rgba(34, 34, 34, 0.7)"
                    >
                      <path d="M488.727 0H302.545c-12.853 0-23.273 10.42-23.273 23.273s10.42 23.273 23.273 23.273h129.997L192.999 286.09c-9.089 9.089-9.089 23.823 0 32.912a23.195 23.195 0 0016.455 6.816 23.194 23.194 0 0016.457-6.817L465.455 79.458v129.997c0 12.853 10.42 23.273 23.273 23.273s23.273-10.42 23.273-23.273V23.273C512 10.42 501.58 0 488.727 0z" />
                      <path d="M395.636 232.727c-12.853 0-23.273 10.42-23.273 23.273v209.455H46.545V139.636H256c12.853 0 23.273-10.42 23.273-23.273S268.853 93.091 256 93.091H23.273C10.42 93.091 0 103.511 0 116.364v372.364C0 501.58 10.42 512 23.273 512h372.364c12.853 0 23.273-10.42 23.273-23.273V256c-.001-12.853-10.421-23.273-23.274-23.273z" />
                    </svg>
                  </p>
                </div>
                <div className="single-contact-widget">
                  <h3 className="gr-text-6 mb-5">Visit us</h3>
                  <p className="gr-text-7 mb-0">
                    No. 4025, Mapleton Apt,
                    <br />
                    Chennai, India 600100
                  </p>
                </div>
              </Col>
              <Col sm="7" md="6" lg="5" xl="4" className="order-sm-1">
                <div className="login-form bg-white border-gray-3 px-7 pt-8 pb-9 shadow-1 rounded-10">
                  <form
                    name="contact1"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    {/* You still need to add the hidden input with the form name to your JSX form */}
                    <input type="hidden" name="form-name" value="contact1" />
                    <div className="form-group">
                      <label
                        htmlFor="name"
                        className="gr-text-11 font-weight-bold text-blackish-blue"
                      >
                        Name
                      </label>
                      <input
                        className="form-control px-7 gr-text-11 border"
                        type="text"
                        value={name}
                        id="name"
                        name="name"
                        placeholder="i.e. John Doe"
                        required
                        onChange={handleChange}
                      />

                      {!isNameValid && (
                        <p className="gr-text-12 text-primary mt-2">
                          Enter a valid Name
                        </p>
                      )}
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="name"
                        className="gr-text-11 font-weight-bold text-blackish-blue"
                      >
                        Email
                      </label>
                      <input
                        className="form-control px-7 gr-text-11 border"
                        type="text"
                        value={email}
                        id="email"
                        name="email"
                        placeholder="i.e. john@mail.com"
                        required
                        onChange={handleChange}
                      />
                      {!isEmailValid && (
                        <p className="gr-text-12 text-primary mt-2">
                          Enter a valid Email
                        </p>
                      )}
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="name"
                        className="gr-text-11 font-weight-bold text-blackish-blue"
                      >
                        Mobile
                      </label>
                      <input
                        className="form-control px-7 gr-text-11 border"
                        type="text"
                        value={mobile}
                        id="mobile"
                        name="mobile"
                        placeholder="i.e. 123-456-7890"
                        required
                        onChange={handleChange}
                      />
                      {!isMobileValid && (
                        <p className="gr-text-12 text-primary mt-2">
                          Enter a valid Mobile
                        </p>
                      )}
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="message"
                        className="gr-text-11 font-weight-bold text-blackish-blue"
                      >
                        Message
                      </label>
                      <textarea
                        className="form-control px-7 gr-text-11 border"
                        value={message}
                        id="message"
                        name="message"
                        placeholder="Type your message"
                        rows="3"
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    {isFormSubmitted && (
                      <p className="gr-text-10 text-green mt-2">
                        Thank you for contacting us!
                      </p>
                    )}

                    <div className="button-block mb-2">
                      <Button
                        onClick={handleSubmit}
                        className="form-btn w-100"
                        type="submit"
                      >
                        Send
                      </Button>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default Contact;
