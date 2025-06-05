import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando as telas do app
import WelcomeScreen from '../screens/WelcomeScreen';
import InputScreen from '../screens/InputScreen';
import RiskScreen from '../screens/RiskScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ActionsScreen from '../screens/ActionsScreen';

export type RootStackParamList = {
  Welcome: undefined;
  Input: undefined;
  Risk: { humidity: number; slope: number };
  History: undefined;
  Actions: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Input" component={InputScreen} />
      <Stack.Screen name="Risk" component={RiskScreen} />
      <Stack.Screen name="History" component={HistoryScreen} />
      <Stack.Screen name="Actions" component={ActionsScreen} />
    </Stack.Navigator>
  );
}
