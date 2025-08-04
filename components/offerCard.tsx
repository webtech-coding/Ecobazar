import { icons } from "@/constants"
import { OfferTypePorps } from "@/utils/types"
import { FC, ReactElement } from "react"
import { Image, Pressable, Text, View } from "react-native"

const OfferCard:FC<OfferTypePorps> =({item, index}):ReactElement=>{

    return(
        <View className="" key={item.id}>
          <Pressable className={`mb-3 h-48 rounded-xl ${index % 2 ? 'flex-row':'flex-row-reverse'} p-1 justify-between items-center flex-1 min-w-full space-x-10`} style={{backgroundColor:item.color}}>
              <View className="p-2">
                <Text className="text-white-100 font-bold text-xl ">{item.title}</Text>
                <Image source={icons.arrowRight} className="size-10" resizeMode="contain"/>
              </View>
              <Image source={item.image} className="size-full w-1/2" resizeMode="contain"/>
          </Pressable>
        </View>
    )
}

export default OfferCard