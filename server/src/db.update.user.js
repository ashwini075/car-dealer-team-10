const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
  host: "localhost",
  user: "root",
  password: "123456",
  database: "mydb",
};

let updateUser = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  let sql =
    "upadate user set password =? where username=? ";
 let result = await connection.queryAsync(sql,[input.password,input.username]);
 return result;
console.log(result);
  await connection.endAsync();
};

module.exports = { updateUser };