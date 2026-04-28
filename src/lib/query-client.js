import { QueryClient } from '@tanstack/react-query';

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient = undefined;

export function getQueryClient() {
  if (typeof window === 'undefined') {
    // server/edge — צור instance חדש לכל request
    return makeQueryClient();
  }
  // browser — שמור instance יציב
  if (!browserQueryClient) browserQueryClient = makeQueryClient();
  return browserQueryClient;
}

// backward compat — שומר על import ישן שעדיין עובד בדפדפן
export const queryClientInstance = typeof window !== 'undefined' ? getQueryClient() : null;