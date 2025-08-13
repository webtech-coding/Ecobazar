import CartItem from "@/components/cartIteam";
import { RootState } from "@/store";
import { deals, icons } from "@/utils/constants";
import { Link } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

const Cart =()=>{
    const cartStore = useSelector((state:RootState)=>state.cart);

    /**
     * 
     * @returns total purchase cost
     */
    const getTotalAmount =()=>{
        let totalCost = 0;
        const cartProducts = cartStore.cart;
        if(cartProducts.length){
            totalCost = cartProducts.reduce((prevValue, currentProduct)=>{
                const product = deals.find(p=>p.id === currentProduct.productId)
                if(!product)return prevValue


                return prevValue = prevValue + product.price * currentProduct.amount
            },0)
        }
        return totalCost
    }

    return(
        <View>
            <View className="pl-[10] pr-[10] mt-5 flex-row justify-between">
                <Link push href="/">                    
                    <Text className="underline color-white-200 font-bold text-sm"> ‹Back</Text>
                </Link>
                <TouchableOpacity className="bg-primary p-2 rounded-md">
                    <Text className="text-[#ffffff]">checkout (${getTotalAmount()})</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
                data={cartStore.cart || []}
                renderItem={({item})=><CartItem  item={item}/>}
                ListEmptyComponent={()=>(
                    <View className="items-center justify-center h-[100%] w-full">  
                        <Image source={icons.bag} tintColor="#202020" className="size-8"/>
                        <Text className="text-lg font-semibold">No items in the cart. </Text>
                    </View>
                )}
            />
        </View>
    )
}

export default Cart;