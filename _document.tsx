import { extractCritical } from "@emotion/server";
import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    const critical = extractCritical(initialProps.html);
    initialProps.html = critical.html;
    initialProps.styles = (
      <React.Fragment>
        {initialProps.styles}
        <style
          data-emotion-css={critical.ids.join(" ")}
          dangerouslySetInnerHTML={{ __html: critical.css }}
        />
      </React.Fragment>
    );

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
            rel="stylesheet"
          />
          <link
            href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/public/vercel.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
