import React from "react";
import PageWrapper from "../components/PageWrapper";
import CTA from "../sections/landing1/CTA";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Head from "next/head";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Web Development Service - AronWorks</title>
        <meta
          name="description"
          content="We build affordable, accessible and engaging websites for small and medium scale business."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://aronworks.com/web-development"
        />

        <meta
          property="og:title"
          content="Web Development Service - AronWorks"
        />
        <meta
          property="og:description"
          content="We build affordable, accessible and engaging websites for small and medium scale business."
        />

        <meta property="og:site_name" content="aronworks.com" />
        <meta name="og:email" content="hello@aronworks.com" />
        <meta name="og:phone_number" content="+917708521528" />

        {/* Twitter Meta Tag  */}
        <meta
          name="twitter:title"
          content="Web Development Service - AronWorks"
        />
        <meta
          name="twitter:description"
          content="We build affordable, accessible and engaging websites for small and medium scale business."
        />

        {/* Item Property Meta Tag */}
        <meta itemProp="name" content=">Web Development Service - AronWorks" />
        <meta
          itemProp="description"
          content="We build affordable, accessible and engaging websites for small and medium scale business."
        />
      </Head>
      <PageWrapper
        headerConfig={{
          theme: "dark",
          align: "right",
          button: "null", // cta, account, null
        }}
        footerConfig={{
          theme: "light",
          style: "style1", //style1, style2
        }}
      >
        <>
          <div className="bg-black bg-gradient pb-17 pt-24 pt-lg-32 pb-lg-28">
            <Image
              className="opacity-0-4"
              alt="Web Development"
              src="/assets/images/web-development-banner.jpg"
              layout="fill"
              objectFit="cover"
              quality={75}
            />
            <div className="overlay"></div>
            <Container>
              <Row className="justify-content-center align-items-center">
                <Col
                  sm="10"
                  md="9"
                  lg="7"
                  xl="6"
                  data-aos="fade-right"
                  data-aos-duration="750"
                  data-aos-delay="500"
                >
                  <div className="hero-content text-center dark-mode-texts">
                    <h1 className="gr-text-3 mb-8">Web Development</h1>
                    <p className="gr-text-8">
                      We build accessible and engaging websites for small and
                      medium scale business to expand their growth.
                    </p>
                  </div>
                </Col>
                <Col sm="10" className="mt-15 mt-lg-23"></Col>
              </Row>
            </Container>
          </div>

          <div className="content-section pt-lg-25 pt-14 pb-10 pb-lg-15">
            <Container>
              <Row>
                <Col md="12">
                  <div className="section-title mb-13 mb-lg-21">
                    <h2 className="title gr-text-3 mb-7">
                      Web Development is in our Core!
                    </h2>
                    <p className="gr-text-8">
                      We are capable of creating high performance and
                      aesthetically appealing websites. Our concentration is on
                      user-centric design as usability and utility determine the
                      success of the website.
                    </p>

                    <p className="gr-text-8">
                      We use all kinds of complex, latest tools and technologies
                      to make the entire work process effortless.
                    </p>

                    <p className="gr-text-8">
                      We provide one of the best professional web development
                      experience which is affordable without compromising the
                      quality of work.
                    </p>

                    <p className="gr-text-8">
                      Our experience stretches in all areas of web development
                      including e-commerce, custom and template web development.
                    </p>

                    <p className="gr-text-8">
                      Cross-Browser Compatibility is truly a vital aspect of
                      website development hence we take utmost care to make the
                      site consistently visible across all web browsers.
                    </p>

                    <p className="gr-text-8">
                      According to your digital marketing strategy we design and
                      build your website, further optimize it to generate
                      traffic and engage the audience.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="content-section bg-default-2 pt-lg-15 pb-13 pb-lg-24">
            <Container>
              <Row className="align-items-center justify-content-center">
                <Col sm="10" lg="7">
                  <div
                    className="content-img pr-9"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                  >
                    <Image
                      src="/assets/images/web-development1.svg"
                      alt="Web Development"
                      width={400}
                      height={400}
                    />
                  </div>
                </Col>
                <Col sm="10" lg="5">
                  <div className="content-text pt-11 pt-lg-0 pl-xl-7">
                    <h2 className="gr-text-4 mb-7">HTML / CSS Development</h2>
                    <p className="gr-text-8 mb-0">
                      When Web Development is concerned HTML5 and CSS3 are
                      indispensable. This enhances the user experiences that
                      reflect in your business and creates a platform to compete
                      with more established competitors..
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="content-section bg-default-2 pt-lg-13 pb-13 pb-lg-21">
            <Container>
              <Row className="align-items-center justify-content-center">
                <Col
                  sm="10"
                  lg="6"
                  className="offset-xl-1  order-lg-2 mb-9 mb-lg-0"
                >
                  <div
                    className="double-image-group-opacity"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                  >
                    <Image
                      src="/assets/images/front-end-architecture.svg"
                      alt="Front-end Architecture"
                      width={500}
                      height={330}
                    />
                  </div>
                </Col>
                <Col sm="10" lg="5" className="order-lg-1">
                  <div className="content-text">
                    <h2 className="gr-text-4 mb-7">Front-end Architecture</h2>
                    <p className="gr-text-8 mb-0">
                      We are strong in front- end architecture which creates
                      expansible and scalable web applications resilient to
                      changing technologies.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="content-section bg-default-2 pt-lg-15 pb-13 pb-lg-24">
            <Container>
              <Row className="align-items-center justify-content-center">
                <Col sm="10" lg="7">
                  <div
                    className="content-img pr-9"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                  >
                    <Image
                      src="/assets/images/spa.svg"
                      alt="Single-page Application"
                      width={500}
                      height={300}
                    />
                  </div>
                </Col>
                <Col sm="10" lg="5">
                  <div className="content-text pt-11 pt-lg-0 pl-xl-7">
                    <h2 className="gr-text-4 mb-7">Single-page Application</h2>
                    <p className="gr-text-8">
                      Single-page Application (SPA) is more convenient and easy
                      to use as they work inside the browser. We can bring in
                      much improved user experience and this in turn will always
                      have a positive impact on the customer.
                    </p>

                    <p className="gr-text-8 mb-0">
                      We create Single-page Applications with modern JavaScript
                      frameworks alongside SEO.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="content-section bg-default-2 pt-lg-13 pb-13 pb-lg-21">
            <Container>
              <Row className="align-items-center justify-content-center">
                <Col
                  sm="10"
                  lg="6"
                  className="offset-xl-1  order-lg-2 mb-9 mb-lg-0"
                >
                  <div
                    className="double-image-group-opacity"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                  >
                    <Image
                      src="/assets/images/amp.svg"
                      alt="Accelerated Mobile Pages"
                      width={500}
                      height={470}
                    />
                  </div>
                </Col>
                <Col sm="10" lg="5" className="order-lg-1">
                  <div className="content-text">
                    <h2 className="gr-text-4 mb-7">AMP Development</h2>
                    <p className="gr-text-8 mb-0">
                      We use Accelerated Mobile Pages (AMP) which has a huge
                      impact on mobile search engine rankings. Across all
                      platforms, they work incredibly faster, and they
                      unquestionably convert more mobile page visitors into
                      customers.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="content-section bg-default-2 pt-lg-15 pb-13 pb-lg-24">
            <Container>
              <Row className="align-items-center justify-content-center">
                <Col sm="10" lg="7">
                  <div
                    className="content-img pr-9"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                  >
                    <Image
                      src="/assets/images/pwa.svg"
                      alt="Progressive Web Apps"
                      width={500}
                      height={490}
                    />
                  </div>
                </Col>
                <Col sm="10" lg="5">
                  <div className="content-text pt-11 pt-lg-0 pl-xl-7">
                    <h2 className="gr-text-4 mb-7">PWA Development</h2>
                    <p className="gr-text-8 mb-0">
                      One of the most talked-about technology in recent times is
                      Progressive web apps (PWA). It is the best from both the
                      App and the Web worlds. We involve PWA as it's reliable,
                      installable, fast and engaging.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <CTA />
        </>
      </PageWrapper>
    </>
  );
};
export default IndexPage;
