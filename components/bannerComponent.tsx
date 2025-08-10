import images from "@/utils/constants"
import { ImageBackground } from 'react-native'

const BannerComponents =()=>{
    return(
        <ImageBackground source={images.bannerBg} className="w-full h-80" resizeMode="cover"/>        
    )
}

export default BannerComponents