import { faBeerMugEmpty, faPersonRunning, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'components/Container';
import type { Event } from 'contentlayer/generated';
import type { PropsWithChildren } from 'react';


export default function EventLayout({
  children,
  event
}: PropsWithChildren<{ event: Event }>) {
  // Determine which icon to use based on the category
  const getIcon = () => {
    switch (event.logo) {
      case 'running':
        return faPersonRunning;
      case 'beer':
        return faBeerMugEmpty;
      case 'pizza':
        return faPizzaSlice;
      default:
        return faPersonRunning;
    }
  };
  return (
    <Container
      title={`${event.title} - Events`}
      description="GTRC events."
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <div className="flex justify-between w-full mb-8">
          <div>
          
        <FontAwesomeIcon icon={getIcon()} className="pb-16 text-6xl"/>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              {event.title}
            </h1>
            <p className="text-white">
              {event.description}
            </p>
          </div>
        </div>
        <div className="w-full prose text-white">{children}</div>
      </article>
    </Container>
  );
}
