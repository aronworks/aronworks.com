import React from "react";
import PageWrapper from "../components/PageWrapper";
import CTA from "../sections/landing1/CTA";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import Image from "next/image";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>SEO for Business - AronWorks</title>
        <meta
          name="description"
          content="We do SEOs to bring in organic traffic which attracts prospective customers to your business."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://aronworks.com/seo-for-business"
        />

        <meta property="og:title" content="SEO for Business - AronWorks" />
        <meta
          property="og:description"
          content="We do SEOs to bring in organic traffic which attracts prospective customers to your business."
        />

        <meta property="og:site_name" content="aronworks.com" />
        <meta name="og:email" content="hello@aronworks.com" />
        <meta name="og:phone_number" content="+917708521528" />

        {/* Twitter Meta Tag  */}
        <meta name="twitter:title" content="SEO for Business - AronWorks" />
        <meta
          name="twitter:description"
          content="We do SEOs to bring in organic traffic which attracts prospective customers to your business."
        />

        {/* Item Property Meta Tag */}
        <meta itemProp="name" content="SEO for Business - AronWorks" />
        <meta
          itemProp="description"
          content="We do SEOs to bring in organic traffic which attracts prospective customers to your business."
        />
        <link rel="canonical" href="https://aronworks.com/seo-for-business" />
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
              alt="SEO for Business"
              src="/assets/images/seo-for-business-banner.jpg"
              layout="fill"
              objectFit="cover"
              quality={75}
            />
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
                    <h1 className="gr-text-3 mb-8">SEO for Business</h1>
                    <p className="gr-text-8">
                      We do SEOs to bring in organic traffic which attracts
                      prospective customers to your business.
                    </p>
                  </div>
                </Col>
                <Col sm="10" className="mt-15 mt-lg-23"></Col>
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
                      src="/assets/images/seo1.svg"
                      alt="Search Engine Optimisation"
                      width={500}
                      height={350}
                    />
                  </div>
                </Col>
                <Col sm="10" lg="5">
                  <div className="content-text pt-11 pt-lg-0 pl-xl-7">
                    <h2 className="gr-text-4 mb-7">What is SEO</h2>
                    <p>SEO stands for “search engine optimization.”</p>
                    <p className="gr-text-8 mb-0">
                      It’s the practice of increasing both the quality and
                      quantity of website traffic, through non-paid search
                      engine results. This is done to ensure that your website
                      will be displayed at the top of the search engine results
                      page. This is achieved through various techniques like
                      Content Marketing, On-page, Off-page SEO Optimization, SEO
                      audit etc...
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
                      src="/assets/images/why-invest-in-seo.svg"
                      alt="Why Invest in SEO"
                      width={500}
                      height={342}
                    />
                  </div>
                </Col>
                <Col sm="10" lg="5" className="order-lg-1">
                  <div className="content-text">
                    <h2 className="gr-text-4 mb-7">Why invest in SEO</h2>

                    <p>
                      Search engine optimization builds qualified and organic
                      traffic. If you lack an effective SEO strategy you are
                      missing out on opportunities to maximise your revenue.
                    </p>

                    <p className="gr-text-8 mb-0">
                      In a nutshell best SEO helps your company reach the first
                      page of search results and fetch the highest ranking.
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
                      src="/assets/images/why-choose-us-for-seo.svg"
                      alt="Choose Us for SEO"
                      width={500}
                      height={375}
                    />
                  </div>
                </Col>
                <Col sm="10" lg="5">
                  <div className="content-text pt-11 pt-lg-0 pl-xl-7">
                    <h2 className="gr-text-4 mb-7">Why choose us</h2>

                    <p>
                      We make SEO simple, fast, and easy, so you can spend your
                      time where it’s needed most. Our game plan allows us to
                      provide a high-quality service at more affordable rates
                      for small and mid-size business owners.
                    </p>

                    <p>
                      We focus on earning our partners' top rankings for the
                      search terms their customers enter into Google when
                      they’re most qualified.
                    </p>

                    <p className="gr-text-8">
                      Based on the brand we recommend whether it will be local,
                      voice or e-commerce SEO. The algorithms of SEO keeps
                      changing and it is updated on a regular basis, Hence you
                      need a professional who is well versed to handle it
                      exclusively for you.
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
