import Container from 'components/Container';
import Link from 'next/link';


export default function NotFound() {
  return (
    <Container title="404 – GoodTime Running Club">
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
        Lost Your Way, Runner?
        </h1>
        <p className="mb-8 text-base text-white">
        Looks like you’ve taken a scenic route! 🗺️👟<br/>
        Don’t sweat it; even the best get sidetracked. Let’s get you back on track:<br/>
        <br/>
        Remember, every detour leads to new adventures. Keep pushing forward!<br/>
        </p>
        <h3 className="text-lg text-white">Fun Fact:</h3>
        <p className="mb-8 text-sm text-white">
        "Did you know? Even the most experienced marathoners take wrong turns sometimes!"
        </p>
        <Link href="/">
          <a className="w-64 p-1 mx-auto font-bold text-center bg-gray-200 rounded-md text-goodtime-blue2 sm:p-4">
            Return to the start line
          </a>
        </Link>
      </div>
    </Container>
  );
}
