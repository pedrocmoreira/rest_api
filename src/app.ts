import fastify from 'fastify';
import cookie from '@fastify/cookie';
import { env } from './env';

import { transactionsRoutes } from './routes/transactions';

const app = fastify();

app.register(cookie);

app.register(transactionsRoutes, {
  prefix: 'transactions',
});

export { app };
