import { Text, View } from "react-native"

const TitleText=({text}:{text:string})=>{
    return(
        <View className="p-[10]">            
            <Text className="text-6xl font-bold text-[#202020]">{text}</Text>
        </View>
    )
}
export default TitleText