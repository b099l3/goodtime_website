import Link from 'next/link';


const ExternalLink = ({ href, children }) => (
  <a
    className="text-white transition hover:text-gray-600"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-8">
      <hr className="w-full mb-8 border-gray-200 border-1 dark:border-gray-800" />
      <div className="grid w-full max-w-2xl grid-cols-3 gap-4 pb-16 sm:grid-cols-3">
          <Link href="/">
            <a className="text-white transition hover:text-blue-600">Home</a>
          </Link>
          <Link href="/events">
            <a className="text-white transition hover:text-blue-600">Events</a>
          </Link>
          <Link href="/about">
            <a className="text-white transition hover:text-blue-600">About</a>
          </Link>
      </div>
    </footer>
  );
}
