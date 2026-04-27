import { Html, Head, Main, NextScript } from 'next/document'

export default function Document({ nonce }) {
  return (
    <Html lang="he" dir="rtl">
      <Head nonce={nonce}>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript nonce={nonce} />
        <script 
          src="https://cdn.userway.org/widget.js" 
          data-account="Gi0yRfilYP" 
          data-position="6" 
          data-offset-bottom="100"
          async
          nonce={nonce}
        ></script>
      </body>
    </Html>
  )
}

Document.getInitialProps = async (ctx) => {
  const nonce = ctx.req?.headers['x-nonce'];
  const initialProps = await ctx.defaultGetInitialProps(ctx);
  return { ...initialProps, nonce };
};
