import axios from 'axios';

export class JustificationApiCalls {
    static sendJustification(justifData) {
        const token = localStorage.getItem('token');
        const formData = new FormData();
        justifData.keys.forEach(key=>{
            formData.append(key, justifData[key]);
        })
        formData.append('date_et_heure_de_debut', new Date()); 
        formData.append('date_et_heure_de_fin', new Date());   
        formData.append('id_enseignant', 2);        
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
        });
    }
}