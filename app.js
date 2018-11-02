const express=require('express');
const app=express();


var path= require("path");

app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/',function(req,res){
       
    res.sendFile(path.join(__dirname+'/homepage.html'))

});
app.listen('3000',()=>{

console.log("app listening on 3000");

})