import { IController, IRequest, IResponse } from '../interfaces/IController';

export class ListLeadsController implements IController {
  async handle(request: IRequest): Promise<IResponse> {
    console.log(request);
    return {
      statusCode: 200,
      body: {
        leads: [{ oi: 'xau' }, { oi: 'xau' }, { oi: 'xau' }],
      },
    };
  }
}
