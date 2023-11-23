//Eventos
// Representa o corpo do site + ficar observando e esperando um evento especifico
document.body.addEventListener('keyup',(event)=>{ 
    //console.log(event.code); // code é o codigo da tecla pressionada
    playSound(event.code.toLowerCase());
}); // keyup simboliza o soltar da tecla 

document.querySelector('.composer button').addEventListener('click',()=>{
    let song = document.querySelector('#input').value; // id input (da pra usar *getElementById* ) + value para pegar o que a pessoa digitou
    
    if(song !== ''){ // song diferente de vazio(se som tem alguma coisa digitada)
        let songArray = song.split(''); // gerar cada letra como um item da array
        playComposion(songArray)
    }
})// observando a class selecionada e quando ocorrer um evento de click realizar ação


//Funções
function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`) // selecionando id do .html
    let keyElement = document.querySelector(`div[data-key="${sound}"]`) // pegando div data-key

    if(audioElement){ // verificando tecla caso ela seja encontrado
        audioElement.currentTime = 0; // caso aperte a mesma tecla 2x o audio vai reiniciar para não ter delay em ritmos rapidos
        audioElement.play();
    }

    if(keyElement){
        keyElement.classList.add('active') // achando o elemento e adcionando classe a ele 

        setTimeout(()=>{
            keyElement.classList.remove('active') // um timer para remover a classe em 300s 
        }, 300);
    }
}   

function playComposion(songArray){
    let wait = 0;

    for(let songItem of songArray){ // dando loop
        setTimeout(()=>{    // timer foi necessário para freiar cada iniciação de som, começamos com 0 e vai aumentando de 250+
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
    }
}