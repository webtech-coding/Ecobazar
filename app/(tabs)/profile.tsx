import { AppDispatch, RootState } from "@/store";
import { singoutUser } from "@/store/asyncActions/userActions";
import { FC, ReactElement } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

const Profile:FC=():ReactElement=>{
    const userStore = useSelector((state:RootState)=>state.user);
    const dispatch = useDispatch<AppDispatch>()

    const handleUserSignout =()=>{
        dispatch(singoutUser());  
    }
    
    return(
        <SafeAreaView className="flex-1 justify-center items-center w- bg-[#fefae0]">
            <View className="w-full justify-center items-center">
               <Image source={{uri:userStore.user?.avatar}} className="size-28 rounded-full" tintColor="#FE8C00"/>
               <Text className="font-medium text-2xl capitalize w-full text-center mt-10">{userStore.user?.name}</Text>
               <Text className="font-medium text-sm w-full text-center mt-2">{userStore.user?.email}</Text>
               <Text className="font-medium text-sm w-full text-center mt-2">phone: Not assinged</Text>
               <TouchableOpacity className="p-3 w-52 bg-white-200 mt-5 items-center rounded-full" onPress={handleUserSignout}>
                    <Text className="text-white-100 font-medium">Sign out</Text>    
               </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export default Profile;