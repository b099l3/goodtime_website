import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import 'styles/global.css';
config.autoAddCss = false;

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
  );
}
