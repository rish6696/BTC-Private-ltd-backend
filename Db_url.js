const DB_URL='mongodb://heroku_m2lkjzfv:45vnbqra8sh2icliqbpns2tkm5@ds263307.mlab.com:63307/heroku_m2lkjzfv'
module.exports=DB_URL

//username: heroku_m2lkjzfv
//paswword : 45vnbqra8sh2icliqbpns2tkm5

//mongoexport -h ds263307.mlab.com:63307 -d heroku_m2lkjzfv -c bookings --query  '{port:"faridabad"}' -u heroku_m2lkjzfv -p 45vnbqra8sh2icliqbpns2tkm5 -o bookings.json