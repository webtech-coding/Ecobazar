
import Header from "@/components/header";
import TitleText from "@/components/titleText";
import TopSales from "@/components/topSales";
import { deals } from "@/utils/constants";
import { Link, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Categories =()=>{

    const params = useLocalSearchParams();
   const name = Array.isArray(params.name) ? params.name[0] : params.name
   // const categoryTitle = Array.isArray(params.)

    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <Header />
                <View className="pl-[10] mt-5">
                    <Link push href="/">                    
                       <Text className="underline color-white-200 font-bold text-sm"> ‹Back</Text>
                    </Link>
                </View> 
                <TitleText text={name}/>
                <ScrollView>
                    <View className="mt-8 mb-8">
                        <Text className="font-semibold text-xl mb-[10] pl-[10]"> Top products </Text>
                        <View className="flex-row flex-wrap pl-[10] pr-[10]">
                            {
                            deals.map((deal, index)=>(<TopSales key={deal.name} index={index} product={deal}></TopSales>))
                            }
                        </View>
                    </View>
                </ScrollView>                
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Categories