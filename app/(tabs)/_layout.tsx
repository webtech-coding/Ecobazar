import Header from '@/components/header';
import { AppDispatch, RootState } from '@/store';
import { fetchUserSession } from '@/store/asyncActions/userActions';
import { Redirect, Slot } from "expo-router";
import { useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

const TabLayout =()=>{

    const user = useSelector((state:RootState)=>state.user);
    const dispatch = useDispatch<AppDispatch>()
     
    useEffect(()=>{
      dispatch(fetchUserSession())      
    },[])
   
    if(!user.isAuthenticated && !user.isLoading){
        return <Redirect href='/signin' />
    }

    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <Header />
                <Slot />
            </SafeAreaView>
        </SafeAreaProvider>
       
    )

    {/*
    return(
        <Tabs screenOptions={{
            headerShown:false, 
            tabBarShowLabel:false,
            tabBarStyle:{
                backgroundColor:'#ffffff',                
                display:'flex',
                flexDirection:'row-reverse',
                height:64,        
                borderRadius:50,
                position:'absolute',
                bottom:30,
                marginHorizontal:10,
                margin:'auto',
                maxWidth:'100%',
                borderColor:"#ffffff",
                
                shadowColor:"#202020",
                shadowOffset:{width:10, height:20},
                shadowRadius:.2,
                elevation:4
            }            
            }}> 
            <Tabs.Screen 
                name='index'
                options={{
                    title:"Home",
                   
                    tabBarIcon:({focused, color})=><TabBarIcon focused={focused} title='Home' icon='home'/>
                }}
            />
            <Tabs.Screen 
                name='cart'
                options={{
                    title:"Cart",
                   
                    tabBarIcon:({focused, color})=><TabBarIcon focused={focused} title='Cart' icon='bag'/>
                }}
            />
             <Tabs.Screen 
                name='product'
                options={{
                    title:"Product",
                   
                    tabBarIcon:({focused, color})=><TabBarIcon focused={focused} title='Cart' icon='bag'/>
                }}
            />
            <Tabs.Screen 
                name='search'
                options={{
                    title:"Search",
                    
                    tabBarIcon:({focused, color})=><TabBarIcon focused={focused} title='Search' icon='search'/>
                }}
            />
            <Tabs.Screen 
                name='profile'
                options={{
                    title:"profile",
                   
                    tabBarIcon:({focused, color})=><TabBarIcon focused={focused} title='Profile' icon='person'/>
                }}
            />
        </Tabs>
        
    )*/}
}

export default TabLayout;