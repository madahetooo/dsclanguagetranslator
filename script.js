
var lang = 'ar';

function setLangfr() {
    lang = 'fr'
    document.getElementById("fr").style.color = "blue";
    document.getElementById("de").style.color = "black";
    document.getElementById("ja").style.color = "black";
    document.getElementById("ar").style.color = "black";
    loadDoc();
}
function setLangde() {
    lang = 'de'
    document.getElementById("fr").style.color = "black";
    document.getElementById("de").style.color = "blue";
    document.getElementById("ja").style.color = "black";
    document.getElementById("ar").style.color = "black";
    loadDoc();
}
function setLangja() {
    lang = 'ja'
    document.getElementById("fr").style.color = "black";
    document.getElementById("de").style.color = "black";
    document.getElementById("ja").style.color = "blue";
    document.getElementById("ar").style.color = "black";
    loadDoc();
}
function setLangar() {
    lang = 'ar'
    document.getElementById("fr").style.color = "black";
    document.getElementById("de").style.color = "black";
    document.getElementById("ja").style.color = "black";
    document.getElementById("ar").style.color = "blue";
    loadDoc();
}

function loadDoc() {
    var word = document.getElementById('word').value;
    if (word != "") {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // alert(this.responseText);
                document.getElementById("translation").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "https://us-central1-app-of-the-day-9a9f6.cloudfunctions.net/translate?from=auto&to=" + lang + "&text=" + word, true);
        xhttp.send();
    }
}

function translateSpeech(word){
    if (word != "") {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // alert(this.responseText);
                document.getElementById("translation").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "https://us-central1-app-of-the-day-9a9f6.cloudfunctions.net/translate?from=auto&to=" + lang + "&text=" + word, true);
        xhttp.send();
    }
}

function speak() {
    console.log("Loading");
    if (annyang) {
        console.log("Done");
        // Let's define a command.
        var commands = {
            '*word': function (word) {

                translateSpeech(word);
            }
        };
        annyang.debug();
        // Add our commands to annyang
        annyang.addCommands(commands);

        // Start listening.
        annyang.start({ autoRestart: false, continuous: false });
    } else {
        console.log("failed")
    }
}