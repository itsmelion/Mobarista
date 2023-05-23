import React from 'react';
import {
  SafeAreaView,
  Text,
  useColorScheme,
} from 'react-native';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

const backgroundStyle = {
  backgroundColor: isDarkMode ? '#333333' : '#f2f2f2',
};

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text>Mobile App</Text>
    </SafeAreaView>
  );
}

export default App;
