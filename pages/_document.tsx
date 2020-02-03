import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import { ComponentProps } from "react";

const getInitialProps = async (
  ctx: DocumentContext
): Promise<DocumentInitialProps> => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () => {
      return originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      });
    };

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      )
    };
  } finally {
    sheet.seal();
  }
};

type DocumentProps = ComponentProps<typeof Document>;

const CustomDocument = (_: DocumentProps): JSX.Element => {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/png" href="/gallery-logo-256.png" />
        <meta name="theme-color" content="#0D5474" />
        <meta name="description" content="Forente IT-foreninger" />
        <meta
          name="keywords"
          content="FIF, Forente IT-foreninger, itforeninger, student, it-student, studentforening"
        />
        <meta name="author" content="Forente IT-foreninger" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://itforeninger.no" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

CustomDocument.getInitialProps = getInitialProps;
CustomDocument.renderDocument = Document.renderDocument;

export default CustomDocument;