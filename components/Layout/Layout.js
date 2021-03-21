import React, { useState, useEffect, useContext, useRef } from "react";
import Head from "next/head";

import styled, { ThemeProvider } from "styled-components";

import Header from "../Header";
import Footer from "../Footer";

import GlobalContext from "../../context/GlobalContext";

import GlobalStyle from "../../utils/globalStyle";

import { get, merge } from "lodash";

// the full theme object
import { theme as baseTheme } from "../../utils";
import { animation } from "polished";

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 9999999999;
  opacity: 1;
  visibility: visible;
  transition: all 1s ease-out 0.5s;
  &.inActive {
    opacity: 0;
    visibility: hidden;
  }
`;

// options for different color modes
const modes = { light: "light", dark: "dark" };

// merge the color mode with the base theme
// to create a new theme object
const getTheme = (mode) =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  });

const Layout = ({ children }) => {
  const gContext = useContext(GlobalContext);

  const [visibleLoader, setVisibleLoader] = useState(true);

  useEffect(async () => {
    // https://web.dev/adaptive-serving-based-on-network-quality/
    // downlink -	The bandwidth estimate in megabits per second. eg. 1.5 MB/Sec

    // Only Load AOS Animation if the connection is 4g === 1.5 MB/Sec
    // Or Browser which does not support navigator.connection load AOS animation

    // Animation will only loaded after the first render as we are importing AOS in useEffect
    if (!navigator?.connection || navigator?.connection?.downlink > 1.5) {
      const AOS = await import("aos");
      AOS.init({ once: true });

      const style = document.createElement("link");
      style.href = "/assets/styles/aos.css";
      style.rel = "stylesheet";
      style.async = true;
      document.head.appendChild(style);
    }

    setVisibleLoader(false);
  }, []);

  // Navbar style based on scroll
  const eleRef = useRef();

  useEffect(() => {
    window.addEventListener(
      "popstate",
      function (event) {
        // The popstate event is fired each time when the current history entry changes.
        gContext.closeOffCanvas();
      },
      false
    );
    window.addEventListener(
      "pushState",
      function (event) {
        // The pushstate event is fired each time when the current history entry changes.
        gContext.closeOffCanvas();
      },
      false
    );
  }, [gContext]);

  return (
    <ThemeProvider
      theme={gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light)}
    >
      <div data-theme-mode-panel-active data-theme="light">
        <GlobalStyle />
        <Head>
          <title>AronWorks</title>
        </Head>
        <Loader id="loading" className={visibleLoader ? "" : "inActive"} />
        <div className="site-wrapper overflow-hidden" ref={eleRef}>
          <Header isDark={gContext.headerDark} />
          {children}

          <Footer isDark={gContext.footerDark} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
