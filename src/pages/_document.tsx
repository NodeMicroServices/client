import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        return Document.getInitialProps(ctx);
    }

    render(): JSX.Element {
        const trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
        return (
            <Html>
                <Head>
                    <title>Madame Organic: MO subtitle</title>
                    <meta charSet="UTF-8" />
                    <meta name="author" content="beevk" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${trackingId}', {page_path: window.location.pathname});`,
                        }}
                    />
                </Head>
                <body className="body">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
