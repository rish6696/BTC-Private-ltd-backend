const express=require('express');
const router=express.Router();
const{MongoClient}=require('mongodb');
const DB_url=require('../Db_url')




router.post('/addbooking',(req,res)=>{
    console.log(req.body);
    const dateVariable=new Date();
    const month=dateVariable.getMonth()+1;
    const hrs=dateVariable.getHours();
    const minutes=dateVariable.getMinutes();

    MongoClient.connect(DB_url,(err,client)=>{
        if(err)
        throw err;
        const db=client.db('heroku_m2lkjzfv');
        const bookings=db.collection('bookings');
        bookings.insertOne({
           port:req.body.port,
           truck:req.body.truck,
           party:req.body.party,
           date:dateVariable.getDate()+"/"+month+"/"+dateVariable.getFullYear(),
           time:hrs+":"+minutes,
           truckSecurity:req.body.truckSecurity,
           partySecurity:req.body.partySecurity,
           status:req.body.status
          
           


        }).then((result)=>{
            res.send(result.result);
        })
        
    })

})
module.exports=router;