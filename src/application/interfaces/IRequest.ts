export interface IRequest {
  body: Record<string, any>;
  params: Record<string, string>;
  account?: {
    id: string;
    role: string;
  };
  headers: Record<string, string>;
}
