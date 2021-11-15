import Head from 'next/head';
//https://altcodeunicode.com/alt-codes-for-braille-patterns/

export default function Home() {

    global.onload = function() {
        var txtInput = document.getElementById('txtInput');
    
        var alphabet = {
            'a' : '&#10241;',
            'b' : '&#10243;',
            'c' : '&#10249;',
            'd' : '&#10265;',
            'e' : '&#10257;',
            'f' : '&#10251;',
            'g' : '&#10267;',
            'h' : '&#10259;',
            'i' : '&#10250;',
            'j' : '&#10266;',
            'k' : '&#10245;',
            'l' : '&#10247;',
            'm' : '&#10281;',
            'n' : '&#10269;',
            'o' : '&#10261;',
            'p' : '&#10255;',
            'q' : '&#10271;',
            'r' : '&#10263;',
            's' : '&#10254;',
            't' : '&#10270;',
            'u' : '&#10277;',
            'v' : '&#10300;',
            'w' : '&#10298;',
            'x' : '&#10285;',
            'y' : '&#10301;',
            'z' : '&#10293;',
            'æ' : '&#10268;',
            'ø' : '&#10282;',
            'å' : '&#10273;',

            ' ': '&emsp;',
            '.' : '&#10244;',
            ',' : '&#10242;',
            '!' : '&#10262;',
            '?' : '&#10274;',
            ':' : '&#10258;',
            ';' : '&#10246;',
            '-' : '&#10276;',
            '#' : '&#10300;',
            "'" : '&#10256;',
            '&' : '&#10284;',
        }

        txtInput.onkeyup = function() {
            txtOutput.innerHTML = "";
            var data = txtInput.value.toLowerCase();
            for (var i = 0; i < data.length; i++) {
                var letter = data.charAt(i);
                if(letter.match()) {
                    var symbol = alphabet[letter];
                    txtOutput.innerHTML += symbol;
                }
            }
        }
    }

    const description = "beskrivelse av siden";
    const image = "https://www.blindeforbundet.no/++theme++nbf.tema/logo_simple.svg";
    const keywords = "Punktskrift Generator, Norges Blindeforbund";
    const title = "⠝⠃⠋ | Punktskrift Generator";
    const url ="https://punktskrift-generator.vercel.app/";

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="author" content="Norges Blindeforbund"/>
		        <meta name="description" content={description}/>
		        <meta name="keywords" content={keywords}/>
                <meta property="og:image" content={image}/>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description}/>
                <meta property="og:url" content={url}/>
                <meta property="og:type" content="website"/>

                <meta name="theme-color" content="#FFD500"/>
            </Head>

            <div className="braille-generator-container">
                <form className="braille-generator">
                    <label htmlFor="txtInput">Punktskrift Generator</label>
                    <input autoComplete="off" type="text" id="txtInput" placeholder="skriv her..." />
                    <textarea id="txtOutput"></textarea>
                    <div className="btn-group">
                        <button>Kopier <i className="fas fa-copy"></i></button>
                        <button>Del <i className="fas fa-share"></i></button>
                    </div>
                </form>
            </div>
            <div
                data-href="https://punktskrift-generator.vercel.app/" 
                data-layout="button_count" data-size="small">
                    <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpunktskrift-generator.vercel.app%2F&amp;src=sdkpreparse" 
                     >Del på Facebook
                    </a>
            </div>
        </>
    )
}