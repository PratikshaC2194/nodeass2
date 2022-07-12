const ex =require("express")
const app=ex();
app.get('/',function(req,res)
{
    // res.send("hello");it will show error bcz it should be last
    res.json({name:"Neela"});
    //res.send("hello");
    //res.send("<h1>hello</h1>");
})
app.get('/user1',function(req,res)
{

    res.json({name:"Neela1"});
    
})
app.get('/user2',function(req,res)
{

    res.json({name:"Neela2"});
    
})
app.get('/user3',function(req,res)
{
    res.json({name:"Neela3"});
   
})
app.listen(5000,function(){
    console.log("listening");
});