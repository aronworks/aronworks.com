import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../../components/PageWrapper";
import Image from "next/image";
import Head from "next/head";

const TermsConditions = () => {
  return (
    <>
      <Head>
        <title>
          The best way to build a website: custom vs template - AronWorks
        </title>

        <meta
          name="description"
          content="Before getting into custom or template websites, will try
          to throw a little light on what is a custom built website
          and template website."
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://aronworks.com/blogs/the-best-way-to-build-a-website-custom-vs-template"
        />

        <meta
          property="og:title"
          content="The best way to build a website: custom vs template - AronWorks"
        />
        <meta
          property="og:description"
          content="Before getting into custom or template websites, will try
          to throw a little light on what is a custom built website
          and template website."
        />

        <meta property="og:site_name" content="aronworks.com" />
        <meta name="og:email" content="hello@aronworks.com" />
        <meta name="og:phone_number" content="+917708521528" />

        {/* Twitter Meta Tag  */}
        <meta
          name="twitter:title"
          content="The best way to build a website: custom vs template - AronWorks"
        />
        <meta
          name="twitter:description"
          content="Before getting into custom or template websites, will try
          to throw a little light on what is a custom built website
          and template website."
        />

        {/* Item Property Meta Tag */}
        <meta
          itemprop="name"
          content="The best way to build a website: custom vs template - AronWorks"
        />
        <meta
          itemprop="description"
          content="Before getting into custom or template websites, will try
          to throw a little light on what is a custom built website
          and template website."
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
        <div className="inner-banner pt-29">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col xl="8" lg="9" md="11">
                <div className="pr-xl-15 pr-lg-8">
                  <h2 className="title gr-text-3 mb-8">
                    The best way to build a website: custom vs template.
                  </h2>
                  <p className="gr-text-11 mb-8">
                    <span>22 Mar 2021</span>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="mb-8">
          <Container>
            <Row className="justify-content-center">
              <Col lg="10" xl="8">
                <Image
                  layout="responsive"
                  className="w-100 rounded-10"
                  src="/assets/images/temp.jpeg"
                  alt=""
                  width={210}
                  height={140}
                />
              </Col>
            </Row>
          </Container>
        </div>

        <div className="main-block pb-21">
          <Container>
            <Row className="justify-content-center">
              <Col lg="10" xl="8">
                <div className="px-lg-8 px-xl-3">
                  <div className="single-block mb-11">
                    <p className="gr-text-8">
                      Before getting into custom or template websites, will try
                      to throw a little light on what is a custom built website
                      and template website.
                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-6 font-weight-bold pb-3">
                      Custom website{" "}
                    </h3>
                    <p className="gr-text-8">
                      Custom website design involves doing everything from
                      scratch to cater to the specific needs of the client. A
                      team is involved right from designing the look and feel of
                      the website to its functionality part.It's a long process
                      involving time, money and labour and is unique
                    </p>
                    <h3 className="gr-text-6 font-weight-bold pb-3">
                      Template website{" "}
                    </h3>
                    <p className="gr-text-8">
                      On the other hand template websites are readily available
                      resources with layouts and features already designed.There
                      are quite a lot of template providers in the market who
                      make it available for free or for some price for the
                      businesses to use.The developers just have to change
                      content and add on some plugin and make it available to
                      the clients.
                    </p>

                    <p className="gr-text-6 pb-3">
                      Now that we have an understanding of template and custom
                      website design, let’s just take a closer look and analyse
                      where to use what.
                    </p>

                    <p className="gr-text-8">
                      When the client is particular about the brand identity and
                      the feel of the website with respect to the logo, style
                      and target audience it's better to go with a custom
                      template. They stand out from the crowd and give you a
                      competitive edge over the others. custom design is the
                      best bet when it comes to serious e-commerce and improving
                      organic traffic through SEO. A custom website also grows
                      when your company grows as you can customise the website
                      wherever and whenever necessary. Once the website is
                      built, the work doesn’t stop there, it requires
                      maintenance and upkeep, which is taken care of.
                    </p>
                    <p className="gr-text-8">
                      When the client is not very specific about the look or the
                      functionality of the website you can go for template
                      design but yes, you also end up with the same design as
                      many others in the market. When cost or time is a
                      constraint then you can choose to go with template design
                      as they are already predesigned pages with basic
                      functionality, available in wide varieties from which you
                      can pick and choose the one which best suits the client’s
                      requirements. If you are setting up a much easier site
                      without knowing HTML and CSS, the template will do the
                      trick as it usually comes with large amounts of built-in
                      functionality, widgets, and options.
                    </p>
                    <p className="gr-text-8">
                      To sum up, template design is less time consuming and
                      cost-effective but most templates are not SEO friendly and
                      customisation is limited and there is no 100% guarantee
                      that it will work on all devices.
                    </p>
                    <p className="gr-text-8">
                      On the other hand, custom design has a competitive edge
                      because of its uniqueness, can be customised and enhanced
                      as per the client’s requirements. On the flip side, it
                      involves quite a lot of time, money and labour to build
                      one as everything needs to be done from scratch.
                    </p>
                    <p className="gr-text-8">
                      So, which is the best one? This is better left to the
                      discretion of the creator or developer as he knows client
                      requirements and available resources to meet them.
                      Whatever may be the means, exercising honesty and
                      transparency with the clients will bring in consistent
                      success as a business is a long term process.
                    </p>
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
export default TermsConditions;
