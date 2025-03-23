import axios from 'axios';

export class JustificationApiCalls {
    static sendJustification(justifData, setShowMsg, setFile, e) {
        
        const token = localStorage.getItem('token');
        const formData = new FormData();
        
        
        formData.append('date_et_heure_de_debut', justifData.date_et_heure_de_debut); 
        formData.append('date_et_heure_de_fin', justifData.date_et_heure_de_fin);   
        if(justifData.id_etudiant == null){
            formData.append('id_enseignant', justifData.id_enseignant);        
        }else{
            formData.append('id_etudiant', justifData.id_etudiant);        
        }
        formData.append('motif', justifData.motif);        
        formData.append('file', justifData.file);               

        return axios.post('http://localhost:3000/justifications', formData, {
            headers: {
                "Content-Type": "multipart/form-data", 
                "Authorization": `Bearer ${token}`  
            },
            withCredentials: true
        })
        .then(res => {
            setShowMsg(obj=> {
            return {missingField: false, justifSent: true}
            })
            setFile(null)
            e.target.reset()
            
            return res.data; 
        })
        .catch(err => {
            console.log(err);
        });
    }
}