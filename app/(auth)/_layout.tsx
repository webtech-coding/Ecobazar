import images from "@/utils/constants";
import { Slot } from "expo-router";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthLayout=()=>{
    return(
        <SafeAreaView>
            <ScrollView>
                <View>
                    <ImageBackground source={images.login} className="h-52 w-full opacity-60" resizeMode="cover"/>
                    <View className="bg-primary h-16 w-16 rounded-full justify-center items-center absolute top-2 left-2">
                        <Image source={images.logo} className="h-12 w-12"/>
                    </View>
                    <View className="font-libsans p-3 text-center w-full">
                        <Text className="text-dark-100 font-libsans-bold text-2xl font-thin">Welcome to clik and pay. </Text>
                        <Text className="font-normal">A platform to help your shopping experience.</Text> 
                    </View>
                    <Slot />
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default AuthLayout;