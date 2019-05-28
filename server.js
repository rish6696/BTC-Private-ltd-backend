const express=require('express');
const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const PORT=process.env.PORT||3214;
const routes={
    authenticate:require('./routes/authenticate'),
    login:require('./routes/login'),
    booking:require('./routes/booking'),
    fetchbookings:require('./routes/fetchbookings')
}

app.use('/authenticate',routes.authenticate);
app.use('/login',routes.login);
app.use('/booking',routes.booking);
app.use('/fetchbookings');
app.get('/',(req,res)=>{
    res.send("hello");
})

app.get("/test",(req,res)=>{
    res.send("hello");
})

app.listen(PORT,()=>{
    console.log("server started");
})