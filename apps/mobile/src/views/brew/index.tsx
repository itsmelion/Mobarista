import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '@happynrwl/components';

import * as styleSelection from './StyleSelection';
import * as sizeSelection from './SizeSelection';
import * as extrasSelection from './ExtrasSelection';
import * as overview from './Overview';

export const stackName = 'brewStack';

const Stack = createNativeStackNavigator();

export function BrewStack({ route }) {
  return (
    <Stack.Navigator
      initialRouteName={styleSelection.config.viewName}
      screenOptions={{ header: Header, headerTitle: `Brew with ${route.params.machineName}` }}>
      <Stack.Screen
        name={styleSelection.config.viewName}
        component={styleSelection.StyleSelection}
        initialParams={{ title: styleSelection.config.title }}
      />

      <Stack.Screen
        name={sizeSelection.config.viewName}
        component={sizeSelection.SizeSelection}
        initialParams={{ title: sizeSelection.config.title }}
      />

      <Stack.Screen
        name={extrasSelection.config.viewName}
        component={extrasSelection.ExtrasSelection}
        initialParams={{ title: extrasSelection.config.title }}
      />

      <Stack.Screen
        name={overview.config.viewName}
        component={overview.Overview}
        initialParams={{ title: overview.config.title }}
      />
    </Stack.Navigator>
  )
}
