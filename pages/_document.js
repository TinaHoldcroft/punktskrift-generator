import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        const lang = "no";
        
        return (
            <Html lang={lang}>
                <Head>
                    <meta charset="utf-8"/>
                    <script async src="https://kit.fontawesome.com/a83d77d417.js"/>
                    <link id="favicon" rel="icon" href="/favicon.svg"/>
                </Head>
                
                <body>
                    <div id="fb-root"></div>
                    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v12.0" nonce="lEqfJDDU"></script>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;