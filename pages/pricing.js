import React, { useState } from "react";
import { Row, Col, Container, Button, Collapse } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

const Pricing1 = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  const [openItem, setOpenItem] = useState(1);

  return (
    <>
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
        <div className="inner-banner bg-default-2 pt-25 pt-lg-29">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col lg="9" xl="8">
                <div className="px-md-15 text-center mb-5 mb-lg-13">
                  <h2 className="title gr-text-2 mb-9 mb-lg-12">
                    Pricing &amp; Plans
                  </h2>
                  <p className="gr-text-8 mb-0">
                    Choose the right plan for your business growth.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="pricing-section bg-default-2 pb-7 pb-lg-20">
          <Container>
            <div className="text-center pt-9">
              <div
                className="mb-13 d-inline-flex position-relative"
                id="pricing-dynamic-deck--head"
              >
                <span className="period month gr-text-8 gr-text-color ">
                  Monthly
                </span>
                <a
                  href="/"
                  className={`btn-toggle mx-3 price-deck-trigger ${
                    isMonthly ? "" : "active"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMonthly(!isMonthly);
                  }}
                >
                  <span className="round"></span>
                </a>
                <span className="period year gr-text-8 gr-text-color">
                  Yearly
                </span>
                <span className="badge gr-badge text-primary gr-text-12 gr-bg-primary-opacity-1 rounded-pill ml-5 text-uppercase">
                  Save 25%
                </span>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-10 mb-9">
                  <div className="pricing-card bg-white gr-hover-shadow-1 border text-left pt-9 pb-9 pr-9 pr-xl-13  pl-9 pl-xl-13 bg-white rounded-10">
                    <div className="price-content">
                      <span className="small-title gr-text-12 text-primary font-weight-bold text-uppercase">
                        Starter
                      </span>
                      <div className="d-flex align-items-end mt-11 ">
                        <span className="currency mr-2 gr-text-6 font-weight-bold line-spacing-none text-blackish-blue">
                          $
                        </span>
                        <h2 className="price-value gr-text-2 font-weight-bold line-spacing-none mb-0 text-blackish-blue">
                          {isMonthly ? "49" : "19"}
                          <span className="d-none">.</span>
                        </h2>
                        <span className="per gr-text-9 text-blackish-blue">
                          /month
                        </span>
                      </div>
                      <span className="price-bottom-text gr-text-11 mt-5 text-blackish-blue gr-opacity-7 d-inline-flex">
                        {isMonthly ? "billed monthly" : "billed yearly"}
                      </span>
                      <ul className="card-list list-style-check pl-0 mt-7 mt-lg-11">
                        <li className="gr-text-9">
                          <i className="icon icon-check-simple"></i>Commercial
                          License
                        </li>
                        <li className="gr-text-9">
                          <i className="icon icon-check-simple"></i>100+ HTML UI
                          Elements
                        </li>
                        <li className="gr-text-9">
                          <i className="icon icon-check-simple"></i>Unlimited
                          Domain Support
                        </li>
                        <li className="disabled gr-text-9">
                          <i className="icon icon-simple-remove"></i>6 months
                          premium support
                        </li>
                        <li className="disabled gr-text-9">
                          <i className="icon icon-simple-remove"></i>Lifetime
                          updates
                        </li>
                      </ul>
                    </div>
                    <Button className="with-icon gr-hover-y px-xl-8 px-lg-4 px-sm-8 px-4">
                      Start Free Trial
                      <i className="icon icon-tail-right font-weight-bold"></i>
                    </Button>
                    <span className="btn-bottom-text d-block gr-text-11 text-blackish-blue gr-opacity-7 mt-5">
                      No credit card required
                    </span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 mb-9">
                  <div className="pricing-card bg-white gr-hover-shadow-1 border text-left pt-9 pb-9 pr-9 pr-xl-13  pl-9 pl-xl-13 bg-white rounded-10">
                    <div className="price-content">
                      <span className="small-title gr-text-12 text-primary font-weight-bold text-uppercase">
                        Standard
                      </span>
                      <div className="d-flex align-items-end mt-11 ">
                        <span className="currency mr-2 gr-text-6 font-weight-bold line-spacing-none text-blackish-blue">
                          $
                        </span>
                        <h2 className="price-value gr-text-2 font-weight-bold line-spacing-none mb-0 text-blackish-blue">
                          {isMonthly ? "99" : "49"}
                          <span className="d-none">.</span>
                        </h2>
                        <span className="per gr-text-9 text-blackish-blue">
                          /month
                        </span>
                      </div>
                      <span className="price-bottom-text gr-text-11 mt-5 text-blackish-blue gr-opacity-7 d-inline-flex">
                        {" "}
                        {isMonthly ? "billed monthly" : "billed yearly"}
                      </span>
                      <ul className="card-list list-style-check pl-0 mt-7 mt-lg-11">
                        <li className="gr-text-9">
                          <i className="icon icon-check-simple"></i>Commercial
                          License
                        </li>
                        <li className="gr-text-9">
                          <i className="icon icon-check-simple"></i>100+ HTML UI
                          Elements
                        </li>
                        <li className="gr-text-9">
                          <i className="icon icon-check-simple"></i>Unlimited
                          Domain Support
                        </li>
                        <li className="gr-text-9">
                          <i className="icon icon-check-simple"></i>6 months
                          premium support
                        </li>
                        <li className="disabled gr-text-9">
                          <i className="icon icon-simple-remove"></i>Lifetime
                          updates
                        </li>
                      </ul>
                    </div>
                    <Button className="with-icon gr-hover-y px-xl-8 px-lg-4 px-sm-8 px-4">
                      Start Free Trial
                      <i className="icon icon-tail-right font-weight-bold"></i>
                    </Button>
                    <span className="btn-bottom-text d-block gr-text-11 text-blackish-blue gr-opacity-7 mt-5">
                      No credit card required
                    </span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 mb-9">
                  <div className="pricing-card bg-white gr-hover-shadow-1 border text-left pt-9 pb-9 pr-9 pr-xl-13  pl-9 pl-xl-13 bg-white rounded-10">
                    <div className="price-content">
                      <span className="small-title gr-text-12 text-primary font-weight-bold text-uppercase">
                        Premium
                      </span>
                      <div className="d-flex align-items-end mt-11">
                        <span className="currency mr-2 gr-text-6 font-weight-bold line-spacing-none text-blackish-blue">
                          $
                        </span>
                        <h2 className="price-value gr-text-2 font-weight-bold line-spacing-none mb-0  text-blackish-blue">
                          {isMonthly ? "129" : "99"}
                          <span className="d-none">.</span>
                        </h2>
                        <span className="per gr-text-9 text-blackish-blue">
                          /month
                        </span>
                      </div>
                      <span className="price-bottom-text gr-text-11 mt-5 text-blackish-blue gr-opacity-7 d-inline-flex">
                        {" "}
                        {isMonthly ? "billed monthly" : "billed yearly"}
                      </span>
                      <ul className="card-list list-style-check pl-0 mt-7 mt-lg-11">
                        <li className="gr-text-9">
                          <i className="icon icon-check-simple"></i>Commercial
                          License
                        </li>
                        <li className="gr-text-9">
                          <i className="icon icon-check-simple"></i>100+ HTML UI
                          Elements
                        </li>
                        <li className="gr-text-9">
                          <i className="icon icon-check-simple"></i>Unlimited
                          Domain Support
                        </li>
                        <li className="gr-text-9">
                          <i className="icon icon-check-simple"></i>6 months
                          premium support
                        </li>
                        <li className="gr-text-9">
                          <i className="icon icon-check-simple"></i>Lifetime
                          updates
                        </li>
                      </ul>
                    </div>
                    <Button className="with-icon gr-hover-y px-xl-8 px-lg-4 px-sm-8 px-4">
                      Start Free Trial
                      <i className="icon icon-tail-right font-weight-bold"></i>
                    </Button>
                    <span className="btn-bottom-text d-block gr-text-11 text-blackish-blue gr-opacity-7 mt-5">
                      No credit card required
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="pb-5 pb-md-29 bg-default-2 ">
          <Container>
            <Row className="justify-content-center">
              <Col xl="8" lg="9">
                <div className="px-md-12 text-center mb-9 mb-lg-18">
                  <h2 className="title gr-text-3 mb-8">
                    Frequently Asked Questions
                  </h2>
                  <p className="gr-text-8 mb-0">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next consultancy website within
                    few minutes.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center pt-5">
              <Col lg="12">
                <div
                  className="accordion pl-9 pr-8 rounded-10 bg-white border-secondary border-top-5"
                  id="accordionExample"
                >
                  <div className="border-bottom overflow-hidden">
                    <div className="mb-0 border-bottom-0" id="heading2-1">
                      <button
                        className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue px-0 py-8 accordion-trigger arrow-icon w-100 collapsed"
                        type="button"
                        aria-controls="collapse2-1"
                        onClick={() => setOpenItem(1)}
                        aria-expanded={openItem === 1}
                      >
                        How to setup Shade Pro?
                      </button>
                    </div>

                    <Collapse in={openItem === 1}>
                      <div>
                        <div className="gr-color-blackish-blue-opacity-7 mt-n3 gr-text-9 pb-8 pr-8">
                          With lots of unique blocks, you can easily build a
                          page with coding. Build your next landing page.
                          Integer ut obe ryn. Sed feugiat vitae turpis a porta.
                        </div>
                      </div>
                    </Collapse>
                  </div>
                  <div className="border-bottom overflow-hidden">
                    <div className="mb-0 border-bottom-0" id="heading2-2">
                      <button
                        className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue px-0 py-8 accordion-trigger arrow-icon w-100 collapsed"
                        type="button"
                        data-target="#collapse2-2"
                        onClick={() => setOpenItem(2)}
                        aria-expanded={openItem === 2}
                      >
                        Can I use Shade Pro for my clients?
                      </button>
                    </div>

                    <Collapse in={openItem === 2}>
                      <div>
                        <div className="gr-color-blackish-blue-opacity-7 mt-n3 gr-text-9 pb-8 pr-8">
                          With lots of unique blocks, you can easily build a
                          page without coding. Build your next landing page.
                        </div>
                      </div>
                    </Collapse>
                  </div>
                  <div className="border-bottom overflow-hidden">
                    <div className="mb-0 border-bottom-0" id="heading2-3">
                      <button
                        className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue px-0 py-8 accordion-trigger arrow-icon w-100"
                        type="button"
                        data-target="#collapse2-3"
                        onClick={() => setOpenItem(3)}
                        aria-expanded={openItem === 3}
                      >
                        How often do you release update?
                      </button>
                    </div>

                    <Collapse in={openItem === 3}>
                      <div>
                        <div className="gr-color-blackish-blue-opacity-7 mt-n3 gr-text-9 pb-8 pr-8">
                          With lots of unique blocks, you can easily build a
                          page without coding. Build your next landing page.
                        </div>
                      </div>
                    </Collapse>
                  </div>
                  <div className="border-bottom overflow-hidden">
                    <div className="mb-0 border-bottom-0" id="heading2-3">
                      <button
                        className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue px-0 py-8 accordion-trigger arrow-icon w-100"
                        type="button"
                        data-target="#collapse2-4"
                        onClick={() => setOpenItem(4)}
                        aria-expanded={openItem === 4}
                      >
                        How can I access to old version?
                      </button>
                    </div>

                    <Collapse in={openItem === 4}>
                      <div>
                        <div className="gr-color-blackish-blue-opacity-7 mt-n3 gr-text-9 pb-8 pr-8">
                          With lots of unique blocks, you can easily build a
                          page without coding. Build your next landing page.
                        </div>
                      </div>
                    </Collapse>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default Pricing1;
