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
            content="Um aplicativo baseado na Técnica Pomodoro, para aqueles que desejam maior produtividade e foco."
          />
          <meta
            name="keywords"
            content="tecnica pomodoro, pomodoro, produtividade, foco, programacao"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Move.on | Tenha maior produtividade e foco nos seus projetos"
          />
          <meta
            name="twitter:image"
            content="https://moveonpomodoro.vercel.app/share-image.png"
          />
          <meta
            name="twitter:image:src"
            content="https://moveonpomodoro.vercel.app/share-image.png"
          />
          <meta name="twitter:image:alt" content="move.on" />
          <meta name="twitter:image:width" content="1200" />
          <meta name="twitter:image:height" content="630" />

          <meta
            property="og:title"
            content="Move.on | Tenha maior produtividade e foco nos seus projetos"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://moveonpomodoro.vercel.app/share-image.png"
          />
          <meta
            property="og:description"
            content="Quer ter maior produtivide e foco? Venha conhecer o move.on."
          />
          <meta property="og:url" content="https://moveonpomodoro.vercel.app" />

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
