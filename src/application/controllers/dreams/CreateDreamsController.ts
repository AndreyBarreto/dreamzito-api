import { IController, IRequest, IResponse } from '../../interfaces/IController';
import { CreateDreamsUseCase } from '../../useCases/dreams/CreateDreamsUseCase';
import { z } from 'zod';

const schema = z.object({
  title: z.string(),
  description: z.string(),
});

export class CreateDreamsController implements IController {
  constructor(private readonly createDreamsUseCase: CreateDreamsUseCase) {}

  async handle({ body, account_id }: IRequest): Promise<IResponse> {
    const { title, description } = schema.parse(body);

    const dreams = await this.createDreamsUseCase.execute({
      title,
      description,
      account_id,
    });

    return {
      statusCode: 201,
      body: { response: dreams },
    };
  }
}
