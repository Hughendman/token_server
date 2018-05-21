const router = require('koa-router')();
const logic = require('../../public/javascripts/logic/register');
const response = require('../../public/javascripts/utils/response');

router.prefix('/api/register');

router.post('/',async function (ctx, next) {
    await logic.god(data.name,data.pwd).then(function (data) {
        targ = data;
    });
    if(targ){
        res = response.login_success;
    }else{
        res = response.login_fail;
    }
    ctx.body = res;
});


module.exports = router;