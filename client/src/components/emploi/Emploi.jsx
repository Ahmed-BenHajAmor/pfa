
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Emploi.css";
import frLocale from "@fullcalendar/core/locales/fr";
import { EtudiantPopup } from "../EtudiantPopup";
import { EnseignantApi } from "../../apiCalls/enseignantApi";

function Emploi({emploiData}) {
  
  const [popup, setPopup] = useState({
    show: false,
    
  });
  const events = emploiData.map(el=>{
    return {
      extendedProps: {
        id_section: el.id_section,
        id_session: el.id_session
      },
      title: el.nom,
      daysOfWeek: [el.jour], 
      startTime: el.heure_session,
      duration: "01:30"
    }
  })
  
  const [studentList, setStudentList] = useState([]);


  const handleEventClick = (info) => {
    const eventDate = info.event.start;
    const formattedDate = eventDate.toISOString().split('T')[0]
    
    setPopup(popup=>{return{...popup, show: true, id_session: info.event.extendedProps.id_session, date_session: formattedDate}});
    EnseignantApi.getStudentsFromSection(info.event.extendedProps.id_section, setStudentList)
  };

  return (
    <div className="emploi-container">
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        locale={frLocale}
        slotLabelInterval="01:30:00"
        allDaySlot={false}
        initialDate="2025-03-24"
        hiddenDays={[0]}
        headerToolbar={{
          left: "prev today",
          center: "title",
          right: "",
        }}
        buttonText={{ today: 'Cette semaine' }}
        slotMinTime="08:00:00"
        slotMaxTime="18:00:00"
        slotDuration="00:30:00"
        height='auto'
        aspectRatio={1.5}
        events={events}
        eventClick={handleEventClick}
      />
      {popup.show && (
        <EtudiantPopup
          popupInfo={popup}
          studentList={studentList}
          onClose={() => {
            setPopup(popup=>{
              return {...popup, show: false}
            });
          }}
        />
      )}
    </div>
  );
}

export default Emploi;