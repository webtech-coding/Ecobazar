import { icons } from "@/utils/constants";
import { FC, ReactElement, useState } from "react";
import { Image, TextInput, View } from "react-native";

const SearchFood:FC = ():ReactElement=>{
    const [searchText, setSearchText] = useState<string>("")
    return(
        <View className="mr-2 ml-2 border border-primary rounded-full flex-row items-center mt-5 mb-5">
            <TextInput                 
                placeholder="Search food..." 
                onChangeText={(text)=>setSearchText(text)}
                value={searchText}
                className="p-4 w-full rounded-full"
            />
            <Image source={icons.search} className="size-5 absolute right-3" tintColor="#FE8C00"/>
        </View>
    )
}

export default SearchFood;