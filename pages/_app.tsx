import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useAnalytics } from 'lib/analytics';
import { ThemeProvider } from 'next-themes';
import 'styles/global.css';
config.autoAddCss = false;

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  useAnalytics();

  return (
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
  );
}
