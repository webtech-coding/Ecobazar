import BannerComponents from "@/components/bannerComponent";
import CategoryCard from "@/components/categoryCard";
import Header from "@/components/header";
import TopSales from "@/components/topSales";
import { RootState } from "@/store";
import images, { categories, deals, icons } from "@/utils/constants";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
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

        <View className="mt-8 mb-8 items-center bg-[#eae2b7] p-5">
          <View className="h-40 w-40 border-primary border-2 rounded-full justify-center items-center">
            <Image source={images.delivery} className="h-16 w-16 size-10" resizeMode="contain"/>
          </View>
          <View className="justify-center pt-2 pb-2">
            <Text className="text-center text-xl font-medium text-[#ffffff] bg-primary pt-2 pb-2 rounded-lg">Free Delivery</Text>
            <Text className="pt-2">Free delivery on all your order.</Text>
          </View>
        </View>

        <View className="p-[10]">
          <Text className="font-semibold text-xl mb-[10]"> Top sold products </Text>
          <FlatList 
            data={deals}
            renderItem={({item, index})=>(<TopSales product={item} index={index}/>)}            
            showsVerticalScrollIndicator={false}
            keyExtractor={(item)=>item.name}
            
            numColumns={1}
          />
        </View>

        <View>
          <View className="p-[10] mt-8">
            <Text className="text-center text-2xl font-semibold">Everything for your everday life!</Text>
            <Text className="text-center">To keep you healty and fit</Text>
          </View>
          <View className="flex-row justify-between p-[10] font-semibold mt-8">
              <Text className="font-semibold text-xl"> Explore our online store </Text>
              <Image source={icons.arrowRight} className="w-20 size-6" resizeMode="contain" tintColor="#FE8C00"/>
          </View>
        </View>

       <View className=" bg-white-200">
        <Image source={images.egg} resizeMode="cover" className="rounded-0 size-96 w-full rounded-0"/>
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
