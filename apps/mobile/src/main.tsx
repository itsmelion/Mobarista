import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo'
import { DripsyProvider } from 'dripsy';
import {
  onlineManager,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Provider } from 'react-redux';
import { useEffect } from 'react';

import { matcha, nightshade } from '@happynrwl/components';
import { store } from '@happynrwl/services';

import { RootStack } from './views/root';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
    },
  },
});

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  // Observes whenever the app goes offline and tells react-query
  // making possible to handle network drops and retries.
  useEffect(() => {
    onlineManager.setEventListener(setOnline => {
      return NetInfo.addEventListener(state => {
        setOnline(!!state.isConnected)
      });
    });
  }, []);

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

export default App;
