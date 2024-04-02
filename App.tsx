import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { StackNavigator } from './src/presentation/routes/StackNavigator';
import { SideMenuNavigator } from './src/presentation/routes/SideMenuNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <SideMenuNavigator />
    </NavigationContainer>
  );
}

