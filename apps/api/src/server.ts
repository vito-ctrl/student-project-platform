import fastify from "fastify";

const app = fastify();

app.get("/health", async () => {
    return {status : "ok"};
});

app.listen({ port: 4000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`API running at ${address}`);
});