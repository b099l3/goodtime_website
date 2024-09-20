import { Head, Html, Main, NextScript } from 'next/document';

export default function Document(props) {
  if (process.env.NODE_ENV === 'production') {
    // DO PRODUCTION STUFF HERE
  }

  return (
    <Html lang="en">
      <Head>
        <link
          rel="prefetch"
          href="/fonts/LeagueSpartan-VariableFont_wght.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
        <link href="/static/favicons/site.webmanifest" rel="manifest" />
        <link
          href="/static/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/static/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/static/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          color="#4a9885"
          href="/static/favicons/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta
          content="/static/favicons/browserconfig.xml"
          name="msapplication-config"
        />
        <meta content="7081e8ebb22b592f" name="yandex-verification" />
      </Head>
      <body className="antialiased text-white bg-goodtime-blue2">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
