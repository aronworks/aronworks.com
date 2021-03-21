import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const News = () => (
  <>
    {/* <!-- News section --> */}
    <div className="news-section pt-12 pb-8 py-lg-23 bg-default-2">
      <Container>
        <Row className="justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-9">
            <div className="section-title text-center mb-11 mb-lg-18">
              <h2 className="title gr-text-4 mb-6">
                Cudding for your crunchy brain
              </h2>
              <p className="gr-text-8 px-lg-8 mb-0">
                We love connecting to our partners by various means. Sharing our
                thoughts, and experince is one among them.
              </p>
            </div>
          </div>
        </Row>
        <Row
          className="justify-content-center"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Col md="6" lg="4">
            <div className="location-card mb-9 gr-hover-shadow-1">
              <Link href="/blogs/the-best-way-to-build-a-website-custom-vs-template">
                <a className="card-img">
                  <Image
                    layout="responsive"
                    className="w-100 rounded-top-10"
                    src="/assets/images/news-card-img1.jpg"
                    alt="The best way to build a website: custom vs template"
                    width={350}
                    height={301}
                  />
                </a>
              </Link>
              <div className="card-content px-9 py-8 bg-white rounded-bottom-10">
                <p className="gr-text-11 mb-4 d-inline-block gr-color-blackish-blue-opacity-7">
                  22 Mar 2021
                </p>
                {/* <Link href="/">
                  <a>
                    <p className="gr-text-11 mb-4 d-inline-block gr-color-blackish-blue-opacity-7">
                      Website
                    </p>
                  </a>
                </Link> */}
                <Link href="/blogs/the-best-way-to-build-a-website-custom-vs-template">
                  <a>
                    <h3 className="title text-eerie-black gr-text-7 mb-0">
                      The best way to build a website: custom vs template.
                    </h3>
                  </a>
                </Link>
              </div>
            </div>
          </Col>
          <Col md="6" lg="4">
            <div className="location-card mb-9 gr-hover-shadow-1">
              <Link href="/blogs/5-reasons-why-small-business-needs-website-in-2021">
                <a className="card-img">
                  <Image
                    layout="responsive"
                    className="w-100 rounded-top-10"
                    src="/assets/images/news-card-img2.jpg"
                    alt="5 Reasons why small business needs website in 2021"
                    width={350}
                    height={301}
                  />
                </a>
              </Link>
              <div className="card-content px-9 py-8 bg-white rounded-bottom-10">
                <p className="gr-text-11 mb-4 d-inline-block gr-color-blackish-blue-opacity-7">
                  22 Mar 2021
                </p>

                {/* <Link href="/">
                  <a>
                    <p className="gr-text-11 mb-4 d-inline-block gr-color-blackish-blue-opacity-7">
                      Business
                    </p>
                  </a>
                </Link> */}
                <Link href="/blogs/5-reasons-why-small-business-needs-website-in-2021">
                  <a>
                    <h3 className="title text-eerie-black gr-text-7 mb-0">
                      5 Reasons why small business needs website in 2021.
                    </h3>
                  </a>
                </Link>
              </div>
            </div>
          </Col>
          <Col md="6" lg="4">
            <div className="location-card mb-9 gr-hover-shadow-1">
              <Link href="/blogs/7-reasons-why-you-should-hire-a-professional-writer">
                <a className="card-img">
                  <Image
                    layout="responsive"
                    className="w-100 rounded-top-10"
                    src="/assets/images/news-card-img3.jpg"
                    alt="7 reasons why you should hire a professional writer"
                    width={350}
                    height={301}
                  />
                </a>
              </Link>
              <div className="card-content px-9 py-8 bg-white rounded-bottom-10">
                <p className="gr-text-11 mb-4 d-inline-block gr-color-blackish-blue-opacity-7">
                  22 Mar 2021
                </p>
                {/* <Link href="/">
                  <a>
                    <p className="gr-text-11 mb-4 d-inline-block gr-color-blackish-blue-opacity-7">
                      Content Writting
                    </p>
                  </a>
                </Link> */}
                <Link href="/blogs/7-reasons-why-you-should-hire-a-professional-writer">
                  <a>
                    <h3 className="title text-eerie-black gr-text-7 mb-0">
                      7 reasons why you should hire a professional writer.
                    </h3>
                  </a>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default News;
