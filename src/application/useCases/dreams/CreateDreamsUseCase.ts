import { prismaClient } from '../../libs/prismaClient';

interface IInput {
  account_id: string | undefined;
}

interface IOutput {
  dreams: any;
}

export class CreateDreamsUseCase {
  async execute(): Promise<IOutput> {
    // const dreams = await prismaClient;

    return { dreams: 'da' };

    //
  }
}
