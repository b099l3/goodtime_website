import Container from 'components/Container';
import NewsletterLink from 'components/NewsletterLink';
import Subscribe from 'components/Subscribe';
import { allNewsletters } from 'contentlayer/generated';
import { pick } from 'lib/utils';

export default function Newsletter({ newsletters }) {
  return (
    <Container
      title="Newsletter – Good Time Running Club"
      description="Good Time Running Club newsletter"
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
          Newsletter
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          This newsletter provides a 
        </p>
        <Subscribe />
        <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-white md:text-4xl">
          Archive
        </h3>
        <div className="prose dark:prose-dark">
          <ul>
            {newsletters
              .sort(
                (a, b) =>
                  Number(new Date(b.publishedAt)) -
                  Number(new Date(a.publishedAt))
              )
              .map((newsletter) => (
                <NewsletterLink key={newsletter.title} {...newsletter} />
              ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const newsletters = allNewsletters.map((newsletter) =>
    pick(newsletter, ['slug', 'title', 'summary', 'publishedAt'])
  );

  return { props: { newsletters } };
}
