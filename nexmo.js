const Nexmo=require('nexmo')
const nexmo = new Nexmo({
     apiKey: 'f556d7f2',
     apiSecret: 'njk1YnSkyKnnJ4qV'
})
const util = require('util');
  
const sendSms = util.promisify(
nexmo.message.sendSms.bind(nexmo.message))

const sendMessage=(from,to,message)=>{
    return sendSms(from,to,message)
}
module.exports=sendMessage