import { ICategory } from "@/utils/types";
import { FC } from "react";
import { Image, Pressable, Text } from "react-native";

type CategoryCardPropTypes={
    category:ICategory
}

const CategoryCard:FC<CategoryCardPropTypes> =({category})=>{
    return(
        <Pressable className="justify-center items-center mr-5 w-40 h-40 order rounded-lg bg-white">
            <Image source={category.icon} resizeMode="cover" className="h-20 w-20"/>
            <Text className="pt-2 font-medium">{category.name}</Text>
        </Pressable>                                
    )
}

export default CategoryCard;