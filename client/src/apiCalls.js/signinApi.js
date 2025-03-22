import axios from 'axios';

export class signinApiCalls {
    static signin(email, password){
        const body = {
            email, password
        }
        axios.post('http://localhost:3000/signin', JSON.stringify(body), {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true  
        }).then(res=>{
            console.log(res);
            

        
        }).catch(err=>{
            console.log(err);
            
        })
    }
}
