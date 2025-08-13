import { RootState } from "@/store";
import { icons } from "@/utils/constants";
import { Redirect, Slot } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const AuthLayout=()=>{
    const user = useSelector((state:RootState)=>state.user);
    console.log(user)
    if(user.isAuthenticated && !user.isLoading)return <Redirect href="/" />

    return(
        <SafeAreaView>
            <ScrollView>
                <View className="w-full h-full">
                    
                    <View className="justify-center items-center h-40 ">
                        <View className="flex-row justify-center items-center">
                            <Image source={icons.plantLogo} className="h-6 w-6 mr-3"/>
                            <Text className="font-medium text-xl">ECOBAZAR</Text>
                        </View>
                    </View>                
                    <Slot />
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default AuthLayout;