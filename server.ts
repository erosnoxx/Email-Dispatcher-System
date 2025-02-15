import Fastify from "fastify";
import router from "./src/api/routes/router";

const fastify = Fastify({ logger: true });

fastify.register(router);

fastify.listen({port: 3000}, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server listening at ${address}`);
});
