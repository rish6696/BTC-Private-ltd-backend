const express=require('express');
const router=express.Router();
const{MongoClient}=require('mongodb');
const sendSms=require('../nexmo');
const DB_url="mongodb://heroku_svj3zwsf:rgfjj7agqpcq54ikuv3lghidul@ds143342.mlab.com:43342/heroku_svj3zwsf";

router.post('/',async (req,res)=>{ 
   Promise.all([sendSms('Nexmo','917838389193','Btc Details'),sendSms('Nexmo','917838389193','Btc Details')])
   .then(x=>res.send(x))
   .catch(e=>res.send(e))

})


module.exports=router;