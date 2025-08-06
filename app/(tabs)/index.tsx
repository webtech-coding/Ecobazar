import OfferCard from "@/components/offerCard";
import ShoppingCart from "@/components/shoppingCart";
import { icons, offers } from "@/utils/constants";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

  return (
    <SafeAreaView className="flex-1 p-[10]">
        <FlatList 
          data={offers}
          renderItem={({item, index})=>(
            <OfferCard item={item} index={index} />
          )}
          keyExtractor={(item)=>item.id.toString()}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={()=>(
            <View className="mb-3 flex-row justify-between">
              <View className="flex-start">
                <Text className="text-primary font-bold text-sx">DELIVER TO</Text>
                <TouchableOpacity className="flex-row items-center">
                  <Text className="mr-1 text-xs">Shovit Thapa</Text>
                  <Image source={icons.arrowDown} className="size-2"/>
                </TouchableOpacity>
              </View>
              <ShoppingCart />
            </View>
          )}
        />
    </SafeAreaView>    
  );
}
