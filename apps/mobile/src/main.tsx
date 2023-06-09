import { matcha, nightshade } from '@happynrwl/components';
import { errorHandler, store, useOnlineManager } from '@happynrwl/services';
import { NavigationContainer } from '@react-navigation/native';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { DripsyProvider } from 'dripsy';
import { useColorScheme } from 'react-native';
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';
import { Provider } from 'react-redux';

import { RootStack } from './views/root';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      suspense: true,
    },
  },
});

export function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  setJSExceptionHandler(errorHandler);
  setNativeExceptionHandler((errorString) => {
    // You can do something like call an api to report to dev team here
  });

  useOnlineManager();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <DripsyProvider theme={isDarkMode ? nightshade : matcha}>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </DripsyProvider>
      </QueryClientProvider>
    </Provider>
  );
}
