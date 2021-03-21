import React from "react";
import Head from "next/head";

// import dynamic from "next/dynamic";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import Services from "../sections/landing1/Services";

import Feature from "../sections/landing1/Feature";
// import Pricing from "../sections/landing1/Pricing";
// import Testimonials from "../sections/landing1/Testimonials";
import News from "../sections/landing1/News";
import CTA from "../sections/landing1/CTA";
import FAQ from "../sections/landing1/FAQ";

// const Feature = dynamic(() => import("../sections/landing1/Feature"));
// // const Pricing = dynamic(() => import("../sections/landing1/Pricing"));
// // const Testimonials = dynamic(() => import("../sections/landing1/Testimonials"));
// const News = dynamic(() => import("../sections/landing1/News"));
// const CTA = dynamic(() => import("../sections/landing1/CTA"));
// const FAQ = dynamic(() => import("../sections/landing1/FAQ"));

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Website Development Partner - AronWorks</title>

        <meta
          name="description"
          content="Partner with for all your Web Design, Web Development, Content Writing and SEO needs."
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
