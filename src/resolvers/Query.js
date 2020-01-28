const { getUserId } = require('../util');

function accounts(_, args, ctx, info) {
  const userID = getUserId(ctx);
  return ctx.db.query.accounts({
    where: {
      OR: [
        {
          user: {
            id: userID
          }
        },
        {
          user: null
        }
      ]
    },
    orderBy: 'description_ASC'
  }, info)
}

function categories(_, { operation }, ctx, info) {
  const userID = getUserId(ctx);
  let AND = [
    {
      OR: [
        {
          user: {
            id: userID
          }
        },
        {
          user: null
        }
      ]
    }
  ]

  AND = !operation ? AND : [...AND, { operation: operation }];
  return ctx.db.query.categories({
    where: { AND },
    orderBy: 'description_ASC'
  }, info)
}

function user(_, args, ctx, info) {
  const userID = getUserId(ctx);
  return ctx.db.query.user({ where: { id: userID }}, info)
}

module.exports = {
  accounts,
  categories,
  user
}