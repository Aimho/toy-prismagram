/**
 * server main
 */

require('dotenv').config();
import { GraphQLServer } from 'graphql-yoga';
// morgan: 로깅 전용 모듈
import logger from 'morgan';
import schema from './schema';

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ schema });

server.express.use(logger('dev'));
server.start({ port: PORT }, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
