const express=require('express');
const router=express.Router();
const{MongoClient}=require('mongodb');
const DB_url="mongodb://heroku_svj3zwsf:rgfjj7agqpcq54ikuv3lghidul@ds143342.mlab.com:43342/heroku_svj3zwsf";




router.post('/',(req,res)=>{
    console.log(req.body);
    // Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACad6292dfef2bd407adde3d665f6724ec';
const authToken = '72da364f3a17e0f0eb386a348b142404';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({from: '+15404183688', body: 'body', to: '7838389193'})
      .then(message => console.log(message.sid));

    

})
module.exports=router;