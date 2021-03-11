import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
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

  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge, chrome=1" />

          <meta name="author" content="Laerthe Souza" />
          <meta
            name="description"
            content="Um aplicativo baseado na Técnica Pomodoro, para aqueles que desejam um aumento na produtividade e maior foco."
          />
          <meta
            name="keywords"
            content="tecnica pomodoro, pomodoro, produtividade, programacao"
          />

          <meta property="og:title" content="Técnica Pomodoro | move.on" />
          <meta
            property="og:image"
            content="https://i.ibb.co/KzqcskR/Login.jpg"
          />
          <meta
            property="og:description"
            content="Quer ter maior produtivide e foco? Venha conhecer o move.on"
          />
          <meta property="og:url" content="//www.example.com/URL do artigo" />

          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
