import { prismaClient } from '../../libs/prismaClient';

interface IInput {
  account?: {
    id: string;
    role: string;
  };
}

interface IOutput {
  dreams: any;
}

export class ListDreamsUseCase {
  async execute({ account }: IInput): Promise<IOutput> {
    const dreams = await prismaClient.dreams.findMany({
      where: { account_id: account?.id },
    });

    return { dreams };

    //
  }
}
