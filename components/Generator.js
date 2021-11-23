import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ShareBtn from '../components/ShareBtn';

class Generator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }
    }
    
    handleChange(event) {
        this.setState({value: event.target.value})
    }  
    
    render(){
        global.onload = function() {
            var txtInput = document.getElementById('txtInput');
            
            //https://altcodeunicode.com/alt-codes-for-braille-patterns/
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

        return(
            <>
                <form id="brailleGenerator" className="braille-generator">
                    <label htmlFor="txtInput">Punktskrift Generator</label>
                    <input autoComplete="off" type="text" id="txtInput" placeholder="Skriv navnet ditt her..." />
                    <textarea onMouseOver={this.handleChange.bind(this)} onTouchMove={this.handleChange.bind(this)} id="txtOutput"></textarea>

                    <div className="btn-group">
                        <CopyToClipboard text={this.state.value}>
                            <button form="brailleGenerator" title="kopier" className="btn" type="button" name="kopier" value="Kopier">
                                <i className="fas fa-copy"></i> Kopier
                            </button>
                        </CopyToClipboard>
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
                </form>
            </>
        )
    }
}

export default Generator;