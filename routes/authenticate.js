const express=require('express');
const router=express.Router();
const{MongoClient}=require('mongodb');
const DB_url=require('../Db_url')
//mongodb://heroku_svj3zwsf:rgfjj7agqpcq54ikuv3lghidul@ds143342.mlab.com:43342/heroku_svj3zwsf

router.post('/adduserports',(req,res)=>{
    console.log(req.body);

    MongoClient.connect(DB_url,(err,client)=>{
        if(err)
        throw err;
        const db=client.db(process.env.DB_USER);
        const userports=db.collection('userports');
        userports.insertOne({
            username:req.body.username,
            password:req.body.password

        }).then((result)=>{
            res.send(result);
        }).catch((err)=>{
            res.send(err);
        })
    })

})
module.exports=router;