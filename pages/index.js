import Head from 'next/head';
//https://altcodeunicode.com/alt-codes-for-braille-patterns/

export default function Home() {

    global.onload = function() {
        var textInput = document.getElementById('textInput');
    
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
            //'å' : '',
            ' ': '&emsp;',
            //'!' : '',
            //'.' : '',
            //',' : '',
            //'?' : '',
            //':' : '',
            //';' : '',
            //'-' : '',
            //'#' : '',
            //''' : '',
            //'&' : '',
            //'0' : '',
            //'1' : '',
            //'2' : '',
            //'3' : '',
            //'4' : '',
            //'5' : '',
            //'6' : '',
            //'7' : '',
            //'8' : '',
            //'9' : '',
        }

        textInput.onkeyup = function() {
            output.innerHTML = "";
            var data = textInput.value.toLowerCase();
            for (var i = 0; i < data.length; i++) {
                var letter = data.charAt(i);
                if(letter.match()) {
                    var symbol = alphabet[letter];
                    output.innerHTML += symbol;
                }
            }
        }

    }
      
    return (
        <>
            <Head>
                <title>Punktskrift Generator</title>
            </Head>

            <div className="braille-generator-container">
                <form className="braille-generator">
                    <label htmlFor="textInput">Punktskrift Generator</label>
                    <input autoComplete="off" type="text" id="textInput" placeholder="skriv her..." />
                    <div id="output"></div>
                    <div>
                        <button>Kopier <i className="fas fa-copy"></i></button>
                        <button>Del <i className="fas fa-share"></i></button>
                    </div>
                </form>
            </div>
        </>
    )
}