console.log("welcome renal");


let songindex = 0;
let audioElement = new Audio('hindi/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let hindi = Array.from(document.getElementsByClassName('hindi')); 

let songs=[
    
    {songname: "jaana jaana", filepath: "hindi/1.mp3"},
    {songname: "kesariya tera ishq", filepath: "hindi/2.mp3"},
    {songname: "meri zingagi hai ", filepath: "hindi/3.mp3"},
    {songname: "rataan lambiyan", filepath: "hindi/4.mp3"},
    {songname: "srivalli", filepath: "hindi/5.mp3"},
]




masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
       masterplay.classList.remove('fa-play-circle');
       masterplay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change',()=>{
   audioElement.currentTime=((myprogressbar.value *audioElement.duration)/100);
   console.log(audioElement.currentTime); 
})

const makeAllplays = ()=>{
   
Array.from(document.getElementsByClassName('songitemplay')).forEach((Element)=>{ 
    Element.classList.remove('fa-pause-circle');
    Element.classList.add('fa-play-circle');
})
}



Array.from(document.getElementsByClassName('songitemplay')).forEach((Element)=>{
    Element.addEventListener('click',(e)=>{
        makeAllplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `hindi/${songindex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
    
})


document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=4){
        songindex = 0;
    }
    else{
        songindex +=1;

    }
    audioElement.src = `hindi/${songindex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex -=1;

    }
    audioElement.src = `hindi/${songindex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
}) 