const express=require('express');
const app=express();
var bodyParser = require('body-parser');

var path= require("path");
const admin = require('firebase-admin');

var serviceAccount = require('./gb.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();
db.settings({
    timestampsInSnapshots: true
  });

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/',function(req,res){
       
    res.sendFile(path.join(__dirname+'/homepage.html'))

});

app.get('/contactus',function(req,res){
       
  res.render('contactus.ejs');

});

app.get('/article/:id',(req,res)=>{
var articleid=req.params.id;
// console.log(articleid.toString());
    var Ref = db.collection('home-page').doc(articleid.toString());
    var getDoc = Ref.get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
          res.render('article.ejs',{data:"ERROR 404 NOT FOUND",pictureurl:""});
        } else {
          // console.log('Document data:', doc.data());
  res.render('article.ejs',{data:doc.data().subtitle,pictureurl:doc.data().pictureurl,aid:articleid,tt:doc.data().title,author:doc.data().author,subtitlehome:doc.data().subtitlehome});
        }
      })
      .catch(err => {
        console.log('Error getting document', err);
      });
  
})
  

app.listen('8080',()=>{

console.log("app listening on 8080");

})