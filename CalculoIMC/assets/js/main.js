const dados = document.querySelector('#form');

dados.addEventListener('submit',function(event){
    event.preventDefault();
    const inputPeso = event.target.querySelector('input[name="peso"]'); 
    const inputAltura = event.target.querySelector('input[name="altura"]');
    
    //console.log(inputPeso.value); Letras e Números
    const peso = Number(inputPeso.value); //Adicionar Number na linha de cima causa erro
    const altura = Number(inputAltura.value)
    
    if(!peso){
        return setResultado('Peso invalido')
    }
    
    if(!altura){
        return setResultado('Altura invalido')
    }

    setResultado(calculoIMC(peso,altura))
})

function calculoIMC(peso,altura){
    const imc = peso/altura**2
    return imc.toFixed(2);
}

function criarP(msg){
    const p = document.createElement('p'); //Cria um elemento
    p.classList = "paragrafo"; // Inclui um atributo de classe com o nome paragrafo
    p.innerHTML = msg; // Atribui valor ao elemento
    return p;
}

function setResultado(msg){
    const resultado = document.querySelector('#resultado');// Recebe acesso ao local com id resultado
    //resultado.innerHTML = '<p>'+ msg + '</p>'; //Receber o valor de msg modifica o html e o inclui na pagina 
    resultado.innerHTML = '';
    const p = criarP(msg);
    resultado.appendChild(p); // Atribui o elemento que controla a div, com método para elementos
}

