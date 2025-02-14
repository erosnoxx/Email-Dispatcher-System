import Fastify from "fastify";

const fastify = Fastify({ logger: true });

fastify.get("/", async () => {
  return { message: "API Fastify rodando!" };
});

fastify.listen({ port: 3000 }, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
