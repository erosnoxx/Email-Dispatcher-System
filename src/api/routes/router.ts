import { FastifyInstance } from 'fastify';

export default async function router(fastify: FastifyInstance) {
  fastify.get('/', async (request, reply) => {
    return { message: 'Nothing to see here!' };
  });
}
