import { CreateDreamsController } from '../application/controllers/dreams/CreateDreamsController';
import { IController } from '../application/interfaces/IController';
import { CreateDreamsUseCase } from '../application/useCases/dreams/CreateDreamsUseCase';

export function makeCreateDreamsController(): IController {
  const createDreamsUseCase = new CreateDreamsUseCase();
  return new CreateDreamsController(createDreamsUseCase);
}
