
import axios from "axios";
export class UsersApiCalls{
    static getUser(setUser){
        const token = localStorage.getItem('token');
        
        axios.get('http://localhost:3000/user', {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`  
        },
        withCredentials: true  
        })
        .then(response => {
            
            setUser(response.data || [])
        
        })
        .catch(err => {
        console.error('Erreur Axios:', err)
        });
        

    }
    
}