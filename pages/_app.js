import Layout from "../components/Layout";
import { GlobalProvider } from "../context/GlobalContext";

import "../scss/bootstrap.scss";
import "../scss/main.scss";
import "../scss/custom.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <GlobalProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalProvider>
  );
};

export default MyApp;
