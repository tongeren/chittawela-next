import App, { Container } from 'next/app';
import NextSeo from 'next-seo';
import Head from 'next/head';
 
// import your default seo configuration
import SEO from '../next-seo.config';
 
export default class MyApp extends App {
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
      <Container>
        <NextSeo config={ SEO } />
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="../favicon.ico"/>
        </Head> 
        <Component { ...pageProps } />
      </Container>
    );
  }
}
