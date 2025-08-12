import CartItem from "@/components/cartIteam";
import { RootState } from "@/store";
import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";

const Cart =()=>{
    const cartStore = useSelector((state:RootState)=>state.cart);
    console.log(cartStore)
    return(
        <View>
           <FlatList 
                data={cartStore.cart || []}
                renderItem={({item})=><CartItem  item={item}/>}
            />
        </View>
    )
}

export default Cart;