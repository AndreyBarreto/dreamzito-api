// import { Request } from 'supertest';
import app from '../src/server';
import request from 'supertest';
import { Utils } from './utils';

describe('Testes para a rota de cadastro de usuário', () => {
  const email = Utils.generate_random_email();
  it('Deve cadastrar um usuário com sucesso', async () => {
    const response = await request(app).post('/sign-up').send({
      name: 'teste',
      email: email,
      password: 'testpassword',
    });
    expect(response.status).toBe(204);
  });
  it('Cadastrar usuário com mesmo email', async () => {
    const response = await request(app).post('/sign-up').send({
      name: 'teste',
      email: email,
      password: 'testpassword',
    });
    expect(response.status).toBe(409);
  });
});
