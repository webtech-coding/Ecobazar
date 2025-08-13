import { AppDispatch, RootState } from "@/store";
import { singoutUser } from "@/store/asyncActions/userActions";
import { icons } from "@/utils/constants";
import { useRouter } from "expo-router";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const Header =()=>{
    const store = useSelector((state:RootState)=>state.cart);
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()
    
    return(
        <View className="border-b border-[#ebe9e9]">
            <View className="flex-row justify-between p-3">
                <View className="flex-row items-center">
                    <Image source={icons.plantLogo} className="size-6 mr-1"/>
                    <Text className="text-xl text-[#202020] font-bold">Ecobazar</Text>
                </View>
                <View className="flex-row items-center">
                    <View className="flex-row items-center  mr-5">
                        <Image source={icons.bag} className="size-5" tintColor="#202020"/>
                        <Pressable className="absolute -top-2 bg-primary h-5 w-5 rounded-full items-center justify-center -right-3" onPress={()=>router.navigate('/cart')}>
                            <Text className="text-white">{store.cart.length}</Text>
                        </Pressable>
                    </View>    
                    <Text className=" mr-5 ml-2">|</Text>  
                    <TouchableOpacity className="flex-row items-center bg-primary pr-2 pl-2 pt-1 pb-1 rounded-md ml-2" onPress={()=>dispatch(singoutUser())}>
                        <Image source={icons.person} tintColor="#ffffff" className="size-4" />
                        <Text className="text-sm text-white-100 font-medium ml-2">
                            Sign out
                        </Text>
                    </TouchableOpacity>
                </View>                
            </View>                        
        </View>
 
    )
}

export default Header