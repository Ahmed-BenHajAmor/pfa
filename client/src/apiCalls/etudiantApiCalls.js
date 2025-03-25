

import axios from "axios";


export class EtudiantApis {

    static getAttendanceStats(setEtudiantStats) {
      const token = localStorage.getItem('token')
      
    
        axios.get(`http://localhost:3000/student-stats/attendance-ratio`, {
          headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`  
          },
        }).then(res=>{
            setEtudiantStats(stats=>{
              return {...stats,
              ...res.data}
            })
          
          
        }).catch(err=>{
          console.log(err);
          
        });
   
        
    }


    static getJustificationImpact(setEtudiantStats) {
      const token = localStorage.getItem('token')
      
    
        axios.get(`http://localhost:3000/student-stats/justification-impact`, {
          headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`  
          },
        }).then(res=>{
          setEtudiantStats(stats=>{
            return {...stats,
            ...res.data}
          })
          
          
        }).catch(err=>{
          console.log(err);
          
        });
   
        
    }


    static getConsistency(setEtudiantStats) {
      const token = localStorage.getItem('token')
      
    
      axios.get(`http://localhost:3000/student-stats/month-consistency`, {
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`  
        },
      }).then(res=>{
        console.log(res.data);
        
        setEtudiantStats(stats=>{
          return {...stats,
          ...res.data}
        })
        
        
        
      }).catch(err=>{
        console.log(err);
        
      });
   
        
    }

    static getEliminationCount(setEtudiantElim) {
      const token = localStorage.getItem('token')

      axios.get("http://localhost:3000/student-stats/elimination-count", {
          headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token} `
          },
        }).then(res=>{
      
          setEtudiantElim(res.data);
    
         
          
        }).catch(err=>{
          console.log(err);
          
        });
   
        }


}
