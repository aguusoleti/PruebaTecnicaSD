
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import '@/styles/globals.css';
import Loader from '@/components/Loader/Loader';


export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    const handleRouteChangeError = () => {
      setIsLoading(false);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      <Component {...pageProps} />

    </>
  );
}
