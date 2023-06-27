const dados = document.querySelector('#formulario');

dados.addEventListener('submit',function(evento){
    evento.preventDefault();
    console.log('Evento Previnido!');
})

