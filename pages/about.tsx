import Image from 'next/image';
import Container from '../components/Container';
import logo from '../public/runner-logo.webp';


export default function About() {
  return (
    <Container title="About – GTRC">
      <div className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-2xl font-bold tracking-tight text-white md:text-5xl">
          About Good Time Running Club
        </h1>
        <div className="mb-8 leading-6 prose text-white dark:prose-dark">
          <h2 className="text-white">Links</h2>
          <ul>
            <li>
              <a href="https://www.instagram.com/goodtimerunning/?hl=en">Instagram</a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=61555882064629">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com/goodtimerunnin">Twitter</a>
            </li>
            <li>
              <a href="https://www.strava.com/clubs/GoodTimeRunnin">Strava</a>
            </li>
          </ul>
          <h2 className="text-white">Bio</h2>
          <p>
          GTRC is a community space for everyone.

Personally we know how daunting it can be to show up and run with a group of people who already know each other. That’s partly why we started this thing because we were too anxious to join someone else’s club.

But everyone who comes along was a stranger to the club at some point, we will always come over and have a chat with new runners. Come say hi, even once and you’ll be made to feel like part of the team.

You don’t even have to run. Just turn up for a chat if you want a bit of company!

We don’t run at any set pace, if you need to slow down, someone will slow down with you. If you need to stop during a run, that’s fine, someone will stop and walk with you 💙

Checkout our events!
          </p>
          <h2 className="text-white">Logo</h2>
          <div className="flex space-x-8">
            <a href={logo.src}>
              <Image
                alt="logo"
                quality={100}
                src={logo}
                className="rounded-md"
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
