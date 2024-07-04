import Container from 'components/Container';
import FunctionCard from 'components/FunctionCard';
import { allEvents } from 'contentlayer/generated';
import { pick } from 'lib/utils';
import type { InferGetStaticPropsType } from 'next';

export default function Events({
  events
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title="Running Events – Good Time Running Club"
      description="A collection of Good Time Running Club Events"
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="pb-4 mb-4 text-3xl font-bold tracking-tight text-transparent text-white md:text-5xl">
          Events
        </h1>
        <p className="mb-4 text-white">
          All the events that happen at GTRC
        </p>
        <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
          {events.map((event) => (
            <FunctionCard
              key={event.slug}
              title={event.title}
              slug={event.slug}
              logo={event.logo}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const events = allEvents.map((event) =>
    pick(event, ['slug', 'title', 'logo', 'description'])
  );

  return { props: { events } };
}
