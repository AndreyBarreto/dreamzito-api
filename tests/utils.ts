import { randomUUID } from 'crypto';
import app from '../src/server';
import request from 'supertest';

export class Utils {
  static generate_random_username(): string {
    return randomUUID();
  }

  static generate_random_email(): string {
    return randomUUID().replace(/-/g, '') + '@gmail.com';
  }

  static async sign_up(name: string, email: string): Promise<void> {
    await request(app).post('/sign-up').send({
      name: name,
      email: email,
      password: 'testpassword',
    });
  }

  static async sign_in(email: string, password: string): Promise<string> {
    const resp = await request(app).post('/sign-in').send({
      email,
      password,
    });
    return resp.body.acessToken;
  }

  static async generate_token(): Promise<string> {
    const email = Utils.generate_random_email();
    const name = Utils.generate_random_username();

    await Utils.sign_up(name, email);

    const token = await Utils.sign_in(email, 'testpassword');

    return token;
  }
}
