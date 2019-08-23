
$(()=>{
    $('#form').submit((event)=>{
        event.preventDefault()
        const username=$('#username').val()
        const password=$('#password').val()
        axios({
            method:'post',
            url:'/dashboardAuth/login',
            data:{ username,password}
        }).then(x=>{
            const data=x.data
            if(!data.status){
                return alert('Invalid username or password')
            }
            const { authtoken }=x.headers
            window.location='https://btctransportprivateltd.herokuapp.com/'

        })
        
    })
})