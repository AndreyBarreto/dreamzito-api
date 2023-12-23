import { Request, Response } from 'express';
import { ZodError } from 'zod';

export const errorHandler = (err: Error, req: Request, res: Response) => {
  if (err instanceof ZodError) {
    return res.status(400).send({ errors: err.issues });
  }

  return res.status(500).send({
    errors: [{ message: 'Internal Server Error' }],
  });
};
