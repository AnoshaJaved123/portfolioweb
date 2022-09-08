import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">

                <Head>

                    <link rel="shortcut icon" href="public/favicon.ico" />
                    <link rel="stylesheet" type="text/css" href="styles/globals" />
                    <link rel="stylesheet" type="text/css" href="styles/Home.module" />

                </Head>
                <body>
                    <Script src="https://polyfill.io/v3/polyfill.min.js?features=Promise%2CObject.assign%2CString.prototype.includes%2CNumber.isNaN" />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
