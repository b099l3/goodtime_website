import components from 'components/MDXComponents';
import type { Event } from 'contentlayer/generated';
import { allEvents } from 'contentlayer/generated';
import EventLayout from 'layouts/events';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function EventPage(event: Event) {
  const Component = useMDXComponent(event.body.code);

  return (
    <EventLayout event={event}>
      <Component components={components as any} />
    </EventLayout>
  );
}

export function getStaticPaths() {
  return {
    paths: allEvents.map((s) => ({ params: { slug: s.slug } })),
    fallback: false
  };
}

export function getStaticProps({ params }) {
  const event = allEvents.find((event) => event.slug === params.slug);
  return { props: event };
}
