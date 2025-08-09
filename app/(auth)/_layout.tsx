import { RootState } from "@/store";
import images, { icons } from "@/utils/constants";
import { Redirect, Slot } from "expo-router";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const AuthLayout=()=>{
    const user = useSelector((state:RootState)=>state.user);
    console.log(user)
    if(user.isAuthenticated && !user.isLoading)return <Redirect href="/" />

    return(
        <SafeAreaView>
            <ScrollView>
                <View>
                    <ImageBackground source={images.egg} className="h-52 w-full opacity-60" resizeMode="cover"/>
                    <View className="bg-white h-16 w-16 rounded-full justify-center items-center absolute top-2 left-2">
                        <Image source={icons.plantLogo} className="h-8 w-8"/>
                    </View>
                    <View className="font-libsans p-3 text-center w-full">
                        <Text className="text-dark-100 font-libsans-bold text-2xl font-thin">Welcome to Ecobazar </Text>
                        <Text className="font-normal">A platform to help your shopping experience.</Text> 
                    </View>
                    <Slot />
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default AuthLayout;