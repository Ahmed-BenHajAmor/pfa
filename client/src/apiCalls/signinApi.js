import axios from 'axios';

export class SigninApiCalls {
    static signin(email, password, navigate, setValidCredentials, setUser){
        const body = {
            email, password
        }
        
        axios.post('http://localhost:3000/signin', JSON.stringify(body), {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true  
        }).then(res=>{
            localStorage.setItem('token', res.data.token)
            setUser(res.data.user)
            navigate('/')

        
        }).catch(err=>{
            console.log(err);
            setValidCredentials(false)
            
        })
    }

    static logout(navigate){
        
        localStorage.removeItem('token')
        navigate('/signin')
    }
}
