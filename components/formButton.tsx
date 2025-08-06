import { ButtonTypeProps } from "@/utils/types";
import { FC } from "react";
import { Text, TouchableOpacity } from "react-native";

const FormButton:FC<ButtonTypeProps> =({text, disabled, onPress})=>{
    return(
        <TouchableOpacity 
            className='w-full bg-white-200 p-5 rounded-full' 
            style={{ opacity : disabled ? .5 : 1}} 
            disabled={disabled}
            onPress={onPress}
        >
            <Text className="text-center text-white-100 font-medium">{text}</Text>
        </TouchableOpacity>
    )
}

export default FormButton;