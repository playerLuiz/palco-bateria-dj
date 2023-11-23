document.body.addEventListener("keyup",(event)=>{
    playSound(event.code.toLowerCase());
})

document.querySelector('.composer button').addEventListener('click',()=>{
    let song = document.querySelector('#input').value;
    
    if(song !== ''){
        let songArray = song.split('')
        console.log(songArray)
        playComposion(songArray)
    }
})



function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`) // selecionando ID do html
    let keyElement = document.querySelector(`div[data-key=${sound}]`) // pegando a div do data key
    let cor = document.getElementById('teste')

    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement && cor){
        keyElement.classList.add('active');
        cor.style.backgroundColor = "purple"


        setTimeout(()=>{ // função + tempo
            keyElement.classList.remove('active')
            cor.style.backgroundColor = "black"
        }, 300);
    }

}

function playComposion(songArray){  
    let wait = 0

    for(let songItem of songArray){// dando loop
        setTimeout(()=>{    // timer foi necessário para freiar cada iniciação de som, começamos com 0 e vai aumentando de 250+
            playSound(`key${songItem}`);
        }, wait);
        
    wait += 250;
    }
}