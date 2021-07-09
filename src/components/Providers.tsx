import { HeaderProvider } from '@contexts/HeaderContext';
import { NotificationProvider } from '@contexts/NotificationContext';
import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000,
    },
  },
});

const Providers = ({ children }: PropsWithChildren<{}>) => (
  <QueryClientProvider client={queryClient}>
    <HeaderProvider>
      <NotificationProvider>{children}</NotificationProvider>
    </HeaderProvider>
  </QueryClientProvider>
);

export default Providers;
