import { IController, IRequest, IResponse } from '../../interfaces/IController';
import { ListDreamsUseCase } from '../../useCases/dreams/ListDreamsUseCase';

export class ListDreamsController implements IController {
  constructor(private readonly listDreamUseCase: ListDreamsUseCase) {}

  async handle({ account_id }: IRequest): Promise<IResponse> {
    const dreams = await this.listDreamUseCase.execute({ account_id });
    console.log(dreams);
    return {
      statusCode: 200,
      body: { response: dreams },
    };
  }
}
