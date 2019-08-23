const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config()
const jwt=require('jsonwebtoken')
const cookieParser=require('cookie-parser');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser())


app.set('view engine','hbs')

const PORT=process.env.PORT||3214;
const routes={
    authenticate:require('./routes/authenticate'),
    login:require('./routes/login'),
    booking:require('./routes/booking'),
    fetchallports:require('./routes/fetchallports'),
    fetchbookingbyname:require('./routes/fetchbooking'),
    sms:require('./routes/sms'),
    update:require('./routes/update'),
    dashboard:require('./routes/dashboard'),
    dashboardAuth:require('./routes/dashboardAuth')
}

app.use('/authenticate',routes.authenticate);
app.use('/login',routes.login);
app.use('/booking',routes.booking);
app.use('/fetchallports',routes.fetchallports);
app.use('/fetchbookings',routes.fetchbookingbyname)
app.use('/sms',routes.sms);
app.use('/update',routes.update);
app.use('/dashboard',validator,routes.dashboard)
app.use('/dashboardAuth',routes.dashboardAuth)
app.use('/',express.static('public'))

app.use('/',validator,(req,res)=>{
    res.render('home')
})

function validator(req,res,next){

    const token=req.cookies.authtoken;
    if(!token){
        return res.render('login')
    }
    try {
        const payload=jwt.verify(token,process.env.JWT_SECRET)
        console.log(payload)
        if(!payload){
            return res.render('login')
        }
        req.user=payload
    } catch (error) {
        return res.render('login')
    }
    next()
}






app.listen(PORT,()=>{
    console.log("server started");
})

