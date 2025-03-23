

import axios from "axios";


export class EtudiantApis {

    static getData(setEtudiantStats) {
      const token = localStorage.getItem('token')
      
    
        axios.get(`http://localhost:3000/student-stats/attendance-ratio`, {
          headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`  
          },
        }).then(res=>{
            setEtudiantStats(res.data)
          
          
        }).catch(err=>{
          console.log(err);
          
        });
   
        
    }

}
