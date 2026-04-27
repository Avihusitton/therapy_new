import React from 'react';
import '@/index.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

import { AudioProvider } from '@/contexts/AudioContext';

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <AudioProvider>
          <Component {...pageProps} />
          <Toaster />
        </AudioProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
