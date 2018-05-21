const router = require('koa-router')()
const num = require('../public/config/config');

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = num;
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
