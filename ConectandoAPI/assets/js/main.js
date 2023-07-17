const elementoCurso = document.querySelector('#textos')

const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://localhost:7166/api/usuario');
  next();
});

// Resto das configurações e rotas do seu servidor

app.listen(7166, () => {
  console.log('Servidor rodando na porta 7166');
});


async function consultarUsuarios(){
    const retorno = await fetch('https://localhost:7166/api/usuario');
    const usuarios = await retorno.json();
    console.log(usuarios);
}

consultarUsuarios()