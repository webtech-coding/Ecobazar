import { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { icons } from "@/constants";

const ShoppingCart:FC =()=>{
    const items = 0
    return(
        <TouchableOpacity className="bg-black rounded-full h-10 w-10 justify-center items-center relative">
            <Image source={icons.bag} className="size-5" resizeMode="contain"/>
            { items && (
                <View className="absolute bottom-[-2] right-[0] bg-primary rounded-full h-6 w-6 items-center justify-center">
                    <Text className="text-white">20</Text>
                </View>
            )}
            
        </TouchableOpacity>
    )
}

export default ShoppingCart