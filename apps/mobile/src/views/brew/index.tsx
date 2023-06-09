import { Header } from '@happynrwl/components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as extrasSelection from './ExtrasSelection';
import * as overview from './Overview';
import * as sizeSelection from './SizeSelection';
import * as styleSelection from './StyleSelection';

export const stackName = 'brewStack';

const Stack = createNativeStackNavigator();

export function BrewStack({ route }) {
  return (
    <Stack.Navigator
      initialRouteName={styleSelection.config.viewName}
      screenOptions={{ header: Header, headerTitle: `Brew with ${route.params.machineName}` }}>
      <Stack.Screen
        component={styleSelection.StyleSelection}
        initialParams={{ title: styleSelection.config.title }}
        name={styleSelection.config.viewName}
      />

      <Stack.Screen
        component={sizeSelection.SizeSelection}
        initialParams={{ title: sizeSelection.config.title }}
        name={sizeSelection.config.viewName}
      />

      <Stack.Screen
        component={extrasSelection.ExtrasSelection}
        initialParams={{ title: extrasSelection.config.title }}
        name={extrasSelection.config.viewName}
      />

      <Stack.Screen
        component={overview.Overview}
        initialParams={{ title: overview.config.title }}
        name={overview.config.viewName}
      />
    </Stack.Navigator>
  )
}
