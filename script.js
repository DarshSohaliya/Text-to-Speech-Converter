let speech  = new SpeechSynthesisUtterance();

document.getElementById("button").addEventListener("click" , () =>{
    speech.text = document.getElementById("textarea").value
    speechSynthesis.speak(speech)
})