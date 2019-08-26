
$(()=>{
   console.log(data)
    data.forEach(x => {
        let date=x.partySecurity.date.substr(0,10)
        date= date.replace(new RegExp("-", "g"), ".");
        $('#body').append(
               $('<tr>')
               .append($('<td>').text(x.port))

               .append($('<td>').text(x.partyAdvance.partyname))
               .append($('<td>').text(date))
               .append($('<td>').text(x.truckAdvance.truckno))
               .append($('<td>').text(x.partySecurity.lrnum))
               .append($('<td>').text(x.partySecurity.weight))
               .append($('<td>').text(x.partySecurity.tds))
               .append($('<td>').text(x.partySecurity.security))
               .append($('<td>').text(x.partySecurity.materialshortagecharges))
               .append($('<td>').text(x.partySecurity.fratecharges))
               .append($('<td>').text(x.partySecurity.recievingcharge))
               .append($('<td>').text(x.partySecurity.topay))
            

               
            )
       
           
               
        
    });
})
