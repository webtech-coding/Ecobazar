import OfferCard from "@/components/offerCard";
import { offers } from "@/utils/constants";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  return (
    <SafeAreaView className="flex-1 p-[10]">
      <FlatList data={offers} renderItem={({item, index})=>(
       <OfferCard item={item} index={index}/>
      )}>
      </FlatList>
    </SafeAreaView>
    
  );
}
