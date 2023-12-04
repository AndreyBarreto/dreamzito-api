import { prismaClient } from '../../libs/prismaClient';

interface IInput {
  account_id: string | undefined;
}

interface IOutput {
  dreams: any;
}

export class ListDreamsUseCase {
  async execute({ account_id }: IInput): Promise<IOutput> {
    const dreams = await prismaClient.dreams.findMany({
      where: { account_id },
    });

    return { dreams };

    //
  }
}
