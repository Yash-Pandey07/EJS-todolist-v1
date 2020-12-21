const express =require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");



const items=["Buy Items","Cook Food",];
const workItems=[];

const app=express();//app decleration

//EJS
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",function(req,res){

// console.log(today.toLocaleDateString("hi-IN", options)); for hindi

  const day=date.getDate();
  res.render("list",{ListTitle:day,newListItems:items});

});


app.get("/work",function(req,res){
    const day=date.getDate();
    res.render("list",{ListTitle:"day",newListItems:workItems});
});

app.post("/work",function(req,res){
  const item=req.body.newListItems;
  workItems.push(item);
  res.redirect("/work");
})


app.post("/",function(req,res){

  let item=req.body.newItem;

  if (req.body.list==="Work"){
      workItems.push(item);
      res.redirect("/work");
  }else{
      // console.log(item);
      items.push(item);
        res.redirect("/")
  }



});


// app.post("/clear",(req,res)=>{
//
// if(req.body.clear==="all") {
//
// items=[];
//
// res.render("/clear");
// }});

app.listen(3000,function(){
  console.log("Server is running at port 3000");
});
