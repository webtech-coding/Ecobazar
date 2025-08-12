import Header from "@/components/header";
import TitleText from "@/components/titleText";
import { AppDispatch, RootState } from "@/store";
import { addProduct, removeProduct } from "@/store/slices/cart.slice";
import { deals } from "@/utils/constants";
import { Link, useLocalSearchParams } from "expo-router";
import { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

const Product:FC =()=>{
    const cartStore= useSelector((state:RootState)=>state.cart)
    const dispatch = useDispatch<AppDispatch>()

    const param = useLocalSearchParams()
    const { productId } = param
    const id:string = Array.isArray(productId) ? productId[0]:productId
    const product = deals.find(deal=>deal.id === parseInt(id))

    const cartProduct = cartStore.cart
    const selectedProduct = cartProduct.find(p=>p.productId === parseInt(id))
    
    return(
        <SafeAreaProvider>
            <SafeAreaView className="bg-white h-full">
                <Header />
                <View className="pl-[10] mt-5">
                    <Link push href="/">                    
                       <Text className="underline color-white-200 font-bold text-sm"> ‹Back</Text>
                    </Link>
                </View>                
                <TitleText text="Fresh Fruits & vegetables" />
                <View className="w-full items-center">
                    <Image source={product?.icon} className="size-110"/>
                    <Text className="font-semibold text-2xl">{product?.name}</Text>
                    <Text className="font-medium text-lg">Price: ${product?.price}</Text>
                    <Text className="mt-5 mb-5 p-[10] text-sm">{product?.description}</Text>
                </View>
                <View className="flex-row justify-center items-center">
                    <TouchableOpacity className="bg-white-200 p-[15] rounded-lg" onPress={()=>dispatch(removeProduct(parseInt(id)))}>
                        <Text className="text-white-100 font-extrabold"> - </Text>
                    </TouchableOpacity>
                    
                    <Text className="text-dark-100 font-medium p-[20]">{selectedProduct?.amount || 0} kg </Text>
                    <TouchableOpacity className="bg-white-200 p-[15] rounded-lg" onPress={()=>dispatch(addProduct( parseInt(id)))}>
                        <Text className="text-white-100 font-extrabold"> + </Text>
                    </TouchableOpacity>                    
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Product