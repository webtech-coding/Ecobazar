import FormButton from "@/components/formButton";
import FormInput from "@/components/formInput";
import { signInUser } from "@/lib/appwrite";
import { AppDispatch, RootState } from "@/store";
import { fetchUserSession } from "@/store/asyncActions/userActions";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, KeyboardAvoidingView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const Signin =()=>{

    const [formInput, setFormInput] = useState<{email:string, password:string}>({email:'', password:''}) 

    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state:RootState)=>state.user);
    const router = useRouter()

    useEffect(()=>{
        if(user.isLoading)return
        if(user.isAuthenticated)router.navigate('/');
    },[user])

    /** save form data when input change */
    const handleFormInput=(value:string, type:string)=>{
        switch(type){
            case 'email':
                setFormInput(prev=>({...prev, email:value}))
                break;
            case 'password':
                setFormInput(prev=>({...prev, password:value}))
                break;
        }
    }

    /** handle form submission */
    const handleFormSubmission =async ()=>{

        const {email, password} = formInput
        try {
            const signInSuccess =await signInUser(email, password);
            if(!signInSuccess){
                Alert.alert('Unable to sing in.')
            }else{
                dispatch(fetchUserSession());        
            }
        } catch (error:any) {
            Alert.alert(error.message)
        }
        
        router.navigate('/')
    }

    return(
        <KeyboardAvoidingView className="p-3">
            <View className="w-full justify-center text-center mt-5 mb-5">
                <Text className="text-center text-2xl color-white-200 font-semibold">Sign in</Text>
            </View>
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
                <Text>Dont have an account yet ?</Text>
                <TouchableOpacity onPress={()=>router.navigate('/signup')}>
                    <Text className="text-primary font-semibold text-center w-full">Sign Up</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}

export default Signin;