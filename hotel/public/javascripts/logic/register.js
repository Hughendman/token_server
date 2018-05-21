const sql = require("../sql/hotel");
module.exports =async function (data) {
    await sql.register(data).then((result)=>{
        console.log(result);
    })
};