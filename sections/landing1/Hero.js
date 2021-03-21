import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { openFreshChat } from "../../utils/freshChat";

const Hero = () => {
  return (
    <div className="hero-area position-relative bg-default-6 pt-15 pt-lg-29 pb-15 pb-lg-29">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg="6" md="9" className="order-lg-2">
            <div
              className="hero-img"
              data-aos="fade-left"
              data-aos-duration="750"
              data-aos-delay="500"
            >
              <div className="hero-video-thumb position-relative gr-z-index-1">
                <Image
                  className="w-100"
                  src="/assets/images/hero.svg"
                  alt="AronWorks Office"
                  width={540}
                  height={540}
                />
              </div>
            </div>
          </Col>
          <Col
            lg="6"
            md="9"
            className="order-lg-1 mt-9 mt-lg-0"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <div className="hero-content">
              <h1 className="gr-text-2 mb-9">
                Get more <span className="heighlight"> visitors,</span>
                <br />
                get more sales.
              </h1>
              <p className="gr-text-8 pr-5 pl-0 pr-xl-11 mb-9">
                Not just websites. We do selling websites.
              </p>
              <div className="hero-btn">
                <button
                  onClick={openFreshChat}
                  className="btn btn-yellow-orange text-black gr-hover-y px-lg-9"
                >
                  Reach Us
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
