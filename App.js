import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import StudentScreen from './src/screens/StudentScreen';
import PlanetsScreen from './src/screens/PlanetsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Student"
        screenOptions={{
          headerStyle: { backgroundColor: '#1b1033' },
          headerTintColor: '#fff',
          contentStyle: { backgroundColor: '#1b1033' },
        }}
      >
        <Stack.Screen name="Student" component={StudentScreen} options={{ title: 'Perfil del estudiante' }} />
        <Stack.Screen name="Planets" component={PlanetsScreen} options={{ title: 'Planetas de Dragon Ball' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
