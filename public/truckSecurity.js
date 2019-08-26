
$(()=>{
    console.log(data)
    data.forEach((x,i) => {
        let date=x.truckSecurity.date.substr(0,10)
        date= date.replace(new RegExp("-", "g"), ".");
        let remarks=x.truckSecurity.remarks
        let acountno=x.truckSecurity.aacounum
        let holdername=x.truckSecurity.holdername
        let ifsc=x.truckSecurity.ifsc
        if(!remarks){
            remarks=""
        }
        if(!acountno){
            acountno=""
        }
        if(!holdername){
            holdername=""
        }
        if(!ifsc){
            ifsc=""
        }
        $('#body').append(
               $('<tr>')
               .append($('<td>').text(i+1))
               .append($('<td>').text(x.port))
               .append($('<td>').text(x.partyAdvance.partyname))
               .append($('<td>').text(date))
               .append($('<td>').text(x.truckAdvance.truckno))
               .append($('<td>').text(x.truckSecurity.lrnum))
               .append($('<td>').text(x.truckSecurity.weight))
               .append($('<td>').text(x.truckSecurity.Tds))
               .append($('<td>').text(x.truckSecurity.security))
               .append($('<td>').text(x.truckSecurity.materialshortage))
               .append($('<td>').text(x.truckSecurity.fratecharge))
               .append($('<td>').text(x.truckSecurity.challancharge))
               .append($('<td>').text(300))
               .append($('<td>').text(x.truckSecurity.topay))
               .append($('<td>').text(acountno))
               .append($('<td>').text(holdername))
               .append($('<td>').text(ifsc))
               .append($('<td>').text(remarks))
               
        
               
            )
        
    });
})
