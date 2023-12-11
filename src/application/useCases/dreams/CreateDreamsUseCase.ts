import { prismaClient } from '../../libs/prismaClient';

interface IInput {
  title: string;
  description: string;
  account?: {
    id: string;
    role: string;
  };
}

interface IOutput {
  dreams: any;
}

export class CreateDreamsUseCase {
  async execute({ title, description, account }: IInput): Promise<IOutput> {
    const dreams = await prismaClient.dreams.create({
      data: {
        title,
        description,
        account_id: account?.id,
      },
    });

    return { dreams };

    //
  }
}
