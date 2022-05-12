import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import UserContextProvider from "../store/user-context";
import SchemeContextProvider from "../store/scheme-context";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <SchemeContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SchemeContextProvider>
    </UserContextProvider>
  );
}

export default MyApp;
