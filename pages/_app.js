
import App, { Container } from "next/app";
import { LayoutProvider } from "../layouts/context";
import Layout from "../layouts";


class YouApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <LayoutProvider>
          <Component {...pageProps} />
        </LayoutProvider>
      </Container>
    );
  }
}

export default YouApp