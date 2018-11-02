// const fso=require('fs');
// const sA=fso.readFileSync('gb.json');
// const serviceAccount=JSON.parse(sA);

// const admin = require('firebase-admin');

// //var serviceAccount = require('gb.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// var db = admin.firestore();
var config = {
  apiKey: "AIzaSyAIECX7nUeA6W6Z52kvWx25GeZ4OfIknAo",
  authDomain: "gavel-and-beyond.firebaseapp.com",
  projectId: "gavel-and-beyond",
  databaseURL: "https://gavel-and-beyond.firebaseio.com",
  storageBucket: "gavel-and-beyond.appspot.com",
};
firebase.initializeApp(config);


 

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});


var homepages = db.collection('home-page');
var allarticles = homepages.get()
  .then(snapshot => {
    snapshot.forEach(doc => {
     console.log(doc.id, '=>', doc.data());

    renderarticle(doc);
    renderimage(doc);
   
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });
  
  var row = document.getElementById('row');
  var oc=document.getElementById('oc');
  //
  function renderarticle(doc){
    var column = document.createElement("div");
    column.setAttribute('class', 'col s12 m5 l3');
    var card=document.createElement("div");
    card.setAttribute('class','card hoverable');
  
    var cardimage=document.createElement("div");
    cardimage.setAttribute('class','card-image waves-effect waves-block waves-light');
 
    var image=document.createElement('img');
    image.setAttribute('src',doc.data().pictureurl);
    //image.setAttribute('class', 'responsive-img');
    
    image.setAttribute('class',"thumbnail activator");
    
   
     
    cardimage.appendChild(image);
    var cardcontent=document.createElement("div");
    cardcontent.setAttribute('class','card-content');
    var cardaction=document.createElement('div');
     cardaction.setAttribute('class','card-action');
     var span = document.createElement("SPAN");
     span.setAttribute('class','card-title ');
     var i=document.createTextNode(doc.data().title);
     span.appendChild(i);
     span.setAttribute('class',"truncate")
     var para= document.createElement("P");
     var t = document.createTextNode(doc.data().subtitle);
     para.setAttribute("class","truncate");     // Create a text node
para.appendChild(t); 
cardcontent.appendChild(span);
cardcontent.appendChild(para);
var createA = document.createElement('a');
var createAText = document.createTextNode('Read Article');
createA.setAttribute('href', "http://www.google.com");
createA.appendChild(createAText);
cardaction.appendChild(createA);
// var cardreveal=document.createElement("div");
// cardreveal.setAttribute("class","card-reveal");
// var crspan=document.createElement("span");
// crspan.setAttribute("class","card-title grey-text text-darken-4");
// var crtext=document.createTextNode(doc.data().title);
// crspan.appendChild(crtext);
// // var icon=document.createElement("i");
// // icon.setAttribute("class", "material-icons right");

// // icon.appendChild(clos);
// crspan.appendChild('<i class="material-icons right">more_vert</i>');
// var crpara=document.createElement("p");
// crpara.appendChild(doc.data().subtitle);
// cardreveal.appendChild(crspan);
// cardreveal.appendChild(crpara);
// card.appendChild(cardreveal);




     card.appendChild(cardimage);

     card.appendChild(cardcontent);
     card.appendChild(cardaction);
 column.appendChild(card);
row.appendChild(column);


  } 
  function renderimage(doc){
  var cm=document.getElementById("1");
  cm.setAttribute("src",doc.data().pictureurl);

  }
