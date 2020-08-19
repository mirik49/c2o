import Document, {Head, Html, Main, NextScript} from 'next/document'
import React from "react";

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps}
    }

    render() {
        return (
            <Html lang="ru">
                <Head>
                    <link rel="shortcut icon" href="/static/favicon.ico"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
