const express=require('express');
const router=express.Router();
const{MongoClient}=require('mongodb');
const DB_url=require('../Db_url')
const jwt=require('jsonwebtoken')


router.post('/login',(req,res)=>{
    console.log(req.body);

    MongoClient.connect(DB_url,(err,client)=>{
        if(err)
        throw err;
        const db=client.db('heroku_m2lkjzfv');
        const userports=db.collection('userports');
        userports.findOne({
            $and:[
                {
                    username:req.body.username
                },
                {
                    password:req.body.password
                }
            ]
        }).then((result)=>{
            console.log(result)
            if(result===null)
            {
                console.log("result is null");
                res.send({
                    status:false,
                    username:null
                })
            }
            else{
              const token =jwt.sign({username:req.body.username},process.env.JWT_SECRET)
              res.cookie('authtoken',token,{httpOnly:true})
              res.send({
                  status:true,
                  username:result.username

              })
            }
        
        })
        
    })

})
module.exports=router;