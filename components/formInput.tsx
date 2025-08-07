import { InputTypePorps } from "@/utils/types";
import { FC, useState } from "react";
import { Text, TextInput, View } from "react-native";

const FormInput:FC<InputTypePorps> =({placeholder, inputType, value, onInputChange})=>{
    const [isFocused, setIsFocused] = useState<boolean>(false);
    return(
        <View className="mb-10">
            <Text className="font-semibold capitalize">{inputType}:</Text>
            <TextInput 
                placeholder={placeholder}
                autoComplete="off"
                secureTextEntry={inputType ==="password"}
                keyboardType={inputType ==="email" ? "email-address":"default"}
                onFocus={()=>setIsFocused(true)}
                onBlur={()=>setIsFocused(false)}
                autoCorrect={false}
                autoCapitalize="none"
                value={value}
                className={`border-b p-2 pl-0 ${ isFocused ? 'border-primary':'border-gray-300'} text-gray-600`}
                onChangeText={onInputChange}
            />
        </View>
    )
}

export default FormInput;