import React, { useState } from "react";

function CalendarHeatmap() {
  const [glowingDays, setGlowingDays] = useState(new Set());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const allMonthsData = months.map((_, monthIndex) => {
    const daysInMonth = new Date(2022, monthIndex + 1, 0).getDate();
    return Array(daysInMonth)
      .fill()
      .map((_, i) => ({
        date: new Date(2022, monthIndex, i + 1),
        count: Math.floor(Math.random() * 200),
        id: `${monthIndex}-${i}`,
      }));
  });

  const handleDayHover = (count, monthIndex, dayIndex) => {
    const threshold = 10;
    const newGlowingDays = new Set();

    allMonthsData.forEach((month, mIndex) => {
      month.forEach((day, dIndex) => {
        if (Math.abs(day.count - count) <= threshold) {
          newGlowingDays.add(`${mIndex}-${dIndex}`);
        }
      });
    });

    setGlowingDays(newGlowingDays);
  };

  const handleDayLeave = () => {
    setGlowingDays(new Set());
  };

  return (
    <div className="calendar-container">
      {months.map((monthName, monthIndex) => (
        <div key={monthName} className="month-section">
          <h3>{monthName}</h3>
          <div className="month-heatmap">
            {allMonthsData[monthIndex].map((day, index) => {
              const opacity = day.count / 200;
              return (
                <div
                  key={`${monthIndex}-${index}`}
                  className={`day-square ${
                    glowingDays.has(`${monthIndex}-${index}`) ? "glowing" : ""
                  }`}
                  style={{
                    backgroundColor: `rgba(0, 128, 0, ${opacity})`,
                    width: "10px",
                    height: "10px",
                    margin: "1px",
                  }}
                  onMouseEnter={() =>
                    handleDayHover(day.count, monthIndex, index)
                  }
                  onMouseLeave={handleDayLeave}
                  title={`${day.date.toDateString()}: ${day.count} plays`}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CalendarHeatmap;
