
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