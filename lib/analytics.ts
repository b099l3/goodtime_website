import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useAnalytics = () => {
  const router = useRouter();

  useEffect(() => {

    const onRouteChangeComplete = (url: URL) => {
     
    };

    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router.events]);
};
