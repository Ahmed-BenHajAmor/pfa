
import axios from "axios";
export class UsersApiCalls{
    static getUser(setUser, navigate){
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
            navigate("/home")
        });
        

    }

    static takeAttendance(id_etudiant, id_session, date_session, etat, setStudentList){
        const token = localStorage.getItem('token');
        
        
        axios.post('http://localhost:3000/user/take-attendance', JSON.stringify({id_etudiant, id_session, date_session, etat}),{
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`  
        },
        withCredentials: true  
        })
        .then(response => {
            
            setStudentList(studentsList=>{
                return studentsList.map(s=>{
                    if(s.id == id_etudiant){
                        return {...s, attendanceToken: true, etat}
                    }
                    return s
                })
            })
            
            
        
        })
        .catch(err => {
            console.error(err)
        });
        

    }
    
}