const { GraphQLServer } = require('graphql-yoga');
const Binding = require('prisma-binding');
const { prisma } = require('./generated/prisma-client');

const resolvers = require('./resolvers');

const server = new GraphQLServer({
  typeDefs: './schemas/schema.graphql',
  resolvers,
  context: (request) => ({
    ...request,
    db: new Binding.Prisma({
      typeDefs: `${__dirname}/generated/graphql-schema/prisma.graphql`,
      endpoint: process.env.PRISMA_ENDPOINT
    }),
    prisma
  })
});

server.start().then(() => console.log(`Server running on ${endpoint}`)).catch((e) => console.log('ERROR ', e));