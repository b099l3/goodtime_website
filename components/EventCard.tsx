import cn from 'classnames';
import Link from 'next/link';
import React from 'react';

export default function EventCard({ title, slug, gradient }) {
  return (

    <div className="flex-grow">
    <Link href={`/events/${slug}`}>
      <a
        className={cn(
          'transform hover:scale-[1.1] transition-all',
          'rounded-xl w-full',
          gradient
        )}
      >
        <div className="h-full p-4 border-2 border-white rounded-lg bg-gradient-to-r">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-6 text-lg font-medium tracking-tight text-white md:text-lg sm:mb-10">
              {title}
            </h4>
          </div>
        </div>
      </a>
    </Link>
        </div>
  );
}
