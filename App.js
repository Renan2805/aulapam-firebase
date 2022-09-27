import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Detalhes from './screens/detalhes';
import Home from './screens/home';
import AdicionarAluno from './screens/adicionarAluno';
import { Platform } from 'react-native';

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
      <Stack.Navigator screenOptions={{headerTitleStyle: {fontFamily: 'Poppins_500Medium'}}}>
        <Stack.Screen options={{title: 'Home'}} name={'home'} component={Home}/>
        <Stack.Screen options={{title: 'Adicionar'}} name={'adicionar'} component={AdicionarAluno}/>
        <Stack.Screen options={{title: 'Detalhes'}} name={'detalhes'} component={Detalhes}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App