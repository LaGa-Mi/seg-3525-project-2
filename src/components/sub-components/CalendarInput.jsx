// CalendarInput.js

import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const CalendarInput = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const datePickerRef = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleGoToToday = () => {
    const today = new Date();
    setSelectedDate(today);
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);  // Open the date picker to show the updated date
    }
  };

  return (
    <>
    <h2 className="h4">Selected Date:</h2>
    <p className="h5">{selectedDate.toDateString()}</p>
    <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        inline
        ref={datePickerRef}
        filterDate={(date) => !(date.getDay() === 0 || date.getDay() === 6)}
    />
    <Button className="mt-2" variant="dark" onClick={handleGoToToday}>Today</Button>
    </>
  );
};

export default CalendarInput;
