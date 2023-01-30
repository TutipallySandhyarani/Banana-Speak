var btnTranslate = document.querySelector("#btn-translate")
var inputText = document.querySelector("#input")
var outputText =  document.querySelector("#output")
var url = "https://api.funtranslations.com/translate/minion.json"

function getURL(input) {
    return url + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error)
    alert("something wrong with server! try again later ")
}
    
function eventHandler() {
    
    var text=inputText.value
    fetch(geturl(text))

    .then(response => response.json())
    .then(json => { 
        var translatedText=json.contents.translated;
        outputText.innerText=translatedText;
     } )

    .catch(errorHandler)

}
   
btnTranslate.addEventListener("click", eventHandler)
