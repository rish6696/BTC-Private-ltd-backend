const dotenv=require('dotenv')
dotenv.config();
const DB_URL=process.env.MONGODB_URI 
module.exports=DB_URL

//username: heroku_m2lkjzfv
//paswword : 45vnbqra8sh2icliqbpns2tkm5
//mongoexport -h ds263307.mlab.com:63307 -d heroku_m2lkjzfv -c bookings --query  '{port:"faridabad",date:{$gte:{$date:"2019-08-18T00:00:00.000Z"},$lte:{$date:"2019-08-20T00:00:00.000Z"}}}' -u heroku_m2lkjzfv -p 45vnbqra8sh2icliqbpns2tkm5 -o bookings.json
//if only port 
//-- q {port:"faridabad"}

//port with  after date
//-- q {port:"faridabad",date:{$gte:{$date:"2019-08-20T00:00:00.000Z"}}}

//port with before date 
//-- q {port:"faridabad",date:{$lte:{$date:"2019-08-20T00:00:00.000Z"}}}

//port with after date and before date
//-- q {port:"faridabad",date:{$gte:{$date:"2019-08-18T00:00:00.000Z"},$lte:{$date:"2019-08-20T00:00:00.000Z"}}}
