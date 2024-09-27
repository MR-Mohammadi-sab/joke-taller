async function Joke(){
        const getJoke=await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=political&type=single")
        const data= await getJoke.json();
        const dataJoke= data.joke;
        return dataJoke

}
const speech=new SpeechSynthesisUtterance();
document.querySelector("button").addEventListener("click",async ()=>{

    speech.text=await Joke();
    window.speechSynthesis.speak(speech);  
})


