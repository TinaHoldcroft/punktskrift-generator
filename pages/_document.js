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
                    {/* style */}
                    <script async src="https://kit.fontawesome.com/a83d77d417.js"/>
                    <meta name="author" content="Tina Mary Holdcroft"/>
		            <meta name="description" content="Punktskrift Generator"/>
		            <meta name="keywords" content="Punktskrift Generator, Norges Blindeforbund"/>
                    {/* sharing link display 
                    <meta property="og:image" content="..."/>
                    <meta property="og:title" content="..."/>
                    <meta property="og:description" content="..."/>
                    <meta property="og:url" content="..."/>
                    <meta property="og:type" content="website"/>
                    */}
		            {/* browser design 
                    <meta name="theme-color" content="#FFFFFF"/>
                    */}
                    <link id="favicon" rel="icon" href="/favicon.svg"/>
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