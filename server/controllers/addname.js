const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'wx07cb15f4e9757dc6',
  database: 'test'
});

connection.connect();



module.exports = {
  post: async ctx => {
    connection.query('INSERT INTO name VALUES(null,' + ctx.request.body +')', function (error, results, fields) {
      if (error) throw error;
      ctx.req.data = results[0].solution;
    });
  }
}