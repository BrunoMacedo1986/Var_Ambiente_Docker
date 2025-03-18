const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Configuração insegura - credenciais expostas no código
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'minhaSenha123',
  database: 'meubanco'
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados!');
  }
});

app.get('/', (req, res) => {
  res.send('Aplicação com credenciais inseguras no código.');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});