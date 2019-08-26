
$(()=>{
   console.log(data)
    data.forEach((x,i) => {
        let date=x.date.substr(0,10)
        date= date.replace(new RegExp("-", "g"), ".");
        const imagesrc=x.status?'/images/success.png':'/images/error.png'
        $('#body').append(
               $('<tr>')
               .append($('<td>').text(i+1))
               .append($('<td>').append($('<img>').attr('src',imagesrc)))
               .append($('<td>').text(x.port))
               .append($('<td>').text(x.partyAdvance.partyname))
               .append($('<td>').text(date))
               .append($('<td>').text(x.truckAdvance.truckno))
               .append($('<td>').text(x.partyAdvance.lrnum))
               .append($('<td>').text(x.partyAdvance.loadadress))
               .append($('<td>').text(x.partyAdvance.unloadadress))
               .append($('<td>').text(x.partyAdvance.contact))
               .append($('<td>').text(x.partyAdvance.weight))
               .append($('<td>').text(x.partyAdvance.rate))
               .append($('<td>').text(x.partyAdvance.total))
               .append($('<td>').text(x.partyAdvance.cash))
               .append($('<td>').text(x.partyAdvance.security))
               .append($('<td>').text(x.partyAdvance.loadingcharge))
               .append($('<td>').text(x.partyAdvance.diesel))
               .append($('<td>').text(x.partyAdvance.balance))

               
            )
       
           
               
        
    });
})



// .append($('<td>').text(x.partyAdvance.security)
// .append($('<td>').text(x.partyAdvance.loadingcharge))
// .append($('<td>').text(x.partyAdvance.diesel)
// .append($('<td>').text(x.partyAdvance.total)
// .append($('<td>').text(x.partyAdvance.balance))
// .append($('<td>').text(x.partyAdvance.comisiion))
// .append($('<td>').text(x.partyAdvance.bilty))
// .append($('<td>').text(x.partyAdvance.accountno))
// .append($('<td>').text(x.partyAdvance.holdername))
// .append($('<td>').text(x.partyAdvance.ifsccode))
// .append($('<td>').text(x.partyAdvance.total))
// .append($('<td>').text(x.partyAdvance.balance)) 