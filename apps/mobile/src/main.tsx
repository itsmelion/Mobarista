import { useColorScheme } from 'react-native';
import { Text, SafeAreaView, DripsyProvider } from 'dripsy';
import { Button, Card, matcha, nightshade, MediumCoffeeSvg } from '@happynrwl/components';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <DripsyProvider theme={isDarkMode ? nightshade : matcha}>
      <SafeAreaView sx={{ flex: 1, bg: '#fafafa' }}>
        <Card
          Icon={MediumCoffeeSvg}
          title='Card Item'
          Status={<Text>status</Text>}
        />
      </SafeAreaView>
    </DripsyProvider>
  );
}

export default App;
