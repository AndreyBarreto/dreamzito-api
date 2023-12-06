import { env } from '../config/env';
import {
  IMiddleware,
  IRequest,
  IResponse,
  Idata,
} from '../interfaces/IMiddleware';
import { verify } from 'jsonwebtoken';

export class AuthenticationMiddleware implements IMiddleware {
  async handle({ headers }: IRequest): Promise<IResponse | Idata> {
    const { authorization } = headers;
    if (!authorization) {
      return {
        statusCode: 401,
        body: { error: 'Invalid access token' },
      };
    }
    try {
      const [, token] = authorization.split(' ');
      const payload = verify(token, env.jwtSecret);
      return {
        data: {
          account_id: payload.sub,
        },
      };
    } catch {
      return {
        statusCode: 401,
        body: { error: 'Invalid access token' },
      };
    }
  }
}
