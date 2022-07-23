import express from 'express';

const app = express();
const PORT = 3000;

let users = [
  { id: 1, name: 'Aleff Lira', age: 28 },
  { id: 2, name: 'Maria Jaciane', age: 27 }
];

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/', (request, response) => {
  return response.send('<h1>Trabalhando com o servidor express</h1>');
});

// Criação das Rotas

app.get('/users', (request, response) => {
  return response.send(users);
});

app.get('/users/:userId', (request, response) => {
  const userId = request.params.userId;
  const user = users.find(user => {
    return user.id === Number(userId);
  });
  return response.send(usersId);
});
