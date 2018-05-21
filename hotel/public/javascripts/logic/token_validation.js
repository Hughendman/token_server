const sql = require("../sql/hotel");
module.exports = async function (token) {
    let data;
    await sql.token_validation(token).then(result => {
        data = result;
    });
    if(data.length != 0){
        return true;
    }else{
        return false;
    }
};