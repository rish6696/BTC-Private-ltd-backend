const express=require('express');
const router=express.Router();
const{MongoClient}=require('mongodb');
const DB_url=require('../Db_url')

router.get('/allports',(req,res)=>{
    

    MongoClient.connect(DB_url,(err,client)=>{
        if(err)
        throw err;
        const db=client.db(process.env.DB_USER);
        const userports=db.collection('userports');
        userports.find().toArray()
        .then((result)=>{
            res.send(result);
        }).catch((err)=>{
            res.send(err);
        })
        
    })

})
module.exports=router;