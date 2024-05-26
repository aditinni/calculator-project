let click = document.getElementById("click")
click.addEventListener("click",()=>{
    let speech = new SpeechSynthesisUtterance()
    speech.text= "Toggling mode"
    click.classList.toggle("anim")
    window.speechSynthesis.speak(speech)
    document.getElementById("con").classList.toggle("darkmode")
    document.getElementById("cal").classList.toggle("cal")
})