let button=document.querySelector("#button")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day=new Date()
    let hour=day.getHours()
    if(hour>=0 && hour<12){
        speak("Good Morning Mr Tanishk")
    }
    else if(hours>=12 && hour <16){
        speak("Good evening Mr Tanishk")   
    }
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecogition= window.speechRecogition || window.webkitSpeechRecognition
let recognition =new speechRecogition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}
button.addEventListener("click",()=>{
    recognition.start()
    button.style.display="flex"
    voice.style.display="flex"
})
function takeCommand(message){
    if(message.includes("hey")||message.includes("hello ")){
        speak("hello Sir, what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am your virtual assistant, created by Mr. Tanishk Gupta")
    }else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com/")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://www.google.com/")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://www.instagram.com/")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://www.facebook.com/")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator...")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp...")
        window.open("whatsapp://")
    }
    else if(message.includes("open contact")){
        speak("opening contact...")
        window.open("contact://")
    }
    else if(message.includes("open gallery")){
        speak("opening gallery...")
        window.open("gallery://")
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric", minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric", month:"short"})
        speak(date)
    }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("shipra","") || message.replace("shifra","")

        speak(`this is what i found on internet`)
        window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
    }
}
