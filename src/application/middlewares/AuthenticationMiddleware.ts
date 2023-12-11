import { env } from '../config/env';
import { IMiddleware, IResponse, Idata } from '../interfaces/IMiddleware';
import { JwtPayload, verify } from 'jsonwebtoken';
import { IRequest } from '../interfaces/IRequest';

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
      const payload = verify(token, env.jwtSecret) as JwtPayload;

      return {
        data: {
          account: {
            id: payload.sub,
            role: payload.role,
          },
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
