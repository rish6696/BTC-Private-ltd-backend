
$(()=>{
    $('#form').submit(x=>{
        const fromDate=new Date($('#fromDate').val())
        const toDate=new Date($('#toDate').val())
        if(fromDate>toDate){
            x.preventDefault()
            alert('From date cannot be less than to Date')
            $('#fromDate').focus()
        }   
    })

    $('#truck').submit(x=>{
        const fromDate=new Date($('#tfromDate').val())
        const toDate=new Date($('#ttoDate').val())
        if(fromDate>toDate){
            x.preventDefault()
            alert('From date cannot be less than to Date')
            $('#tfromDate').focus()
        }   
    })
})


