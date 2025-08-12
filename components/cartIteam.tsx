import { AppDispatch } from "@/store"
import { addProduct, removeProduct } from "@/store/slices/cart.slice"
import { deals, icons } from "@/utils/constants"
import { ICart } from "@/utils/types"
import { FC } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { useDispatch } from "react-redux"

type CartItemPropType = {
    item:ICart
}
const CartItem:FC<CartItemPropType> =({item})=>{
        
    const product = deals.find(deal =>deal.id === item.productId)
    if(!product)return<Text>No product found</Text>
    const dispatch = useDispatch<AppDispatch>();

    return(
        <View className="flex-row justify-between items-center p-[10] border-b border-[#ebe9e9] mb-3">
            <View className="flex-col">
                <Image source={product?.icon} className="h-20 w-20"/>
                <View className="justify-center p--[10]">
                    <Text className="text-xs font-semibold">{product?.name}</Text>
                    <Text className="text-xs">${product.price } / kg</Text>
                </View>
            </View>
            <View>
                <Text>${(item.amount * product.price).toFixed(2)}</Text>
            </View>
            <View className="flex-row justify-center">
                <TouchableOpacity className="bg-white-200 rounded-lg justify-center items-center w-10" onPress={()=>dispatch(removeProduct(product.id))}>
                    <Text className="text-white-100 font-extrabold"> - </Text>
                </TouchableOpacity>
                
                <Text className="text-dark-100 font-medium p-[10]">{item.amount} kg </Text>
                <TouchableOpacity className="bg-white-200 rounded-lg justify-center w-10 items-center" onPress={()=>dispatch(addProduct(product.id))}>
                    <Text className="text-white-100 font-extrabold"> + </Text>
                </TouchableOpacity>  
            </View>
            <TouchableOpacity className="p-[10] border border-[#e63946] rounded-md ">
                <Image source={icons.trash} className="size-6"/>
            </TouchableOpacity>
        </View>
    )
}

export default CartItem