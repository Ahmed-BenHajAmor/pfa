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
  const [selectedEvent, setSelectedEvent] = useState(null);
  const handleEventClick = (info) => {
    setSelectedEvent(info.event); // Store event details
    setShowPopup(true); // Show popup
  };

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
            
            events={[
              {
                title: "GLSI",
                startTime: "10:45:00",
                endTime: "12:00:00", 
                daysOfWeek: [1], 
              }
            ]} 
            eventClick={handleEventClick}
            />
            {showPopup && (
              <EtudiantPopup
                event={selectedEvent}
                onClose={() => setShowPopup(false)}
              />
            )}
          </div>
        );
      }

export default Emploi;
