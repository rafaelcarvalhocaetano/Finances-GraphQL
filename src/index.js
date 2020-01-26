const { GraphQLServer } = require('graphql-yoga');
const Binding = require('prisma-binding');
const { prisma } = require('./generated/prisma-client');

const resolvers = require('./resolvers');

const server = new GraphQLServer({
  typeDefs: './schemas/schema.graphql',
  resolvers,
  context: {
    db: new Binding.Prisma({
      typeDefs: `${__dirname}/generated/graphql-schema/prisma.graphql`,
      endpoint: process.env.PRISMA_ENDPOINT
    }),
    prisma
  }
});

server.start().then(() => console.log('Server running on http://localhost:4000'));

// async function main() {
//   await prisma.createUser({
//     name: 'Rafael Carvalho Caetano 2',
//     email: '2rapha.pse@outlook.com',
//     password: '2123456'
//   });

//   const users = await prisma.users();

//   console.log('Users: ', users);
// }

// main().catch(e => console.log('Deu Ruim -> ', e));