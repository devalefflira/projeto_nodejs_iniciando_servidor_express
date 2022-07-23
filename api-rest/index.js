import express, { request } from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();
const PORT = 3000;

let users = [
  { id: 1, name: 'Aleff Lira', age: 28 },
  { id: 2, name: 'Maria Jaciane', age: 27 }
];

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/', (request, response) => {
  return response.send('<h1>Trabalhando com o servidor express</h1>');
});

// Criação do end point de GET
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

// Criação do end point de POST

app.post('/users', (request, response) => {
  const newUser = request.body;

  users.push(newUser);

  return response.status(StatusCodes.CREATED).send(newUser);
});

// Atualização de Registros da base com PUT

app.put('/users/:userId', (request, response) => {
  const userId = request.params.userId;
  const updatedUser = request.body;

  users = users.map(user => {
    if (Number(userId) === user.id) {
      return updatedUser;
    }
    return user;
  });
  return response.send(updatedUser);
});
