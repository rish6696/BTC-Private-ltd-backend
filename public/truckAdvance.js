
$(()=>{

    console.log(data)
    data.forEach((x,i) => {
        let date=x.date.substr(0,10)
        date= date.replace(new RegExp("-", "g"), ".");
        const imagesrc=x.status?'/images/success.png':'/images/error.png'
        $('#body').append(
               $('<tr>')
               .append($('<td>').text(i+1))
            //    .append($('<td>').append($('<img>').attr('src',imagesrc)))
            //    .append($('<td>').text(x.port))
               .append($('<td>').text(date))
               .append($('<td>').text(x.partyAdvance.partyname))
               
               .append($('<td>').text(x.truckAdvance.truckno))
               .append($('<td>').text(x.truckAdvance.lrnum))
               .append($('<td>').text(x.truckAdvance.challanNo))
               .append($('<td>').text(x.partyAdvance.loadadress))
               .append($('<td>').text(x.partyAdvance.unloadadress))
               .append($('<td>').text(x.truckAdvance.rcName))
               .append($('<td>').text(x.truckAdvance.ownerph))
               .append($('<td>').text(x.truckAdvance.weight))
               .append($('<td>').text(x.truckAdvance.rate))
               .append($('<td>').text(x.truckAdvance.total))
               .append($('<td>').text(x.truckAdvance.cash))
               .append($('<td>').text(x.truckAdvance.diesel))
               .append($('<td>').text(x.truckAdvance.comisiion))
               .append($('<td>').text(x.truckAdvance.bilty))
               .append($('<td>').text(x.truckAdvance.dala))
               .append($('<td>').text(x.truckAdvance.security))
               .append($('<td>').text(x.truckAdvance.balance))
               .append($('<td>').text(x.truckAdvance.accountno))
               .append($('<td>').text(x.truckAdvance.holdername))
               .append($('<td>').text(x.truckAdvance.ifsccode))
                
            )
        
    });

    $('.page-link').click(()=>{
          $.post('/dashboard/getdetails',{
              
          })
    })


})
