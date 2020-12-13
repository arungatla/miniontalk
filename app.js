var btnTrnslate = document.querySelector("#btn-trnslate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {

    return url + "?" + "text=" + text;


}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server...please try again!!")
}

btnTrnslate.addEventListener("click", function clickEventHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerHTML = translatedText;
        })
        .catch(errorHandler);
});


//funtranslations.com for more apis



// outputDiv.innerText="gatla arun"






// document.querySelector("textarea");
// document.querySelector(".btn-primary");
// document.querySelector("input[name='translator']");