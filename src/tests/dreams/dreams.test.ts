// import { Request } from 'supertest';
import request from 'supertest';
import { Utils } from '../utils';
import app from '../../server';

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

    expect(response.body.dreams.title).toBe('teste');
    expect(response.body.dreams.description).toBe('teste');
  });
});
