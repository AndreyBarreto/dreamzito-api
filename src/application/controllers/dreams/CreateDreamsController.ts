import { IController, IRequest, IResponse } from '../../interfaces/IController';
import { CreateDreamsUseCase } from '../../useCases/dreams/CreateDreamsUseCase';

export class CreateDreamsController implements IController {
  constructor(private readonly createDreamsUseCase: CreateDreamsUseCase) {}

  async handle({ body }: IRequest): Promise<IResponse> {
    console.log(body);
    // const dreams = await this.createDreamsUseCase.execute({});
    return {
      statusCode: 201,
      body: { response: [] },
    };
  }
}
