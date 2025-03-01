import React from 'react';
import { Text, View, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './Screens/HomeScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './Screens/MapScreen';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from './components/NavigateCard';
import RideOptionsCard from './components/RideOptionsCard';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1}}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
          >
            <Stack.Navigator>
              <Stack.Screen 
                name="HomeScreen"
                component={HomeScreen} 
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen 
                name="MapScreen"
                component={MapScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen name="NavigateCard" component={NavigateCard} />
              <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} /> 
                
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}




