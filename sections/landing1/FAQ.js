import React, { useState } from "react";
import { Row, Col, Container, Collapse } from "react-bootstrap";
import Link from "next/link";
import { openFreshChat } from "../../utils/freshChat";

const FAQ = () => {
  const [openItem, setOpenItem] = useState(1);

  return (
    <div className="bg-default-2 pt-lg-7 pb-9 pb-lg-22">
      <Container>
        <Row className="justify-content-center">
          <Col xl="8" lg="9">
            <div className="px-md-12 text-center mb-9 mb-lg-18">
              <h2 className="title gr-text-3 mb-8">
                Frequently Asked Questions
              </h2>
              <p className="gr-text-8 mb-0">
                Just scroll down, May be we've already addressed your query.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xl="8" lg="9">
            <div className="accordion" id="accordionExample">
              <div className="border rounded-10 mb-3 bg-white overflow-hidden">
                <div
                  className="mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white"
                  id="heading4-1"
                >
                  <button
                    className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue p-0 accordion-trigger arrow-icon w-100"
                    type="button"
                    aria-controls="collapse-1"
                    onClick={() => setOpenItem(1)}
                    aria-expanded={openItem === 1}
                  >
                    What is the time duration you take to design my website?
                  </button>
                </div>
                <Collapse in={openItem === 1}>
                  <div>
                    <div className="card-body gr-color-blackish-blue-opacity-7 pt-0 pl-9 pr-15 gr-text-9 pb-9">
                      Websites vary from simple to complex. Complex sites take
                      time because of the intricacies involved but if there are
                      deadlines to meet, we consider it. By and large, it takes
                      1 week to a month based on the requirement.
                    </div>
                  </div>
                </Collapse>
              </div>
              <div className="border rounded-10 mb-3 bg-white overflow-hidden">
                <div
                  className="mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white"
                  id="heading4-2"
                >
                  <button
                    className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue p-0 accordion-trigger arrow-icon w-100"
                    type="button"
                    aria-controls="collapse-2"
                    onClick={() => setOpenItem(2)}
                    aria-expanded={openItem === 2}
                  >
                    Is there any hidden charge with AronWorks?
                  </button>
                </div>
                <Collapse in={openItem === 2}>
                  <div>
                    <div className="card-body gr-color-blackish-blue-opacity-7 pt-0 pl-9 pr-15 gr-text-9 pb-9">
                      Definitely No, There is no hidden charge with us. We
                      adhere to whatever price quoted during the initial
                      agreement when the project was finalised.
                      <p className="gr-text-9 mb-0 mt-5">
                        With AronWorks “What you see is What you get”
                      </p>
                    </div>
                  </div>
                </Collapse>
              </div>
              <div className="border rounded-10 mb-3 bg-white overflow-hidden">
                <div
                  className="mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white"
                  id="heading4-3"
                >
                  <button
                    className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue p-0 accordion-trigger arrow-icon w-100"
                    type="button"
                    aria-controls="collapse-3"
                    onClick={() => setOpenItem(3)}
                    aria-expanded={openItem === 3}
                  >
                    Do you provide only Web design or Web hosting is also
                    included?
                  </button>
                </div>
                <Collapse in={openItem === 3}>
                  <div>
                    <div className="card-body gr-color-blackish-blue-opacity-7 pt-0 pl-9 pr-15 gr-text-9 pb-9">
                      We are a one-stop-shop for all web development services.
                      We take care of everything like domain name registering,
                      designing, building and maintaining your website. We also
                      offer 1 year of free maintenance.
                    </div>
                  </div>
                </Collapse>
              </div>
              <div className="border rounded-10 mb-3 bg-white overflow-hidden">
                <div
                  className="mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white"
                  id="heading4-4"
                >
                  <button
                    className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue p-0 accordion-trigger arrow-icon w-100"
                    type="button"
                    aria-controls="collapse-4"
                    onClick={() => setOpenItem(4)}
                    aria-expanded={openItem === 4}
                  >
                    We are planning to revamp our Website. Do you offer a
                    redesign?
                  </button>
                </div>
                <Collapse in={openItem === 4}>
                  <div>
                    <div className="card-body gr-color-blackish-blue-opacity-7 pt-0 pl-9 pr-15 gr-text-9 pb-9">
                      Yes. We certainly redesign any kind of existing sites by
                      either retaining the original brand style or by completely
                      giving a new makeover. Apart from redesigning we also do
                      performance improvement for your website.
                    </div>
                  </div>
                </Collapse>
              </div>
              <div className="border rounded-10 mb-3 bg-white overflow-hidden">
                <div
                  className="mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white"
                  id="heading4-5"
                >
                  <button
                    className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue p-0 accordion-trigger arrow-icon w-100"
                    type="button"
                    aria-controls="collapse-5"
                    onClick={() => setOpenItem(5)}
                    aria-expanded={openItem === 5}
                  >
                    Do I get to see my website while it's in-progress?
                  </button>
                </div>
                <Collapse in={openItem === 5}>
                  <div>
                    <div className="card-body gr-color-blackish-blue-opacity-7 pt-0 pl-9 pr-15 gr-text-9 pb-9">
                      Absolutely, You get to see it while work in progress as we
                      look forward to your feedback to check the compatibility
                      of our design with your style or to make any other
                      necessary changes as deemed fit by you.
                    </div>
                  </div>
                </Collapse>
              </div>

              <div className="border rounded-10 mb-3 bg-white overflow-hidden">
                <div
                  className="mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white"
                  id="heading4-6"
                >
                  <button
                    className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue p-0 accordion-trigger arrow-icon w-100"
                    type="button"
                    aria-controls="collapse-6"
                    onClick={() => setOpenItem(6)}
                    aria-expanded={openItem === 6}
                  >
                    Does making changes to the site involve any additional cost?
                  </button>
                </div>
                <Collapse in={openItem === 6}>
                  <div>
                    <div className="card-body gr-color-blackish-blue-opacity-7 pt-0 pl-9 pr-15 gr-text-9 pb-9">
                      We try to be as accommodating as possible, keeping that in
                      mind all minor changes and up to 2 revisions we don't
                      charge you.
                    </div>
                  </div>
                </Collapse>
              </div>
            </div>
          </Col>
          <div className="col-12 text-center pt-11">
            <p className="gr-text-9 gr-text-9 gr-text-color">
              Haven’t got your answer?{" "}
              <span onClick={openFreshChat} className="cursor-pointer btn-link">
                Contact our team now
              </span>
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default FAQ;
