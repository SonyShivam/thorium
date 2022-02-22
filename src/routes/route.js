const express = require('express');
const router = express.Router();

//default//
router.get('/test-me', function (req, res) {
    res.send('My first ever api! (hey this is some text)')
});


//1  the api will fetch all movies 1
router.get('/movies',function (req,res) {
    res.send('["Fukrey","Rang de Basnti","sole","welcome","Nigahne","Gadar"]')
    })

//2 this api will fetch all moveis  by indexid from array//
router.get('/movies/:moveieId', function(req,res){
mov=["Fukrey","Rang de Basnti","sole","welcome","Nigahne","Gadar"];
let value=req.params.moveieId;
if(value>mov.length-1){
    res.send('"Movie doesnt exist"')
}  else{
    res.send(mov[value])
}

});


//3 //
router.get('/moviesList',function(req,res){

res.send([{id:1,name:"Fukrey"},{id:2,name:"Rang de Basnti"},{id:3,name:"sole"},{id:4,name:"welcome"},{id:5,name:"Nigahne"},{id:6,name:"Gadar"}])})


//4//this api will fetch all movies form array by moviesIds//
router.get('/flim/:flimId',function(req,res){
    let movIes=[{id:1,name:"Fukrey"},{id:2,name:"Rang de Basnti"},{id:3,name:"sole"},{id:4,name:"welcome"},{id:5,name:"Nigahne"},{id:6,name:"Gadar"}]
let v=req.params.flimId;
let found=false;
for(let i=0;i<movIes.length;i++){
    if(movIes[i].id==v){
found=true;
res.send(movIes[i])
break;
}

}

});

module.exports = router;

