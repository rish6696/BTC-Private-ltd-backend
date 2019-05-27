const express=require('express');
const router=express.Router();
const{MongoClient}=require('mongodb');
const DB_url="mongodb://localhost:27017";


router.post('/',(req,res)=>{
    console.log(req.body);

    MongoClient.connect(DB_url,(err,client)=>{
        const db=client.db('btcdb');
        const userports=db.collection('userports');
        userports.findOne({
            $and:[
                {
                    name:req.body.username
                },
                {
                    password:req.body.password
                }
            ]
        }).then((result)=>{
            console.log(result);
            res.send(result);
        })
        
    })

})
module.exports=router;