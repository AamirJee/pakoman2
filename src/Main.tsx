import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import AuthenticationProvider from './utils/AuthenticationProvider';
import App from './App';

const queryClient = new QueryClient();

const Main = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthenticationProvider>
        <App />
      </AuthenticationProvider>
    </QueryClientProvider>
  );
};

export default Main;
