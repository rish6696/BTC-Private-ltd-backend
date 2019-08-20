const express=require('express');
const router=express.Router();
const{MongoClient}=require('mongodb');
const DB_url=require('../Db_url')
const sendSms=require('../nexmo');


router.post('/',(req,res)=>{
    console.log(req.body);

    MongoClient.connect(DB_url,(err,client)=>{
        if(err)
        throw err;
        const db=client.db('heroku_m2lkjzfv');
        const bookings=db.collection('bookings');
        bookings.find({
            port:req.body.username
        }).toArray().then((result)=>{
            res.send(result)
        })
        
    })

})
module.exports=router;