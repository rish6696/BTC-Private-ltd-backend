const express=require('express');
const router=express.Router();
const{MongoClient}=require('mongodb');
const Nexmo=require('nexmo')
const DB_url="mongodb://heroku_svj3zwsf:rgfjj7agqpcq54ikuv3lghidul@ds143342.mlab.com:43342/heroku_svj3zwsf";

router.post('/',(req,res)=>{
    
    const nexmo = new Nexmo({
      apiKey: 'f556d7f2',
      apiSecret: 'njk1YnSkyKnnJ4qV'
    })
    // nexmo.verify.request({
    //   number: '917838389193',
    //   brand: 'Nexmo',
    //   code_length: '6'
    // }, (err, result) => {
    //   console.log(err ? err : result)
    // });
    nexmo.verify.check({
      request_id: '961bcb51e8074e45a6be7352c99e750b',
      code: '801022'
    }, (err, result) => {
      console.log(err ? err : result)
    });
})
module.exports=router;