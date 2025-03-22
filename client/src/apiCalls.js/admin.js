import axios from 'axios';

export class AdminApiCalls {
  static getJustifications(setJustifiications) {
    // const token = localStorage.getItem('token'); 
    axios.get('http://localhost:3000/justifications', {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzQyNDU2NzU1LCJleHAiOjE3NDI0NjAzNTV9.c-F0F6ljXPmgqL6ee8fxHBXA2wlfrN675NintjnjL7o`  
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
}
