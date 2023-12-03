// import { Request } from 'supertest';
import app from '../src/server';
import request from 'supertest';
import { Utils } from './utils';

describe('Testes para a rota de cadastro de usuário', () => {
  it('Deve cadastrar um usuário com sucesso', async () => {
    const email = Utils.generate_random_email();
    const response = await request(app).post('/sign-up').send({
      name: 'teste',
      email: email,
      password: 'testpassword',
    });
    expect(response.status).toBe(204);
  });
});
