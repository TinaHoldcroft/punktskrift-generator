import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

class Datepicker extends React.Component {
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
            <div>
                value: {this.state.value}
                <br/>
                <form className="braille-generator">
                <label htmlFor="txtInput">Punktskrift Generator</label>
                <input autoComplete="off" type="text" id="txtInput" placeholder="skriv her..." />
                <textarea onMouseMove={this.handleChange.bind(this)} id="txtOutput">

                    
                </textarea>
            </form>

            <CopyToClipboard text={this.state.value}>
            <button>Copy to clipboard</button>
            </CopyToClipboard>
            
            </div>
        )
    }
}

export default Datepicker;