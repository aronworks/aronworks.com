import React from "react";
import Head from "next/head";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import Services from "../sections/landing1/Services";

import Feature from "../sections/landing1/Feature";
// import Pricing from "../sections/landing1/Pricing";
// import Testimonials from "../sections/landing1/Testimonials";
import News from "../sections/landing1/News";
import CTA from "../sections/landing1/CTA";
import FAQ from "../sections/landing1/FAQ";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Website Development Partner - AronWorks</title>
        <meta name="title" content="Website Development Partner - AronWorks" />
        <meta
          name="description"
          content="Partner with us for all your Web Design, Web Development, Content Writing and SEO needs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aronworks.com" />

        <meta
          property="og:title"
          content="Website Development Partner - AronWorks"
        />
        <meta
          property="og:description"
          content="Partner with us for all your Web Design, Web Development, Content Writing and SEO needs."
        />
        <meta
          property="og:image"
          content="https://aronworks.com/assets/images/meta/home-page.jpg"
        />
        <meta property="og:site_name" content="aronworks.com" />
        <meta name="og:email" content="hello@aronworks.com" />
        <meta name="og:phone_number" content="+917708521528" />

        {/* Twitter Meta Tag  */}
        <meta
          name="twitter:title"
          content="Website Development Partner - AronWorks"
        />
        <meta
          name="twitter:description"
          content="Partner with us for all your Web Design, Web Development, Content Writing and SEO needs."
        />
        <meta
          name="twitter:image"
          content="https://aronworks.com/assets/images/meta/home-page.jpg"
        />

        {/* Item Property Meta Tag */}
        <meta
          itemprop="name"
          content="Website Development Partner - AronWorks"
        />
        <meta
          itemprop="description"
          content="Partner with us for all your Web Design, Web Development, Content Writing and SEO needs."
        />

        <meta property="og:locale" content="en" />
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
        <Hero />
        <Services />
        {/* <Content2 /> */}
        <Feature />
        {/* <Alert /> */}
        {/* <Pricing /> */}
        {/* <Testimonials /> */}
        <News />
        <FAQ />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
