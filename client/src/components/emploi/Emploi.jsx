// client/src/Emploi.js
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Emploi.css";
import frLocale from "@fullcalendar/core/locales/fr";
import { EtudiantPopup } from "../EtudiantPopup";
import {seanceApiCalls}  from "D:/lcs 2/PFA/client/src/apiCalls.js/seanceApi.js"; // Importez la fonction

function Emploi() {
  const [showPopup, setShowPopup] = useState(false);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchSeances = async () => {
      try {
        const data = await seanceApiCalls.getSeances(); // Utilisez la fonction centralisée
        console.log('Données reçues:', data);
        setEvents(data);
      } catch (error) {
        console.error('Erreur lors du chargement des séances:', error);
      }
    };
    fetchSeances();
  }, []);

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    setShowPopup(true);
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
      {showPopup && (
        <EtudiantPopup
          event={selectedEvent}
          onClose={() => {
            setShowPopup(false);
            setSelectedEvent(null);
          }}
        />
      )}
    </div>
  );
}

export default Emploi;