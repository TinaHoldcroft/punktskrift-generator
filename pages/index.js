import Head from 'next/head';
import Generator from '../components/Generator';

export default function Home() {
    const title = "⠝⠃⠋ | Punktskrift generator";

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta property="og:title" content={title}/>
            </Head>

            <div className="generator-container">
                <Generator/>
            </div>
        </>
    )
}