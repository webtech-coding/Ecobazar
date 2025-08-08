import images, { icons } from "@/utils/constants"
import { Fragment } from "react"
import { Image, ImageBackground, Text, View } from 'react-native'

const BannerComponents =()=>{
    return(
        <Fragment>
            <ImageBackground source={images.bannerBg} className="w-full h-80" resizeMode="cover"/> 
        <View className="p-[10] mt-4">
          <Text className="text-center text-2xl font-semibold">Everything for your everday life!</Text>
          <Text className="text-center">To keep you healty and fit</Text>
        </View>
        <View className="flex-row justify-between p-[10] font-semibold mt-5">
            <Text className="font-semibold text-xl"> Choose category </Text>
            <Image source={icons.arrowRight} className="w-20 size-6" resizeMode="contain" tintColor="#FE8C00"/>
        </View>
        </Fragment>
    )
}

export default BannerComponents