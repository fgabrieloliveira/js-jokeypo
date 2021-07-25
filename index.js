function retornaResultado(userChoice){
    const list = ['pedra', 'papel', 'tesoura'];
    botChoice = list[Math.floor(Math.random()*list.length)];
    if (userChoice=='pedra'){
        if(botChoice=='papel'){
            var resultado = 'você perdeu';
        }else if(botChoice=='tesoura'){
            var resultado = 'você ganhou';
        }else{
            var resultado = 'empate'
        }
    } 
    else if(userChoice=='papel'){
        if(botChoice=='tesoura'){
            var resultado = 'você perdeu';
        }else if(botChoice=='pedra'){
            var resultado = 'você ganhou';
        }else{
            var resultado = 'empate'
        }
    }
    else if(userChoice=='tesoura'){
        if(botChoice == 'pedra'){
            var resultado = 'você perdeu';
        } else if(botChoice=='papel'){
            var resultado = 'você ganhou';

        }else{
            var resultado = 'empate'
        }
    }
    
return [resultado, botChoice];
}