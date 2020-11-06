/* 
  data = require("mysql")

  var x = data.createConnection({
      host:"localhost",
      user:"root",
      password:"jojo",
      database:"mydb"

  })

x.connect(function(err){
    if(err) throw err;
    var sql = `UPDATE customers2 SET name = ${newname} WHERE name = 'hey'`
    x.query(sql,function(err){
        if(err) throw err;
    })
 