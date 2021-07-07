let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')

function pular(){
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')
    }

    setTimeout(function(){
        personagem.classList.remove('animar')  
    }, 500)
}

var testar = setInterval( function(){
    
       var topoPersonagem = parseInt(
         window.getComputedStyle(personagem).getPropertyValue('top')
        )
       var EsquerdaQuadrado = parseInt(
           window.getComputedStyle(quadrado).getPropertyValue('left')
        )

        if(EsquerdaQuadrado < 40 && EsquerdaQuadrado > 0&& topoPersonagem >= 260){
          quadrado.style.animation = 'none'
          quadrado.style.display = 'none'
          alert('game over')        
    }
  

  }, 10)