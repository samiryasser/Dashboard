import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import FullCalendar from "@fullcalendar/react";
export const Calendar = () => {
  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      dateClick={handleDateClick}
      initialView="dayGridMonth"
      eventContent={renderEventContent}
      weekends={true}
      events={[
        { title: "event 1", date: "2024-09-23" },
        { title: "event 2", date: "2024-09-25" },
      ]}
    />
  );
  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }
};
