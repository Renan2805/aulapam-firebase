import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Detalhes from './screens/detalhes';
import Home from './screens/home';

const App = () => {

  const fontsLoaded = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  const Stack = createNativeStackNavigator()

  if(fontsLoaded)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{title: 'Home'}} name={'home'} component={Home}/>
        <Stack.Screen options={{title: 'Detalhes'}} name={'detalhes'} component={Detalhes}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App