// import { Request } from 'supertest';
import app from '../../src/server';
import request from 'supertest';
import { Utils } from '../utils';

describe('Testes para a rota de cadastro de sonhos', () => {
  it('Deve cadastrar um sonho com sucesso', async () => {
    const token = await Utils.generate_token();
    const response = await request(app)
      .post('/dreams')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'teste',
        description: 'teste',
      });
    expect(response.status).toBe(201);
  });
});
