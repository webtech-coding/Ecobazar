import { icons } from "@/utils/constants";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Header =()=>{
    return(
        <View className="border-b border-[#ebe9e9]">
            <View className="flex-row justify-between p-3">
                <View className="flex-row items-center">
                    <Image source={icons.plantLogo} className="size-6 mr-1"/>
                    <Text className="text-xl text-[#202020] font-bold">Ecobazar</Text>
                </View>
                <View className="flex-row items-center">
                    <View className="flex-row items-center  mr-5">
                        <Image source={icons.bag} className="size-5" tintColor="#202020"/>
                        <View className="absolute -top-2 bg-primary h-5 w-5 rounded-full items-center justify-center -right-3">
                            <Text className="text-white">0</Text>
                        </View>
                    </View>    
                    <Text className=" mr-5 ml-2">|</Text>  
                    <TouchableOpacity className="flex-row items-center bg-primary pr-2 pl-2 pt-1 pb-1 rounded-md ml-2" >
                    <Image source={icons.person} tintColor="#ffffff" className="size-4" />
                        <Text className="text-sm text-white-100 font-medium ml-2">
                            Sign out
                        </Text>
                    </TouchableOpacity>
                </View>                
            </View>                        
        </View>
 
    )
}

export default Header