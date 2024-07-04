import Container from 'components/Container';
import Subscribe from 'components/Subscribe';
import type { Newsletter } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import type { PropsWithChildren } from 'react';


export default function NewsletterLayout({
  children,
  newsletter
}: PropsWithChildren<{ newsletter: Newsletter }>) {
  return (
    <Container
      title={`${newsletter.title} – Good Time Running Club`}
      description={newsletter.summary}
      date={new Date(newsletter.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
          {newsletter.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="Good Time Running Club"
              height={24}
              width={24}
              src="/avatar.jpg"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {'Good Time Running Club / '}
              {format(parseISO(newsletter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-500 min-w-32 md:mt-0">
            {newsletter.readingTime.text}
          </p>
        </div>
        <div className="w-full prose dark:prose-dark">{children}</div>
        <div className="w-full mt-8">
          <Subscribe />
        </div>
      </article>
    </Container>
  );
}
