const strRandom = require("../utils/random");
const sql = require("../sql/hotel");
const config = require("../../config/config");

function random(name,pwd) {
    let back = strRandom(),code1 = encodeURI(name),code2 = encodeURI(pwd);
    return token = code1+code2+back;
}

async function loginNum(name,pwd) {
    let num = config.login_num,info = null,human = null,token = null,flag = false,ran = null;
    await sql.login(name,pwd).then(result => {
        human = result;
    });
    await sql.token_num(human[0].id).then(result => {
        info = result;
    });
    ran = config.ran();
    if(ran == config.login_num && config.target){
        flag = true;
    }
    if(num <= info.length||flag){
        await sql.token_fail(info[0].id).then(result => {
            // console.log(result);
        });
    }
    await insertToken(name,pwd).then(function (data) {
        token = data;
    });
    return token;
}

async function insertToken(name,pwd) {
    let token = random(name,pwd),info = null,human=null;
    await sql.login(name,pwd).then(result => {
        human = result;
    });
    await sql.token_insert(token,human[0].id).then(result => {
        // console.log(result);
    });
    return token;
}

async function god(name,pwd) {
    let info = null;
    await sql.login(name,pwd).then(result => {
        info = result;
    });
    if(info.length > 0){
        return true;
    }else{
        return false;
    }
}
module.exports = {
    loginNum,
    god
};