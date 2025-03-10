export class AdminApiCalls{
    static getJustifications(){
        
      
      return [
            {
              _id: 1,
              cin: "12345678",
              name: "Ahmed Ben Haj Amor",
              section: "GLSI",
              status: 'etudiant',
              motif: "Rendez-vous important",
              group: 3,
              submissionDate: "12 Mars 2024, 08:00",
              startDateTime: "12 Mars 2024, 08:00",
              endDateTime: "13 Mars 2024, 12:00",
              attachments: "Télécharger"
            },
            {
              _id: 2,
              cin: "12345678",
              name: "Ahmed Ben Haj Amor",
              section: "GLSI",
              status: 'professor',
              motif: "Rendez-vous important",
              group: 3,
              submissionDate: "12 Mars 2024, 08:00",
              startDateTime: "12 Mars 2024, 08:00",
              endDateTime: "13 Mars 2024, 12:00",
              attachments: "Télécharger"
            }
          ]
    }
}