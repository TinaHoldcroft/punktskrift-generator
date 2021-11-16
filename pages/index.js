import Head from 'next/head';
import ShareBtn from '../components/ShareBtn';
import Generator from '../components/Generator';
//https://altcodeunicode.com/alt-codes-for-braille-patterns/

export default function Home() {
    const title = "⠝⠃⠋ | Punktskrift generator";

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta property="og:title" content={title}/>
            </Head>
            
            <div className="btn-group">
                        <ShareBtn
                            text = "Del på Facebook"
                            icon = "fab fa-facebook"
                            link = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpunktskrift-generator.vercel.app%2F&amp;src=sdkpreparse"
                        />
                        <ShareBtn
                            text = "Del på Twitter"
                            icon = "fab fa-twitter"
                            link = "https://twitter.com/intent/tweet?hashtags=punktskriftdagen,Blindeforbundet&amp;original_referer=https%3A%2F%2Fdeveloper.twitter.com%2F&amp;ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&amp;related=twitterapi%2Ctwitter&amp;text=Ta%20en%20titt%20på%20Norges%20Blindeforbunds%20punktskrift%20generator&amp;url=https%3A%2F%2Fpunktskrift-generator.vercel.app&amp;via=Blindeforbundet"
                        />
                    </div>
 
            
            <Generator/>
        </>
    )
}