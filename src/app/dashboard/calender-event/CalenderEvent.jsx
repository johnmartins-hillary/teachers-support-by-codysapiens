"use client"

import React, { useState } from 'react'
import PageWrapper from './../../Components/Reusables/Wrapers/PageWrappper';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const [events, setEvents] = useState([]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('Enter event title:');
    if (title) {
      const newEvent = {
        start,
        end,
        title,
      };
      setEvents([...events, newEvent]);
    }
  };

  return (
    <PageWrapper>
    <div className="p-8 text-gray-500">
      <h2 className="text-2xl font-bold mb-4">Teacher Calendar</h2>
      <Calendar
       localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelect}
        style={{ height: 500 }}
        views={['month', 'week', 'day']}
        step={60}
        showMultiDayTimes
        defaultDate={new Date()}
        components={{
          toolbar: CustomToolbar
        }}
      />
    </div>
    </PageWrapper>
  );
};


// CustomToolbar component for customizing calendar header
const CustomToolbar = props => (
  <div className="flex justify-between items-center mb-4">
    <div className="flex items-center">
      <button onClick={() => props.onNavigate('TODAY')} className="mr-2 px-3 py-1 bg-purple-500 text-white rounded-md hover:bg-purple-600">Today</button>
      <button onClick={() => props.onNavigate('PREV')} className="mr-2 px-3 py-1 bg-purple-500 text-white rounded-md hover:bg-purple-600">Previous</button>
      <button onClick={() => props.onNavigate('NEXT')} className="mr-2 px-3 py-1 bg-purple-500 text-white rounded-md hover:bg-purple-600">Next</button>
    </div>
    <div>
      <h3 className="text-xl font-bold">{props.label}</h3>
    </div>
    <div className="flex items-center">
      <button onClick={() => props.onView('month')} className="mr-2 px-3 py-1 bg-purple-500 text-white rounded-md hover:bg-purple-600">Month</button>
      <button onClick={() => props.onView('week')} className="mr-2 px-3 py-1 bg-purple-500 text-white rounded-md hover:bg-purple-600">Week</button>
      <button onClick={() => props.onView('day')} className="mr-2 px-3 py-1 bg-purple-500 text-white rounded-md hover:bg-purple-600">Day</button>
    </div>
  </div>
);


export default CalendarPage;
