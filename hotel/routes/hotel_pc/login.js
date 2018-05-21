const router = require('koa-router')();
const logic = require('../../public/javascripts/logic/login');
const response = require('../../public/javascripts/utils/response');

router.prefix('/api/login');

router.post('/',async function (ctx, next) {
    let data = ctx.request.body,res = null,targ = false,token=null;
    await logic.god(data.name,data.pwd).then(function (data) {
        targ = data;
    });
    if(targ){
        await logic.loginNum(data.name,data.pwd).then(function (data) {
            token = data;
        });
        res = response.login_success;
        res.data={
            token:token
        }
    }else{
        res = response.login_fail;
    }
    ctx.body = res;
});


module.exports = router;