const { getUserId } = require('../util');

function user(_, args, ctx, info) {
  const userID = getUserId(ctx);
  return ctx.db.query.user({ where: { id: userID }}, info)
}

module.exports = {
  user
}