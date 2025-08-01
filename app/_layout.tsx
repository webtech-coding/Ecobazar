import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';

import { useEffect } from 'react';
import { fonts } from "./constants";
import './global.css';

const RootLayout=()=> {

  const [loaded, error] = useFonts({
    libsans: require('./../assets/fonts/LibertinusSans-Regular.ttf'),
    playwrite:fonts.playwrite
  })

  useEffect(()=>{
    //when fonts are loaded, hide the splash screen
    if(error) throw error
    if(loaded){
      SplashScreen.hideAsync();
    }
  },[loaded, error])

  return <Stack />;
}

export default RootLayout