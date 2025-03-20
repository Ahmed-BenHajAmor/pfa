import axios from 'axios';

export class AdminApiCalls {
  static getJustifications(setJustifiications) {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:3000/justifications', {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`  
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
