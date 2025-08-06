import { AppDispatch, RootState } from '@/store';
import { fetchUserSession } from '@/store/asyncActions/userActions';
import { Redirect, Slot } from "expo-router";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TabLayout =()=>{

    const user = useSelector((state:RootState)=>state.user);
    console.log(user)
    const dispatch = useDispatch<AppDispatch>()
  
    useEffect(()=>{
      dispatch(fetchUserSession())
    },[])

    
    const authenticated = false;

    if(!authenticated){
        return <Redirect href='/signin' />
    }

    return(
        <Slot />
    )
}

export default TabLayout;