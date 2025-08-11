import { icons } from "@/utils/constants"
import { TopSalesPropsType } from "@/utils/types"
import { FC, ReactElement } from "react"
import { Image, Pressable, Text, View } from "react-native"

const TopSales:FC<TopSalesPropsType> =({product, index}):ReactElement=>{
    return(
        <Pressable className={`w-[48%] h-80 justify-end items-center mb-5 bg-[#ffffff] rounded-lg ${index % 2 ?'ml-2':'mr-2'}`}>
            <View className="w-full justify-center">
                <Image source={product.icon} className="size- w-full" resizeMode="contain"/>  
                <View className="pb-5 flex-row w-full justify-between pl-2 pr-2">
                    <View>
                        <Text>{product.name}</Text>
                        <Text className="font-bold">€{product.price.toFixed(2)}</Text>
                        <View className="flex-row">
                            {
                                (()=>{
                                    return [1,2,3,4,5].map(num=>{
                                        return(
                                            <View>
                                                <Image source={icons.star} key={`start-${num}`} className="size-4" tintColor={num<=product.rating ?'#FE8C00':'#cccccc'}/>
                                            </View>
                                        )
                                    })
                                })()
                            }
                        </View>
                    </View>
                    <View className="flex-row justify-center items-center p-2 rounded-md">
                        <Image source={icons.bag} tintColor="#202020" resizeMode="cover" className="size-6"/>                        
                    </View>                  
                </View>              
            </View>     
         
        </Pressable>
    )
}

export default TopSales