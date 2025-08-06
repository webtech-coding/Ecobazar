import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

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

  return <Stack 
    screenOptions={{headerShown:false}} 
  />;
}

export default RootLayout