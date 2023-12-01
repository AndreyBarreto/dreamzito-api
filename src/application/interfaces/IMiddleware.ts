export interface IRequest {
  headers: Record<string, string>;
}
export interface IResponse {
  statusCode: number;
  body: Record<string, any> | null;
}

export interface Idata {
  data: Record<string, any>;
}

export interface IMiddleware {
  handle(headers: IRequest): Promise<IResponse | Idata>;
}
