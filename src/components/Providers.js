import { HeaderProvider } from '../contexts/HeaderContext';
import { NotificationProvider } from '../contexts/NotificationContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000,
    },
  },
});

const Providers = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <HeaderProvider>
      <NotificationProvider>{children}</NotificationProvider>
    </HeaderProvider>
  </QueryClientProvider>
);

Providers.propTypes = {
  children: PropTypes.node,
};

export default Providers;
