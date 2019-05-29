const express=require('express');
const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const PORT=process.env.PORT||3214;
const routes={
    authenticate:require('./routes/authenticate'),
    login:require('./routes/login'),
    booking:require('./routes/booking'),
    fetchallports:require('./routes/fetchallports'),
    fetchbookingbyname:require('./routes/fetchbooking'),
    sms:require('./routes/sms')
}

app.use('/authenticate',routes.authenticate);
app.use('/login',routes.login);
app.use('/booking',routes.booking);
app.use('/fetchallports',routes.fetchallports);
app.use('/fetchbookings',routes.fetchbookingbyname)
app.use('/sms',routes.sms);
app.get('/',(req,res)=>{
    res.send("hello");
})

app.get("/test",(req,res)=>{
    res.send("hello");
})

app.listen(PORT,()=>{
    console.log("server started");
})

console.log(new Date().getDate());