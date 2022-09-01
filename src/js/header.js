import audio from '../audio/audio.mp3'
const music1 = new Audio(audio);

const music = ()=>{
    const img = document.getElementById("imagen-header") 
    
    if(music1.paused){
        music1.play()
        music1.volume = 0.3
        music1.loop = true
        img.classList.add("animado")
    }else{
        music1.pause()
        img.classList.remove("animado")
    }
} 

export default music