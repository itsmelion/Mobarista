import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DripsyProvider } from 'dripsy';

import { matcha, nightshade } from '@happynrwl/components';

import { BrewStack } from './views/brew';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <DripsyProvider theme={isDarkMode ? nightshade : matcha}>
      <NavigationContainer>
        <BrewStack machineName={'Lex'}/>
      </NavigationContainer>
    </DripsyProvider>
  );
}

export default App;
