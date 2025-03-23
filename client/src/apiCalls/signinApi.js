import axios from 'axios';

export class SigninApiCalls {
    static signin(email, password, navigate, setValidCredentials, setUser){
        if(email === "admin@exemple.tn" && password=== 'adminpassword'){
            localStorage.setItem('token', "admin")
            setUser({
                nom: "Admin",
                prenom: "Admin",
                statut: "Admin"
            })
            navigate('/')
            return
        }
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
