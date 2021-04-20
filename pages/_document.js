import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5KMKNZG');`,
            }}
          />
          {/* End Google Tag Manager  */}

          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-HMW0EZTJP0"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());
              gtag("config", "G-HMW0EZTJP0");
              gtag('config', 'AW-389820381'); // Contact Us Form Submitted conversion ID`,
            }}
          />
          {/* End - Google Analytics */}

          {/* Preconnect - establish network connections early and increase performance */}
          <link rel="preconnect" href="https://wchat.in.freshchat.com" />
          <link
            rel="preconnect"
            href="https://assetscdn-wchat.in.freshchat.com"
          />

          {/* Browser support for dns-prefetch is slightly different from preconnect support, so dns-prefetch can serve as a fallback for browsers that don't support preconnect. */}
          {/* https://web.dev/efficiently-load-third-party-javascript */}
          <link rel="dns-prefetch" href="https://wchat.in.freshchat.com" />
          <link
            rel="dns-prefetch"
            href="https://assetscdn-wchat.in.freshchat.com"
          />

          {/* Preload Script */}
          <link
            rel="preload"
            href="https://wchat.in.freshchat.com/js/widget.js"
            as="script"
          />

          <link
            rel="preload"
            href="/assets/scripts/fresh-chat.js"
            as="script"
          />

          {/* Preload CSS */}
          <link
            rel="preload"
            href="/assets/fonts/typography-font/typo.css"
            as="style"
          />
          <link
            rel="preload"
            href="/assets/fonts/icon-font/css/style.css"
            as="style"
          />
        </Head>
        <body>
          {/* Google Tag Manager (noscript)  */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5KMKNZG"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            ></iframe>`,
            }}
          />
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />

          <link
            href="/assets/fonts/typography-font/typo.css"
            rel="stylesheet"
          />
          <link href="/assets/fonts/icon-font/css/style.css" rel="stylesheet" />

          {/* The defer attribute tells the browser not to wait for the script. */}
          {/* Instead, the browser will continue to process the HTML, build DOM. */}
          {/* The script loads “in the background”, and then runs when the DOM is fully built. */}
          <script
            defer
            type="text/javascript"
            src="/assets/scripts/fresh-chat.js"
          ></script>
        </body>
      </Html>
    );
  }
}
