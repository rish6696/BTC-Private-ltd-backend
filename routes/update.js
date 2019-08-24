const express=require('express');
const router=express.Router();
const{MongoClient}=require('mongodb');
const DB_url=require('../Db_url')
let ObjectID = require('mongodb').ObjectID;


router.post('/',(req,res)=>{
    const date=(new Date()).toISOString()
    if(req.body.truckSecurity.status){
        console.log('updated truck security')
        req.body.truckSecurity['date']=date
    }
    if(req.body.partySecurity.status){
        console.log('updated party security')
        req.body.partySecurity['date']=date
    }
    MongoClient.connect(DB_url,(err,client)=>{
        if(err)
        throw err;
        const db=client.db('heroku_m2lkjzfv');
        const bookings=db.collection('bookings');
        bookings.updateOne({
            _id:new ObjectID(req.body._id)
        },{
            $set:{
                truckSecurity:req.body.truckSecurity,
                partySecurity:req.body.partySecurity,
                status:req.body.status
            }
        }).then((result)=>{
            res.send(result);
        })      
       
        
    })

})
module.exports=router;