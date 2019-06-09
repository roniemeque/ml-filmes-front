import App, { Container } from "next/app";

import { ThemeProvider } from "styled-components";
//aplicando estilos globais -- reset e etc
import GlobalStyle from "../modules/styles/GlobalStyle";
import theme from "../modules/styles/theme";

import Layout from "../modules/layout/Layout";

class CustomApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </ThemeProvider>
    );
  }
}

export default CustomApp;
