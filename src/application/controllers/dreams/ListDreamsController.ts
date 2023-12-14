import { IController, IResponse } from '../../interfaces/IController';
import { IRequest } from '../../interfaces/IRequest';
import { ListDreamsUseCase } from '../../useCases/dreams/ListDreamsUseCase';

export class ListDreamsController implements IController {
  constructor(private readonly listDreamUseCase: ListDreamsUseCase) {}

  async handle({ account }: IRequest): Promise<IResponse> {
    const dreams = await this.listDreamUseCase.execute({ account });
    return {
      statusCode: 200,
      body: { response: dreams },
    };
  }
}
