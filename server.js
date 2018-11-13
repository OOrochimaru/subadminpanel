var path = require('path');
var express = require('express');

var app = express();
let pathName = 'dist/subadmin/';
app.use(express.static(path.join(__dirname, pathName)));
app.get("/*", function(req, res, next){
    res.sendFile(path.join(__dirname, pathName,'index.html'));
})

app.listen(process.env.PORT || 4000, function(){
  console.log('listening to port ');
});