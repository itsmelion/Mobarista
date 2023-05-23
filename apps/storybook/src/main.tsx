import { useColorScheme } from 'react-native';
import { Text, SafeAreaView, DripsyProvider } from 'dripsy';
import { matcha, nightshade } from '@happynrwl/components';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <DripsyProvider theme={isDarkMode ? nightshade : matcha}>
      <SafeAreaView sx={{ flex: 1, bg: '$background' }}>
        <Text>Mobile App</Text>
      </SafeAreaView>
    </DripsyProvider>
  );
}

export default App;
