

import axios from "axios";


export class EnseignantApi {

    static getSessions(userId, setEmploiData) {
      const token = localStorage.getItem('token')
      
    
        axios.get(`http://localhost:3000/session?id_enseignant=${userId}`, {
          headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`  
          },
        }).then(res=>{
          setEmploiData(res.data)
          
        }).catch(err=>{
          console.log(err);
          
        });
   
        
    }

    static getStudentsForSession(id_section, setStudentList, date_session, id_session){
      const token = localStorage.getItem('token')      
    
      axios.get(`http://localhost:3000/user/list-student?id_section=${id_section}&date_session=${date_session}&id_session=${id_session}`, {
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`  
        },
      
      }).then(res=>{
        
        setStudentList(res.data);
        
        
      }).catch(err=>{
        console.log(err);
        
      });
    }
}
