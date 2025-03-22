

import axios from "axios";


export class sessionApiCalls {
    static getSeances = async () => {
    try {
       axios.get('http://localhost:3000/session', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération des séances:', error);
      throw error;
    }
  };}