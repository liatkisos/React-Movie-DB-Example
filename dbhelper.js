var mysql = require('promise-mysql');



var myDBhelper = {
    pool: null,
    connect:function() {
        var pool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: 'mysql',
            database: 'movies',
            connectionLimit: 10
          });
          this.pool=pool;
          console.log('connected to db.')
    }

}

module.exports= myDBhelper;