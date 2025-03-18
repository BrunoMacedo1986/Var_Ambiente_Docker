require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Configuração segura usando variáveis de ambiente
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados!');
  }
});

app.get('/', (req, res) => {
  res.send('Aplicação segura usando variáveis de ambiente!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});