import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';

import { useEffect } from 'react';
import { fonts } from '../utils/constants.ts';
import './global.css';

const RootLayout=()=> {

  const [loaded, error] = useFonts({
    libsans: fonts.libsans,
    playwrite:fonts.playwrite,
    'libsans-bold':fonts.libsansBold
  })

  useEffect(()=>{
    //when fonts are loaded, hide the splash screen
    if(error) throw error
    if(loaded){
      SplashScreen.hideAsync();
    }
  },[loaded, error])

  return <Stack screenOptions={{headerShown:false}}/>;
}

export default RootLayout