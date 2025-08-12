import BannerComponents from "@/components/bannerComponent";
import CategoryCard from "@/components/categoryCard";
import SearchFood from "@/components/searchFood";
import TitleText from "@/components/titleText";
import TopSales from "@/components/topSales";
import { RootState } from "@/store";
import images, { categories, deals, icons } from "@/utils/constants";
import { ICategory, IProduct } from "@/utils/types";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";



export default function Index() {

  const userStore = useSelector((state:RootState)=>state.user);
  const router = useRouter();

  type ItemTypes = ICategory | IProduct;
  type dataTypes = {
    title:string,
    type:'categories' | 'deals',
    data: ItemTypes[],
  }

  const listData:dataTypes[] = [
    {
      title:'Categories',
      type:'categories',
      data:categories
    },
    {
      title:'Top productsss',
      type:'deals',
      data:deals
    }
  ]

  return (
    <ScrollView showsHorizontalScrollIndicator={true} showsVerticalScrollIndicator={false}>         
      <SearchFood />
      <TitleText text="Fresh & Healthy Organic Food" />
      <View className="flex-row justify-between p-[10] font-semibold mt-2">
        <Text className="font-semibold text-xl"> Categories </Text>
        <Image source={icons.arrowRight} className="w-20 size-6" resizeMode="contain" tintColor="#FE8C00"/>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="pl-[10]">          
          {
            categories.map(category=>(<CategoryCard  category={category} key={category.name}/>))
          }          
      </ScrollView>
        <View className="mt-8 mb-8">
          <Text className="font-semibold text-xl mb-[10] pl-[10]"> Top products </Text>
          <View className="flex-row flex-wrap pl-[10] pr-[10]">
            {
              deals.map((deal, index)=>(<TopSales key={deal.name} index={index} product={deal}></TopSales>))
            }
          </View>
        </View>
      
      <View className="mt-2 items-center bg-[#eae2b7] p-5">
        <View className="h-40 w-40 border-primary border-2 rounded-full justify-center items-center">
          <Image source={images.delivery} className="h-16 w-16 size-10" resizeMode="contain"/>
        </View>
        <View className="justify-center pt-2 pb-2">
          <Text className="text-center text-xl font-medium text-[#ffffff] bg-primary pt-2 pb-2 rounded-lg">Free Delivery</Text>
          <Text className="pt-2">Free delivery on all your orders.</Text>
        </View>
      </View>
      <BannerComponents />
    </ScrollView>
  )

}
