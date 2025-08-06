import FormButton from "@/components/formButton";
import FormInput from "@/components/formInput";
import { createUser } from "@/lib/appwrite";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, KeyboardAvoidingView, Text, TouchableOpacity, View } from "react-native";

const SignUp =()=>{
    const [formInput, setFormInput] = useState<{email:string, password:string, userName:string}>({email:'', password:'', userName:''}) 
    const router = useRouter()

    /** save form data when input change */
    const handleFormInput=(value:string, type:string)=>{
        setFormInput(prev=>({...prev, [type]:value}))
    }

    /** handle form submission */
    const handleFormSubmission = async ()=>{
        const {userName, email, password} = formInput;
        if(!userName || !email  || !password){
            return Alert.alert('Please provide all the credentials below')
        }
        try {            
            const newUser = await createUser(email, password, userName)
            if(!newUser) throw Error

            Alert.alert('User signed in successfully')

        } catch (error:any) {
            Alert.alert(error.message)
        }

        //router.navigate('/')
    }
    return(
        <KeyboardAvoidingView className="p-3">
            <View className="w-full justify-center text-center mt-5 mb-5">
                <Text className="text-center text-2xl color-white-200 font-semibold">Sign Up</Text>
            </View>
           <FormInput 
                inputType="username"
                value={formInput.userName}
                onInputChange={(value)=>handleFormInput(value, 'userName')}
                placeholder="User name"

            />
            <FormInput 
                inputType="email"
                value={formInput.email}
                onInputChange={(value)=>handleFormInput(value, 'email')}
                placeholder="example@email.com"

            />
           <FormInput 
                inputType="password"
                value={formInput.password}
                onInputChange={(value)=>handleFormInput(value, 'password')}
                placeholder="password"
            />
            <FormButton 
                text="Sign In"
                disabled={!formInput.email || !formInput.password}
                onPress={handleFormSubmission}
            />

            <View className="mt-10 flex-row gap-2 w-full justify-center">
                <Text>Do you have an account aleady ?</Text>
                <TouchableOpacity onPress={()=>router.navigate('/signin')}>
                    <Text className="text-primary font-semibold text-center w-full">Sign In</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}

export default SignUp;