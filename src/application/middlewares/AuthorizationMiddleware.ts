import { IMiddleware, IResponse, Idata } from '../interfaces/IMiddleware';
import { IRequest } from '../interfaces/IRequest';

export class AuthorizationMiddleware implements IMiddleware {
  constructor(private readonly allowedRoles: string[]) {}
  async handle({ account }: IRequest): Promise<IResponse | Idata> {
    if (!account || !this.allowedRoles.includes(account.role)) {
      return {
        statusCode: 403,
        body: {
          error: 'Access Denied.',
        },
      };
    }
    return { data: {} };
  }
}
