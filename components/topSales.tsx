import { icons } from "@/utils/constants"
import { TopSalesPropsType } from "@/utils/types"
import { FC, ReactElement } from "react"
import { Image, Pressable, Text, View } from "react-native"

const TopSales:FC<TopSalesPropsType> =({product, index}):ReactElement=>{
    return(
        <Pressable className={`w-[100%] justify-center items-center bg-[#ffffff] mb-5 rounded-lg`}>
            <View className="w-full items-center">
                <Image source={product.icon} className="size-60" resizeMode="contain"/>  
                <View className="pb-2 flex-row w-full justify-between pl-2 pr-2">
                    <View>
                        <Text>{product.name}</Text>
                        <Text className="font-bold">€{product.price.toFixed(2)}</Text>
                        <View className="flex-row">
                            {
                                (()=>{
                                    return [1,2,3,4,5].map(num=>{
                                        return(
                                            <View>
                                                <Image source={icons.star} className="size-4" tintColor={num<=product.rating ?'#FE8C00':'#cccccc'}/>
                                            </View>
                                        )
                                    })
                                })()
                            }
                        </View>
                    </View>
                    <View className="flex-row justify-center items-center bg-primary p-2 rounded-md">
                        <Image source={icons.bag} tintColor="#ffffff" resizeMode="cover" className="size-6"/>
                        <Text className="text-white-100 pl-2">Add to cart</Text>
                    </View>                  
                </View>              
            </View>     
         
        </Pressable>
    )
}

export default TopSales