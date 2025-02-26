import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Emploi.css"; 
import frLocale from "@fullcalendar/core/locales/fr";
import {EtudiantPopup} from "../EtudiantPopup"; // Import your popup component


const currentDate = new Date(); 
function Emploi() {
  const [showPopup, setShowPopup] = useState(false);
  const handleEventClick = (info) => {
    console.log(info);
    
    setShowPopup(true)
  };
  const events = [
    {
      title: "GLSI",
      daysOfWeek: [1], // Monday
      startTime: "10:45:00",
      endTime: "12:00:00",
      
      
    },
    {
      title: "Maths",
      daysOfWeek: [3], // Wednesday
      startTime: "13:00:00",
      endTime: "14:30:00",
     
    },
  ];

      return (
        <div className="emploi-container">
          <FullCalendar
            plugins={[timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek" // Shows a weekly timetable
            locale={frLocale}
            slotLabelInterval="01:30:00"
            allDaySlot={false}
            initialDate={currentDate}
            hiddenDays={[0]} // Pour enlever le Dimanche
            headerToolbar={{
              left: "prev today",
              center: "title",
              right: "", }}

            buttonText={{
              today: 'Cette semaine'}}

            slotMinTime="08:30:00"
            slotMaxTime="17:35:00"
            slotDuration="00:30:00"
            height='auto'
            aspectRatio={1.5}
            events={events}
            eventClick={handleEventClick}
            />
            {showPopup && (
              <EtudiantPopup  onClose={() => setShowPopup(false)}
              />
            )}
          </div>
        );
      }

export default Emploi;
