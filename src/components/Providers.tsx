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

function Providers({ children }: OnlyChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <HeaderProvider>
        <NotificationProvider>{children}</NotificationProvider>
      </HeaderProvider>
    </QueryClientProvider>
  );
}

export default Providers;
