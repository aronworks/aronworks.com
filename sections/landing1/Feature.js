import React, { useContext } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section2 pt-12 pb-9 pt-lg-21 pb-lg-25 bg-default-6">
        <Container>
          <Row className="justify-content-center">
            <Col md="10" lg="8" xl="7">
              <div className="section-title text-center mb-11 mb-lg-19 px-lg-3">
                <h4 className="pre-title gr-text-7 text-red mb-7">
                  Why choose us?
                </h4>
                <h2 className="title gr-text-4">
                  It's our Passion and Energy that makes a Positive difference.
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg="6">
              <div>
                <Image
                  layout="responsive"
                  className="w-100 rounded-8"
                  src="/assets/images/why-us.svg"
                  alt="Why AronWorks"
                  width={500}
                  height={500}
                />
              </div>
            </Col>
            <Col lg="5">
              <div className="content-widget mt-7 mt-lg-0 pl-xl-13">
                <Row className="align-items-center">
                  <Col
                    md="6"
                    lg="12"
                    data-aos="fade-left"
                    data-aos-duration="750"
                  >
                    <div className="single-widget my-7 media">
                      <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                        <span className="count text-primary--light-only gr-text-9">
                          1
                        </span>
                      </div>
                      <div className="media-body">
                        <h3 className="w-title mb-5 gr-text-7">
                          Customer Centric
                        </h3>
                        <p className="gr-text-9 mb-0">
                          We prioritise customer satisfaction by creating
                          positve experience through our services.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col
                    md="6"
                    lg="12"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
                    <div className="single-widget my-7 media">
                      <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                        <span className="count text-primary--light-only gr-text-9">
                          2
                        </span>
                      </div>
                      <div className="media-body">
                        <h3 className="w-title mb-5 gr-text-7">
                          In-House Expertise
                        </h3>
                        <p className="gr-text-9 mb-0">
                          By amalagamating the latest trends and substance, our
                          adroit team imparts tailor-made services and solutions
                          to every client.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col
                    md="6"
                    lg="12"
                    data-aos="fade-left"
                    data-aos-duration="1800"
                  >
                    <div className="single-widget my-7 media">
                      <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                        <span className="count text-primary--light-only gr-text-9">
                          3
                        </span>
                      </div>
                      <div className="media-body">
                        <h3 className="w-title mb-5 gr-text-7">
                          A 360 Degree Partnership
                        </h3>
                        <p className="gr-text-9 mb-0">
                          We do end to end partnership, right from infant stage,
                          through the execution and also after services to our
                          clients.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Content;
