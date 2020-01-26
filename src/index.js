const { prisma } = require('../generated/prisma-client');

async function main() {
  await prisma.createUser({
    name: 'Rafael Carvalho Caetano 2',
    email: '2rapha.pse@outlook.com',
    password: '2123456'
  });

  const users = await prisma.users();

  console.log('Users: ', users);
}

main().catch(e => console.log('Deu Ruim -> ', e));