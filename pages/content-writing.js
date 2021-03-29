import React from "react";
import PageWrapper from "../components/PageWrapper";
import CTA from "../sections/landing1/CTA";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Professional Content Writing - AronWorks</title>
        <meta
          name="description"
          content="We write contents for Blogs, and Web pages which includes your home, landing, about us, contact us etc."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://aronworks.com/content-writing"
        />

        <meta
          property="og:title"
          content="Professional Content Writing - AronWorks"
        />
        <meta
          property="og:description"
          content="We write contents for Blogs, and Web pages which includes your home, landing, about us, contact us etc."
        />

        <meta property="og:site_name" content="aronworks.com" />
        <meta name="og:email" content="hello@aronworks.com" />
        <meta name="og:phone_number" content="+917708521528" />

        {/* Twitter Meta Tag  */}
        <meta
          name="twitter:title"
          content="Professional Content Writing - AronWorks"
        />
        <meta
          name="twitter:description"
          content="We write contents for Blogs, and Web pages which includes your home, landing, about us, contact us etc."
        />

        {/* Item Property Meta Tag */}
        <meta
          itemProp="name"
          content="Professional Content Writing - AronWorks"
        />
        <meta
          itemProp="description"
          content="We write contents for Blogs, and Web pages which includes your home, landing, about us, contact us etc."
        />
        <link rel="canonical" href="https://aronworks.com/content-writing" />
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
              src="/assets/images/content-writting-banner.jpg"
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
                    <h1 className="gr-text-3 mb-8">Content Writing</h1>
                    <p className="gr-text-8">
                      We write contents for Blogs, and Web pages which includes
                      your home, landing, about us, contact us etc.
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
                    {/* <h2 className="title gr-text-3 mb-7">
                      Web Development is in our Core!
                    </h2> */}
                    <p className="gr-text-8">
                      If you’re searching for affordable high-quality content
                      that captivates and engages your readers, then you are on
                      the right spot. We offer fast, reliable services for our
                      partners who need helping-hand with their content
                      requirement. Partnering with us enables your staff to
                      focus on prominent functions like brand building,
                      marketing research, design and development as we take care
                      of creating quality content for blogs, social media,
                      search engines, web pages, or other platforms.
                    </p>

                    <p className="gr-text-8">
                      Whether you need us regularly or occasionally for content
                      marketing, you get cost-effective pricing and great
                      results flat out.
                    </p>

                    <p className="gr-text-8">
                      We ensure clarity of thoughts or ideas in every write-up.
                    </p>

                    <p className="gr-text-8">
                      Once we are provided with the subject matter, the outcome
                      is ready precisely and to your utmost satisfaction. We
                      prioritize developing meaningful content that is easy to
                      understand and readable.
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
                      src="/assets/images/web-content-writing.svg"
                      alt="Web Content Writing"
                      width={500}
                      height={490}
                    />
                  </div>
                </Col>
                <Col sm="10" lg="5">
                  <div className="content-text pt-11 pt-lg-0 pl-xl-7">
                    <h2 className="gr-text-4 mb-7">Web Content Writing</h2>
                    <p className="gr-text-8 mb-0">
                      We Create, publish, and promote quality content in your
                      websites organised logically. We combine the practice of
                      developing engaging content with the technical aspect of
                      keyword optimization. Whether you need home pages,
                      services pages, about pages, or regular blog posts, our
                      team can create them for you in no time.
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
                      src="/assets/images/blog-content-writing.svg"
                      alt="Blog Content Writing"
                      width={500}
                      height={490}
                    />
                  </div>
                </Col>
                <Col sm="10" lg="5" className="order-lg-1">
                  <div className="content-text">
                    <h2 className="gr-text-4 mb-7">Blog Content Writing</h2>
                    <p className="gr-text-8 mb-0">
                      Business blogs are written in a professional style that’s
                      appropriate for your industry. It is a low-cost way to
                      create opportunities to make your website visible to your
                      target audience, so you can generate new leads and
                      customers for your business. We do technical research,
                      understand industry jargon, and current hot topics, and
                      match our writing skills with your company culture to
                      construct articles that eventually win over your readers.
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
                      src="/assets/images/social-media-content-writing.svg"
                      alt="Social Media Content Writing"
                      width={500}
                      height={375}
                    />
                  </div>
                </Col>
                <Col sm="10" lg="5">
                  <div className="content-text pt-11 pt-lg-0 pl-xl-7">
                    <h2 className="gr-text-4 mb-7">
                      Social Media Content Writing
                    </h2>
                    <p className="gr-text-8">
                      With millions of active users from every corner of the
                      world flocking into social media from Facebook to
                      Instagram says how valuable these media are to us. So, we
                      tap this market with utmost caution by optimising it
                      according to the platform required. We keep our content
                      focusing on the readers for the desired results. We ace in
                      creating content for the ever-growing social media as it’s
                      very easy to attract readers, spread ideas, and develop
                      the brand identity.
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
