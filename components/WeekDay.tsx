
export default function WeekDay({ dayName, events=[]}) {
  return (

    <div className="flex-grow">

<div className="flex flex-row gap-4">
      <h4 className="w-24 h-12 px-6 py-2 text-lg font-medium tracking-tight text-center bg-white rounded-full text-goodtime-blue2">
        {dayName}
      </h4>
      
      {/* Render the list of events */}
      <div className="flex-col flex-grow gap-4">
        {events.map((eventItem, index) => (
          <a href={`${eventItem.link}`} className="group">
          <div key={index} className="flex flex-row items-start gap-5">
          <div className="flex flex-col flex-auto items-right">
            <h4 className="flex-auto text-lg font-medium tracking-tight text-left text-white group-hover:text-slate-300 ">
              {eventItem.event || ""} 
            </h4>
            <h5 className="flex-auto tracking-tight text-left text-white font-regular group-hover:text-slate-300 ">
              {eventItem.eventSubtitle || ""} 
            </h5>
            </div>
            <h4 className="text-lg font-medium text-center text-white group-hover:text-slate-300 ">
              {eventItem.time || ""}
            </h4>
            <h4 className="text-lg font-medium tracking-tight text-center text-white w-14 group-hover:text-slate-300 ">
              {eventItem.distance || "-"}
            </h4>
          </div>


      </a>
        ))}
      </div>
      </div>
      <div className="mt-4 border-t border-white"></div>
    </div>
  );
}
