const express=require('express');
const app=express();



app.set('view engine','ejs');

app.get('/',function(req,res){
       
    res.sendFile('homepage.html');

});
app.listen('3000',()=>{

console.log("app listening on 3000");

})