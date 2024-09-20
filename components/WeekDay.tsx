
export default function WeekDay({ dayName, events=[]}) {
  return (

    <div className="flex-grow">

<div className="flex flex-row gap-4">
      <h4 className="w-16 h-8 px-3 py-1 text-sm font-medium tracking-tight text-center bg-white rounded-full md:px-6 md:py-2 md:w-24 md:h-12 md:text-lg text-goodtime-blue2">
        {dayName}
      </h4>
      
      {/* Render the list of events */}
      <div className="flex-col flex-grow gap-4">
        {events.map((eventItem, index) => (
          <a key={index} href={`${eventItem.link}`} className="group">
          <div className="flex flex-row items-start gap-2 md:gap-5">
          <div className="flex flex-col flex-auto items-right">
            <h4 className="flex-auto text-sm font-medium tracking-tight text-left text-white md:text-lg group-hover:text-slate-300 ">
              {eventItem.event || ""} 
            </h4>
            <h5 className="flex-auto tracking-tight text-left text-white font-regular group-hover:text-slate-300 ">
              {eventItem.eventSubtitle || ""} 
            </h5>
            </div>
            <h4 className="text-sm font-medium text-center text-white lg:text-lg group-hover:text-slate-300 ">
              {eventItem.time || ""}
            </h4>
            <h4 className="w-10 text-sm font-medium tracking-tight text-center text-white md:text-lg md:w-14 group-hover:text-slate-300 ">
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
