import axios from 'axios';

export class JustificationApiCalls {
    static sendJustification(file) {
        const token = localStorage.getItem('token');
        const formData = new FormData();
        
        formData.append('date_et_heure_de_debut', new Date()); 
        formData.append('date_et_heure_de_fin', new Date());   
        formData.append('id_enseignant', 2);        
        formData.append('id_etudiant', null);          
        formData.append('motif', 'hh');        
        formData.append('file', file);               

        return axios.post('http://localhost:3000/justifications', formData, {
            headers: {
                "Content-Type": "multipart/form-data", // Required for file uploads
                "Authorization": `Bearer ${token}`  
            },
            withCredentials: true
        })
        .then(res => {
            console.log(res);
            return res.data; // Return the response data if needed
        })
        .catch(err => {
            console.log(err);
            throw err; // Re-throw the error for handling upstream
        });
    }
}