import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        const lang = "no";
        const description = "Punktskrift generator fra Norges Blindeforbund";
        const image = "https://www.blindeforbundet.no/++theme++nbf.tema/logo_simple.svg";
        const keywords = "Punktskrift Generator, Norges Blindeforbund";
        const url ="https://punktskrift-generator.vercel.app/";

        return (
            <Html lang={lang}>
                <Head>
                    <meta charset="utf-8"/>
                    <script async src="https://kit.fontawesome.com/a83d77d417.js"/>
                    <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v12.0" nonce="lEqfJDDU"></script>
                    <link id="favicon" rel="icon" href="/favicon.svg"/>
                    <meta name="author" content="Norges Blindeforbund"/>
		            <meta name="description" content={description}/>
		            <meta name="keywords" content={keywords}/>
                    <meta property="og:image" content={image}/>
                    <meta property="og:description" content={description}/>
                    <meta property="og:url" content={url}/>
                    <meta property="og:type" content="website"/>
                    <meta name="theme-color" content="#FFD500"/>
                </Head>
                
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;