import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { StackNavigator } from './src/presentation/routes/StackNavigator';
import { SideMenuNavigator } from './src/presentation/routes/SideMenuNavigator';
// import { BottomTabNavigator } from './src/presentation/routes/BottomTabsNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <SideMenuNavigator />
      {/* <BottomTabNavigator /> */}
    </NavigationContainer>
  );
}

