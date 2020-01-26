const { GraphQLServer } = require('graphql-yoga');
const Binding = require('prisma-binding');
const { prisma } = require('./generated/prisma-client');

const resolvers = require('./resolvers');
const endpoint = process.env.PRISMA_ENDPOINT;

const server = new GraphQLServer({
  typeDefs: './schemas/schema.graphql',
  resolvers,
  context: {
    db: new Binding.Prisma({
      typeDefs: `${__dirname}/generated/graphql-schema/prisma.graphql`,
      endpoint
    }),
    prisma
  }
});

server.start().then(() => console.log(`Server running on ${endpoint}`));