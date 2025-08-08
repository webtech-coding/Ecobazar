import { TopSalesPropsType } from "@/utils/types"
import { FC, ReactElement } from "react"
import { Image, Pressable, Text, View } from "react-native"

const TopSales:FC<TopSalesPropsType> =({product, index}):ReactElement=>{
    return(
        <Pressable className={`w-[48%] justify-center items-center bg-[#ffffff] mb-5 rounded-lg ${index % 2 ? 'ml-[2%]':'mr-[2%]'}`}>
            <View className="">
                <Image source={product.icon} className="size-40" resizeMode="contain"/>  
                <View className="pb-2">
                    <Text>{product.name}</Text>
                    <Text className="font-bold">€{product.price.toFixed(2)}</Text>
                </View>              
            </View>     
         
        </Pressable>
    )
}

export default TopSales