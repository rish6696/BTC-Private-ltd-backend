const express=require('express');
const router=express.Router();
const{MongoClient}=require('mongodb');
const DB_url="mongodb://heroku_svj3zwsf:rgfjj7agqpcq54ikuv3lghidul@ds143342.mlab.com:43342/heroku_svj3zwsf";


router.post('/trucksecurity',(req,res)=>{
    console.log(req.body);

    MongoClient.connect(DB_url,(err,client)=>{
        if(err)
        throw err;
        const db=client.db('heroku_svj3zwsf');
        const bookings=db.collection('bookings');
        bookings.findOneAndUpdate({_id: "5cf15e99086542001789b574"}, {$set: {"port": "punjab"}})
        .then((result)=>{
            res.send(result);
        })
       
        
    })

})
module.exports=router;