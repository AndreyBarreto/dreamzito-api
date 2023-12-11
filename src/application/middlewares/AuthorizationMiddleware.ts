import { IMiddleware, IResponse, Idata } from '../interfaces/IMiddleware';
import { IRequest } from '../interfaces/IRequest';

export class AuthorizationMiddleware implements IMiddleware {
  async handle(headers: IRequest): Promise<IResponse | Idata> {
    throw new Error('Method not implemented.');
  }
}
