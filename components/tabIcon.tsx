import { icons } from "@/utils/constants";
import { TabrBarIconPropsType } from "@/utils/types";
import { FC } from "react";
import { Image, Text, View } from "react-native";


const TabBarIcon:FC<TabrBarIconPropsType> =({focused, icon, title})=>{
    return(
        <View className={`min-w-20 min-h-20 items-center justify-center ${ focused ? 'mt-6' :'mt-1'} gap-4`}>
            <Image source={icons[icon]} className="size-7 -mb-4" tintColor={focused ? '#FE8C00':'#515151'}/>
            {focused && (
                <Text className={`text-sm font-semibold ${focused ? 'text-primary':''}`}> {title}</Text>
            )}
        </View>
    )
}

export default TabBarIcon