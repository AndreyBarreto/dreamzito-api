declare namespace Express {
  interface Request {
    metadata: {
      account_id: string | undefined;
    };
  }
}
