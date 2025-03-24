

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

    static getStudentsForSession(data, setStudentList){
      const token = localStorage.getItem('token')      
    
      axios.get(`http://localhost:3000/user/list-student?id_section=${data.id_section}&date_session=${data.date_session}&id_session=${data.id_session}${data.groupe ? `&groupe=${data.groupe}`:''}`, {
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
