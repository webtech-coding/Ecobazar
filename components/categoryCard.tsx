import { ICategory } from "@/utils/types";
import { useRouter } from "expo-router";
import { FC } from "react";
import { Image, Pressable, Text } from "react-native";

type CategoryCardPropTypes={
    category:ICategory
}

const CategoryCard:FC<CategoryCardPropTypes> =({category})=>{

    const router = useRouter()
    return(
        <Pressable className="justify-center items-center mr-5 w-40 h-40 order rounded-lg bg-white inline-block" onPress={()=>router.navigate({pathname:'/categories', params:{name:category.name}})}>
            <Image source={category.icon} resizeMode="cover" className="h-20 w-20"/>
            <Text className="pt-2 font-medium">{category.name}</Text>
        </Pressable>                                
    )
}

export default CategoryCard;