// const pool=require('pg').POOL
// const Pool=new pool({
//     host:"localhost",
//     user:'postgres',
//     port:5432,
//     password:'lmvit@123',
//     database:'pernlog_db'
// })
// module.export=poocon
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "pernlogin_dbb",
  password: "lmvit123",
  port: 5432,
});

module.exports = pool;
