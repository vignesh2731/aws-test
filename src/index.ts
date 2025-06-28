import express from 'express'
const app=express();
app.get("/",(req,res)=>{
    const num=Math.random()*100;
    res.json({
        msg:num
    })
})
app.listen(3000,()=>{
    console.log("listening on express server")
})