import { Redirect, Slot } from "expo-router";

const TabLayout =()=>{
    const authenticated = false;

    if(!authenticated){
        return <Redirect href='/signin' />
    }

    return(
        <Slot />
    )
}

export default TabLayout;