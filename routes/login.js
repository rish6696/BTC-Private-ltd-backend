const express=require('express');
const router=express.Router();
const{MongoClient}=require('mongodb');
const DB_url="mongodb://heroku_svj3zwsf:rgfjj7agqpcq54ikuv3lghidul@ds143342.mlab.com:43342/heroku_svj3zwsf";


router.post('/',(req,res)=>{
    console.log(req.body);

    MongoClient.connect(DB_url,(err,client)=>{
        const db=client.db('heroku_svj3zwsf');
        const userports=db.collection('userports');
        userports.findOne({
            $and:[
                {
                    name:req.body.username
                },
                {
                    password:req.body.password
                }
            ]
        }).then((result)=>{
            if(result===null)
            {
                console.log("result is null");
                res.send({
                    status:false,
                    name:null
                })
            }
            else{
                console.log("result is not null")
               res.send({
                   status:true,
                   name:result.name
               })
            }
        
        })
        
    })

})
module.exports=router;