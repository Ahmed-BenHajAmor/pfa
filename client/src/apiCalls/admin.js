import axios from 'axios';

export class AdminApiCalls {
  static getJustifications(setJustifiications) {
    axios.get('http://localhost:3000/justifications', {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true  
    })
    .then(response => {
      
      setJustifiications(response.data || [])
      
    })
    .catch(err => {
      console.error('Erreur Axios:', err)
    });
    

  }

  static handelJustificationVerification(id_justification, state, setPopUpInfo){
    axios.patch("http://localhost:3000/justifications/change-state", JSON.stringify({id_justification, state}),{
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true
    }).then((res)=>{
      console.log(res);
      setPopUpInfo(info => {return {...info, show: !info.show}})
    }).catch(err=>{
      console.log(err);
    })
    
  }
}
