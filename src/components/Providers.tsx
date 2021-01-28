import { HeaderProvider } from '@contexts/HeaderContext';
import { NotificationProvider } from '@contexts/NotificationContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000,
    },
  },
});

interface ProviderProps {
  children?: React.ReactNode;
}

const Providers = ({ children }: ProviderProps) => (
  <QueryClientProvider client={queryClient}>
    <HeaderProvider>
      <NotificationProvider>{children}</NotificationProvider>
    </HeaderProvider>
  </QueryClientProvider>
);

export default Providers;
