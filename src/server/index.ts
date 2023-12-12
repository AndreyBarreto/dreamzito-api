import express from 'express';

import { routeAdapter } from './adapters/routeAdapter';

import { makeSignUpController } from '../factories/makeSignUpController';
import { makeSignInController } from '../factories/makeSignInController';
import { makeListDreamsController } from '../factories/makeListDreamsController';
import { middlewareAdapter } from './adapters/middlewareAdapter';
import { makeAuthenticationMiddleware } from '../factories/makeAuthenticationMiddleware';
import { makeCreateDreamsController } from '../factories/makeCreateDreamsController';
import { makeAuthorizationMiddleware } from '../factories/makeAuthorizationMiddleware';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Home!');
});

app.post('/sign-up', routeAdapter(makeSignUpController()));
app.post('/sign-in', routeAdapter(makeSignInController()));

app.get(
  '/dreams',
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeListDreamsController())
);
app.post(
  '/dreams',
  middlewareAdapter(makeAuthenticationMiddleware()),
  middlewareAdapter(makeAuthorizationMiddleware(['ADMIN'])),
  routeAdapter(makeCreateDreamsController())
);

export default app;
