import React, { useState } from 'react';


const Calendar = () => {

    const date = new Date();
    const [currYear, setCurrYear] = useState(date.getFullYear());
    const [currMonth, setCurrMonth] = useState(date.getMonth());
  
    const months = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
  
    const renderCalendar = () => {
      const firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
      const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
      const lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
      const lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
      const liTag = [];
  
      for (let i = firstDayofMonth; i > 0; i--) {
        liTag.push(<li key={`prev-${i}`} className="inactive">{lastDateofLastMonth - i + 1}</li>);
      }
  
      for (let i = 1; i <= lastDateofMonth; i++) {
        const isToday = i === date.getDate() && currMonth === date.getMonth() && currYear === date.getFullYear();
        liTag.push(<li key={`current-${i}`} className={isToday ? "active" : ""}>{i}</li>);
      }
  
      for (let i = lastDayofMonth; i < 6; i++) {
        liTag.push(<li key={`next-${i}`} className="inactive">{i - lastDayofMonth + 1}</li>);
      }
  
      return liTag;
    };
  
    const handleIconClick = (isPrevious) => {
      let newYear = currYear;
      let newMonth = currMonth;
    
      if (isPrevious) {
        newMonth -= 1;
        if (newMonth < 0) {
          newMonth = 11;
          newYear -= 1;
        }
      } else {
        newMonth += 1;
        if (newMonth > 11) {
          newMonth = 0;
          newYear += 1;
        }
      }
    
      setCurrYear(newYear);
      setCurrMonth(newMonth);
    };


    return (
        <div className='calender_container'>
            <div className="wrapper">
                <div className="calendar_header">

                    <div id="prev" className="iconBox" onClick={() => handleIconClick(true)}>
                        <img src="/Icon/back.png" alt="prev" />
                    </div>
                    <p className="current-date">{`${months[currMonth]} ${currYear}`}</p>
                    <div id="next" className="iconBox" onClick={() => handleIconClick(false)}>
                        <img src="/Icon/next.png" alt="next" />
                    </div>

                </div>
                <div className="calendar_box">
                    <ul className="weeks">
                        <li>Sun</li>
                        <li>Mon</li>
                        <li>Tue</li>
                        <li>Wed</li>
                        <li>Thu</li>
                        <li>Fri</li>
                        <li>Sat</li>
                    </ul>
                    <ul className="days">
                        {renderCalendar()}
                    </ul>
                </div>
            </div>
        </div>
    );

}
export default Calendar