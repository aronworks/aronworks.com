import React, { useContext } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../Logo";

import GlobalContext from "../../context/GlobalContext";

const Footer = () => {
  const gContext = useContext(GlobalContext);

  const contactClassName =
    gContext.footer.theme === "dark" ? "gr-text-color" : "text-primary";

  const linkClassName =
    gContext.footer.theme === "dark"
      ? "gr-text-color gr-hover-text-red"
      : "gr-text-color gr-hover-text-red";

  const iconClassName =
    gContext.footer.theme === "dark"
      ? "gr-text-color"
      : "gr-text-color gr-hover-text-red";

  const copyClassName =
    gContext.footer.theme === "dark"
      ? "gr-text-color-opacity"
      : "gr-text-color";

  return (
    <>
      <div
        className={`footer-section ${
          gContext.footer.theme === "dark"
            ? "bg-blackish-blue dark-mode-texts"
            : ""
        }`}
      >
        <Container>
          <div className="copyright-area border-top py-9">
            <div className="footer-section bg-default-4 py-9 ">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-3 col-md-4">
                  <div className="footer-logo text-center text-md-left mb-7 mb-md-0">
                    <Logo />
                  </div>
                </div>
                <div className="col-lg-8 offset-lg-1 col-md-8">
                  <ul className="footer-links gr-text-11 py-lg-7 list-unstyled mb-0 d-xs-flex align-items-center justify-content-around justify-content-md-end flex-wrap">
                    <li className="ml-md-12 text-center">
                      <a
                        href
                        className="gr-text-color gr-hover-text-blue font-weight-bold "
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li className="ml-md-12 text-center">
                      <a
                        href
                        className="gr-text-color gr-hover-text-blue font-weight-bold "
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li className="ml-md-12 text-center">
                      <a
                        href
                        className="gr-text-color gr-hover-text-blue font-weight-bold "
                      >
                        Support
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="copyright-area border-top py-9">
              <Row className="align-items-center">
                <Col lg="6">
                  <p
                    className={`copyright-text gr-text-11 mb-6 mb-lg-0 text-center text-lg-left ${copyClassName}`}
                  >
                    © 2020 Copyright, All Right Reserved, Made by Grayic with
                    <i
                      className={`icon icon-heart-2-2 ${
                        gContext.footer.theme === "dark"
                          ? "text-sky-blue"
                          : "text-green"
                      } align-middle ml-2`}
                    ></i>
                  </p>
                </Col>
                <Col lg="6" className="text-center text-lg-right">
                  <ul className="social-icons list-unstyled mb-0">
                    <li className="ml-7">
                      <Link href="/">
                        <a className={iconClassName}>
                          <i className="icon icon-logo-twitter"></i>
                        </a>
                      </Link>
                    </li>
                    <li className="ml-7">
                      <Link href="/">
                        <a className={iconClassName}>
                          <i className="icon icon-logo-facebook"></i>
                        </a>
                      </Link>
                    </li>
                    <li className="ml-7">
                      <Link href="/">
                        <a className={iconClassName}>
                          <i className="icon icon-instant-camera-2"></i>
                        </a>
                      </Link>
                    </li>
                    <li className="ml-7">
                      <Link href="/">
                        <a className={iconClassName}>
                          <i className="icon icon-logo-linkedin"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
