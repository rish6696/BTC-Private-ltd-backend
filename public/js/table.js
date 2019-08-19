var $table = $('#table');
    var mydata = 
[
    {"_id":{"$oid":"5d594cd6c2a9ee00171f9eda"},"port":"vishakapatnam","truck":{"accountno":"048404","balance":35702.5,"bilty":25,"cash":4586,"comisiion":256,"dala":256,"diesel":365,"holdername":"usbwje","ifsccode":"hsbshssb","lrnum":"jsbsjsb","ownerph":"9953836464","rate":1750,"security":2563,"total":43753.5,"truckno":"ieebsjsb","weight":25.002},"party":{"adress":"jsbsbsbs","balance":38255.6,"cash":5000,"contact":"7838389193","diesel":125,"loadingcharge":365,"lrnum":"jsbsjsb","partyname":"sjsbsbbsj","rate":1800,"security":1258,"total":45003.6,"weight":25.002},"date":"18/8/2019","time":"13:4","truckSecurity":{"Tds":0,"challancharge":300,"fratecharge":0,"lrnum":"jsbsjsb","materialshortage":0,"reciving":100,"security":2563,"status":false,"tno":"ieebsjsb","topay":0,"weight":0},"partySecurity":{"fratecharges":0,"lrnum":"jsbsjsb","materialshortagecharges":0,"recievingcharge":0,"security":1258,"status":false,"tds":0,"tno":"ieebsjsb","topay":0,"weight":0,"weightdiff":0},"status":false}
,{"_id":{"$oid":"5d59a1f7c290190017662659"},"port":"faridabad","truck":{"accountno":"96","balance":316.00903,"bilty":6,"cash":365,"comisiion":6,"dala":3,"diesel":36,"holdername":"ugdyhc","ifsccode":"887","lrnum":"773","ownerph":"9885890","rate":3,"security":3,"total":735.00903,"truckno":"768","weight":245.003},"party":{"adress":"shsvdjd","balance":8733.108,"cash":23,"contact":"6449464#446","diesel":36,"loadingcharge":15,"lrnum":"773","partyname":"heebbs d","rate":36,"security":13,"total":8820.108,"weight":245.003},"date":"18/8/2019","time":"19:7","truckSecurity":{"Tds":0,"challancharge":300,"fratecharge":0,"lrnum":"773","materialshortage":0,"reciving":100,"security":3,"status":false,"tno":"768","topay":0,"weight":0},"partySecurity":{"fratecharges":0,"lrnum":"773","materialshortagecharges":0,"recievingcharge":0,"security":13,"status":false,"tds":0,"tno":"768","topay":0,"weight":0,"weightdiff":0},"status":false}

];

$(function () {
    $('#table').bootstrapTable({
        data: mydata
    });
});