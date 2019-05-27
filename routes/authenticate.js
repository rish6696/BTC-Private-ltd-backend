const express=require('express');
const router=express.Router();
const{MongoClient}=require('mongodb');
const DB_url="mongodb://localhost:27017";

router.post('/adduserports',(req,res)=>{
    console.log(req.body);

    MongoClient.connect(DB_url,(err,client)=>{
        const db=client.db('btcdb');
        const userports=db.collection('userports');
        userports.insertOne({
            name:req.body.name,
            password:req.body.password

        }).then((result)=>{
            res.send(result);
        }).catch((err)=>{
            res.send(err);
        })
    })

})
module.exports=router;