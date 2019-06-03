const express=require('express');
const router=express.Router();
const{MongoClient}=require('mongodb');
const DB_url="mongodb://heroku_svj3zwsf:rgfjj7agqpcq54ikuv3lghidul@ds143342.mlab.com:43342/heroku_svj3zwsf";




router.post('/',(req,res)=>{
    console.log(req.body);
    const Nexmo = require('nexmo');
    const nexmo = new Nexmo({
      apiKey: 'f556d7f2',
      apiSecret: 'njk1YnSkyKnnJ4qV'
    })
    
    const from = 'Nexmo'
    const to = '917838389193'
    const text = `Hello 
    from nexmo`;
    
    nexmo.message.sendSms(from, to, text,(err,response)=>{
        if(err)
        throw err;
        res.send(response);
    })

      

    

})
module.exports=router;