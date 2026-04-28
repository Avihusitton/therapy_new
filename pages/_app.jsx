import React from 'react';
import '@/index.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { getQueryClient } from '@/lib/query-client';
import { Toaster } from "@/components/ui/toaster";
import { AudioProvider } from '@/contexts/AudioContext';

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={getQueryClient()}>
      <AudioProvider>
        <Component {...pageProps} />
        <Toaster />
      </AudioProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
