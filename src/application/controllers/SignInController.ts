import { ZodError, z } from 'zod';
import { IController, IResponse } from '../interfaces/IController';
import { SignInUseCase } from '../useCases/SignInUseCase';
import { InvalidCredentials } from '../errors/InvalidCredentials';
import { IRequest } from '../interfaces/IRequest';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export class SignInController implements IController {
  constructor(private readonly signInUseCase: SignInUseCase) {}

  async handle({ body }: IRequest): Promise<IResponse> {
    try {
      const { email, password } = schema.parse(body);

      const { acessToken } = await this.signInUseCase.execute({
        email,
        password,
      });

      return { statusCode: 200, body: { acessToken } };
    } catch (error) {
      if (error instanceof ZodError) {
        return { statusCode: 400, body: error.issues };
      }
      if (error instanceof InvalidCredentials) {
        return { statusCode: 401, body: { error: 'Invalid credentials' } };
      }
      throw error;
    }
  }
}
