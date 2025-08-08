import BannerComponents from "@/components/bannerComponent";
import CategoryCard from "@/components/categoryCard";
import Header from "@/components/header";
import TopSales from "@/components/topSales";
import { RootState } from "@/store";
import images, { categories, deals } from "@/utils/constants";
import { FlatList, ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

export default function Index() {

  const userStore = useSelector((state:RootState)=>state.user);

  return (
    <SafeAreaView className="flex-1">
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <BannerComponents />
        <FlatList          
          data={categories}
          renderItem={({item, index})=>(
            <CategoryCard category={item}/>
          )}
          keyExtractor={(item)=>item.name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="pl-[10]"           
        />
        <View className="h-250 mt-5 mb-5 bg-primary">
          <ImageBackground source={images.tomatoesBg} className="h-60 opacity-70"/>
        </View>
        <View className="p-[10]">
          <Text className="font-semibold text-xl"> Top sold products </Text>
          <FlatList 
            data={deals}
            renderItem={({item, index})=>(<TopSales product={item} index={index}/>)}            
            showsVerticalScrollIndicator={false}
            keyExtractor={(item)=>item.name}
            
            numColumns={2}
          />
        </View>
 
      </ScrollView>
               
       
       {/*
        <FlatList 
          data={offers}
          renderItem={({item, index})=>(
            <OfferCard item={item} index={index} />
          )}
          className="p-[10]"
          keyExtractor={(item)=>item.id.toString()}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={()=>(
            <View className="mb-3 flex-row justify-between">
              <View className="flex-start">
                <Text className="text-primary font-bold text-sx">DELIVER TO</Text>
                <TouchableOpacity className="flex-row items-center">
                  <Text className="mr-1 text-xs">{userStore.user?.name}</Text>
                  <Image source={icons.arrowDown} className="size-2"/>
                </TouchableOpacity>
              </View>
              <ShoppingCart />
            </View>
          )}
        />*/}
    </SafeAreaView>    
  );
}
