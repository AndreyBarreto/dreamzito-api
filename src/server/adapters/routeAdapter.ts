import { Request, Response } from 'express';
import { IController } from '../../application/interfaces/IController';
import { errorHandler } from '../../application/middlewares/ErrorHandler';

export function routeAdapter(controller: IController) {
  return async (request: Request, response: Response) => {
    try {
      const { statusCode, body } = await controller.handle({
        body: request.body,
        params: request.params,
        account: request.metadata?.account,
        headers: request.headers as Record<string, string>,
      });

      response.status(statusCode).json(body);
    } catch (error: any) {
      errorHandler(error, request, response);
    }
  };
}
