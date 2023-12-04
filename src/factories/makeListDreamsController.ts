import { ListDreamsController } from '../application/controllers/dreams/ListDreamsController';
import { ListDreamsUseCase } from '../application/useCases/dreams/ListDreamsUseCase';

export function makeListDreamsController() {
  const signInUseCase = new ListDreamsUseCase();
  return new ListDreamsController(signInUseCase);
}
