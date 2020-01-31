const { getUserId } = require('../util');
const moment = require('moment');

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

function records(_, { month, type, accountsIds, categoriesIds }, ctx, info) {
  const userId = getUserId(ctx);

  let AND = [ { user: { id: userId }}]
  AND = !type ? AND : [ ...AND, { type : type }]

  AND = !accountsIds || accountsIds.length === 0 ? AND :
  [ ...AND, {
    OR: accountsIds.map(id => ({ account: { id: id }}))
  }];

  AND = !categoriesIds || categoriesIds.length === 0 ? AND :
  [ ...AND, {
    OR: categoriesIds.map(id => ({ category: { id: id }}))
  }];
  if (month) {
    const date = moment(month, 'MM-YYYY');
    const startDate = date.startOf('month').toISOString();
    const endDate = date.endOf('month').toISOString();
    AND = [
      ...AND,
      { date_gte: startDate },
      { date_lte: endDate }
    ]
  }

  return ctx.db.query.records({
    where: { AND },
    orderBy: 'date_ASC'
  }, info);
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
  records,
  user
}