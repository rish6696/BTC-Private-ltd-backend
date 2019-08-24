const express=require('express');
const router=express.Router();
const{MongoClient}=require('mongodb');
const DB_url=require('../Db_url')
//mongodb://heroku_svj3zwsf:rgfjj7agqpcq54ikuv3lghidul@ds143342.mlab.com:43342/heroku_svj3zwsf

router.post('/getDetails',(req,res)=>{
    console.log(req.body)
    

    const {port,details}=req.body
   
    const fromDate=(new Date(req.body.fromDate)).toISOString()
    const toDate=(new Date(req.body.toDate)).toISOString()
    let project={date:1,port:1}
    let query={  date:{$lte:toDate,$gte:fromDate} } 
    if(port){
        query['port']=port
    }
    if(details=='truckSecurity'){
        query['truckSecurity.status']=true
        project['truckAdvance.truckno']=1;
        project['partyAdvance.partyname']=1
    }
    if(details=='partySecurity'){
        query['partySecurity.status']=true
        project['truckAdvance.truckno']=1;
        project['partyAdvance.partyname']=1
    }
    if(details=='truckAdvance'){
        project['partyAdvance.partyname']=1
    }
    if(details=='partyAdvance'){
        project['truckAdvance.truckno']=1;
    }
    
    project[details]=1
    MongoClient.connect(DB_url,{useNewUrlParser:true},(err,client)=>{
        if(err)
        throw err;
        const db=client.db('heroku_m2lkjzfv');
        const bookings=db.collection('bookings');
        bookings.find(query).project(project).toArray()
        .then(x=>res.render(details,{data:JSON.stringify(x)}))
        .catch(x=>console.log(x))
        client.close()
       
       
    })

})
module.exports=router;