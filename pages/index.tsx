import { Suspense } from 'react';

import Link from 'next/link';
import Container from '../components/Container';
import ImageCenter from '../components/ImageCenter';

import WeekDay from 'components/WeekDay';

// Function to get the date of the current week's Monday
function getMondayDate() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const diffToMonday = (dayOfWeek + 6) % 7; // Calculate the difference to Monday
  const monday = new Date(today.setDate(today.getDate() - diffToMonday)); // Set the date to Monday
  const day = String(monday.getDate()).padStart(2, '0'); // Get the day (DD)
  const month = String(monday.getMonth() + 1).padStart(2, '0'); // Get the month (MM)
  return `${day}/${month}`; // Format as DD/MM
}


export default function Home() {
  const mondayDate = getMondayDate(); 
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Container>
        <div className="flex flex-col items-start justify-center max-w-2xl pb-16 mx-auto border-gray-200 dark:border-gray-700">
          <div className="flex flex-col-reverse items-start sm:flex-row">
            <div className="flex flex-col">
              <ImageCenter
                alt={`Good Time Running Club`}
                src={`/logo-light.svg`}
                width={2078 / 2}
                height={697 / 2}
                priority={true}
              />
              <h2 className="my-8 mb-16 tracking-tight text-center text-white text-l md:text-xl">
                ALL INCLUSIVE, ALL ABILITIES, ALL GOOD.
              </h2>
            </div>
          </div>
          <h3 className="mb-5 text-xl font-bold tracking-tight text-white">
            Week Commencing {mondayDate}
          </h3>
          <div className="flex flex-col w-full gap-4">
            <WeekDay dayName="Mon" events={[
              { event: 'PIZZA RUN', eventSubtitle: 'BAG DROP AVAILABLE', time: '6:30PM', distance: '5KM', link: '/events/monday-run-pizza' },
            ]} />
            <WeekDay dayName="Tue"/>
            <WeekDay dayName="Wed"/>
            <WeekDay dayName="Thu" events={[
              { event: <>EASTWAY TAP<br />TRAIL RUN</>, time: '6:30PM', distance: '5KM', link: '/events/thursday-run-eastway'},
            ]} />
            <WeekDay dayName="Fri"/>
            <WeekDay dayName="Sat"/>
            <WeekDay dayName="Sun" events={[
              { event: 'CRUMBS', time: <>10:00AM<br/>10:30AM<br/>11:00AM</> , distance: <>15KM<br/>10KM<br/>5KM</>, link: '/events/sunday-run-crumbs'},
            ]} />
          </div>
          <Link href="/events">
            <a className="flex h-6 mt-8 leading-7 text-white transition-all rounded-lg">
              All Events
              
            </a>
          </Link>
          <span className="h-16" />
        </div>
      </Container>
    </Suspense>
  );
}
