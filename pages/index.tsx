import { Suspense } from 'react';

import Link from 'next/link';
import BlogPostCard from '../components/BlogPostCard';
import Container from '../components/Container';
import EventCard from '../components/EventCard';
import ImageCenter from '../components/ImageCenter';

import { FiArrowRight } from "react-icons/fi";


export default function Home() {
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
              <h2 className="my-8 tracking-tight text-center text-white text-l md:text-xl">
                All inclusive, all abilities, all good.
              </h2>
            </div>
          </div>
          <h3 className="mb-3 text-2xl font-bold tracking-tight text-white md:text-4xl">
            Featured Events
          </h3>
          <div className="flex flex-col gap-10 md:flex-row">
            <EventCard
              title="Pride Runs"
              slug=""
              gradient="from-[#9333EA] via-[#3B82F6] to-[#6EE7B7]"
            />
            <BlogPostCard
              title="Weekly Runs"
              categories="Flutter"
              slug="flutter-hackathon-hack20"
              gradient="from-[#123062] to-[#123062]"
            />
            <BlogPostCard
              title="Yoga for Runners"
              categories="Flutter"
              slug="flutter-declarative-ui-toolkit"
              gradient="from-[#194039] to-[#194039]"
            />
          </div>
          <Link href="/events">
            <a className="flex h-6 mt-8 leading-7 text-white transition-all rounded-lg">
              All Events
              
          <FiArrowRight color="currentColor" fontSize="1.5em"
            onClick={() => {
              window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}/>
            </a>
          </Link>
          <span className="h-16" />
        </div>
      </Container>
    </Suspense>
  );
}
