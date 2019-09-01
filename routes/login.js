const express=require('express');
const router=express.Router();
const{MongoClient}=require('mongodb');
const DB_url=require('../Db_url')


router.post('/',(req,res)=>{
    console.log(req.body);

    MongoClient.connect(DB_url,(err,client)=>{
        if(err)
        throw err;
        const db=client.db(process.env.DB_USER);
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
                console.log("result is not null")
               res.send({
                   status:true,
                   username:result.username
               })
            }
        
        })
        
    })

})
module.exports=router;