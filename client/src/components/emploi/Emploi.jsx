import React, { useState } from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // Enables interactivity
import "./Emploi.css"; // Ensure this CSS file exists
import frLocale from '@fullcalendar/core/locales/fr'; 


const currentDate = new Date(); 
function Emploi() {
    const generateWeeklyLessons = () => {
        let events = [];
        let days = [1, 2, 3, 4, 5, 6]; // Monday to Friday (0 = Sunday)
    
        days.forEach(day => {
          let current = new Date();
          // Set to the beginning of the week and adjust for the specific day
          current.setDate(current.getDate() - current.getDay() + day);
          current.setHours(8, 30, 0, 0); // Start at 8:30 AM
    
          let endTime = new Date(current);
          endTime.setHours(17, 0, 0, 0); // End at 5:00 PM
    
          let lessonCount = 1; // To label lessons
    
          // Generate lessons until the end time
          while (current.getTime() + 90 * 60000 <= endTime.getTime()) {
            let lessonStart = new Date(current);
            let lessonEnd = new Date(lessonStart.getTime() + 90 * 60000); // 1 hour 30 minutes
    
            events.push({
              title: `Lesson ${lessonCount}`, // Lesson title
              start: lessonStart.toISOString(),
              end: lessonEnd.toISOString(),
            });
    
            // Add a 15-minute break before the next lesson
            current = new Date(lessonEnd.getTime() + 15 * 60000);
            lessonCount++;
          }
        });
    
        return events;
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
            hiddenDays={[0]} // Hides Sunday
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "",
            }}
            slotMinTime="08:30:00"
            slotMaxTime="17:35:00"
            slotDuration="00:30:00"
            height='auto'
            aspectRatio={1.8}
            events={generateWeeklyLessons()} // Auto-generate lessons
            
          />
        </div>
      );
    }

export default Emploi;
