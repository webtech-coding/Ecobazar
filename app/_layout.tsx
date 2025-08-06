import { store } from '@/store';
import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';


import { Provider } from 'react-redux';


import './global.css';

const RootLayout=()=> {

  const [loaded, error] = useFonts({
    'libsans': require('@/assets/fonts/LibertinusSans-Regular.ttf'),
    'playwrite': require('@/assets/fonts/PlaywritePL-Regular.ttf'),
    'libsans-bold':require('@/assets/fonts/LibertinusSans-Bold.ttf')
  })

  useEffect(()=>{
    if(error) throw error
    if(loaded){
      SplashScreen.hideAsync();
    }
  },[loaded, error])

  return(
    <Provider store={store}>
      <Stack 
        screenOptions={{headerShown:false}} 
      />
    </Provider>
  )
}

export default RootLayout