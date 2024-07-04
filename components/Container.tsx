import cn from 'classnames';
import Footer from 'components/Footer';
import MobileMenu from 'components/MobileMenu';
import { useTheme } from 'next-themes';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'font-bold text-white'
            : 'font-normal text-white',
          'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-blue-700  transition-all'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Good Time Running Club',
    description: `Edinburgh based running group. All inclusive, all abilities, all good.`,
    image: 'https://goodtimerunning.co.uk/static/images/banner.webp',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="bg-goodtime-blue2">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://goodtimerunning.co.uk${router.asPath}`} />
        <link rel="canonical" href={`https://goodtimerunning.co.uk${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Good Time Running Club" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@b099l3" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="flex flex-col justify-center">
        <nav className="relative flex items-center justify-between w-full max-w-2xl pt-8 pb-8 mx-auto text-white border-gray-200 sm:pb-16 bg-goodtime-blue2 bg-opacity-60 ">
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>
          <div className="ml-[-0.60rem]">
            <MobileMenu />
            <NavItem href="/" text="Home" />
            <NavItem href="/events" text="Events" />
            <NavItem href="/about" text="About" />
          </div>
        </nav>
      </div>
      <main
        id="skip"
        className="flex flex-col justify-center px-8 bg-goodtime-blue2 "
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
