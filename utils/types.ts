import { ImageSourcePropType } from "react-native"

export type offerType = {
    id:number,
    title:string,
    image:ImageData,
    color:string
}

export type OfferCardProps ={
    index:number,
    item:offerType
}

export type InputTypePorps ={
    placeholder:string,
    inputType:string
    value:string,
    onInputChange:(e:string)=>void
}

export type ButtonTypeProps ={
    disabled:boolean,
    text:string,
    onPress: ()=>void
}

export interface IUser{
    name:string,
    email:string,
    avatar?:string,
}

export interface ICategory{
    name:string,
    icon:ImageSourcePropType,
    id:number
}

export interface IProduct extends ICategory{
    price:number,
    rating:number    
}

export type TopSalesPropsType={
    product:IProduct,
    index:number
}

export type TabrBarIconPropsType={
    focused:boolean,
    icon:'home'|'bag'| 'person' | 'search',
    title:string
}