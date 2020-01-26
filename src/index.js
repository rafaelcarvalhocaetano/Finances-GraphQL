const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('../generated/prisma-client');

// const schema = require('./schema.')

const resolvers = {
  Query: {
    user(parent, args, context, info) {
      return prisma.user({ id: args.id });
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers: resolvers
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