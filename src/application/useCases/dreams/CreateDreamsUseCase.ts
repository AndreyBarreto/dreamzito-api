import { prismaClient } from '../../libs/prismaClient';

interface IInput {
  title: string;
  description: string;
  account_id: string | undefined;
}

interface IOutput {
  dreams: any;
}

export class CreateDreamsUseCase {
  async execute({ title, description, account_id }: IInput): Promise<IOutput> {
    const dreams = await prismaClient.dreams.create({
      data: {
        title,
        description,
        account_id,
      },
    });

    return { dreams };

    //
  }
}
