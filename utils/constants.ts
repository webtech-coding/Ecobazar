// icons
import arrowBack from '@/assets/icons/arrow-back.png';
import arrowDown from '@/assets/icons/arrow-down.png';
import arrowRight from '@/assets/icons/arrow-right.png';
import bag from '@/assets/icons/bag.png';
import check from '@/assets/icons/check.png';
import clock from '@/assets/icons/clock.png';
import dollar from '@/assets/icons/dollar.png';
import envelop from '@/assets/icons/envelope.png';
import home from '@/assets/icons/home.png';
import location from '@/assets/icons/location.png';
import logout from '@/assets/icons/logout.png';
import minus from '@/assets/icons/minus.png';
import pencil from '@/assets/icons/pencil.png';
import person from '@/assets/icons/person.png';
import phone from '@/assets/icons/phone.png';
import plantLogo from '@/assets/icons/plant-logo.png';
import plush from '@/assets/icons/plus.png';
import search from '@/assets/icons/search.png';
import star from '@/assets/icons/star.png';
import trash from '@/assets/icons/trash.png';
import user from '@/assets/icons/user.png';


// images
import fruitBg from '@/assets/images/Image_fruits_bg.png';
import avatar from '@/assets/images/avatar.png';
import avacado from '@/assets/images/avocado.png';
import bacon from '@/assets/images/bacon.png';
import bannerBg from '@/assets/images/bannerBg.png';
import burgerOne from '@/assets/images/burger-one.png';
import burgerTwo from '@/assets/images/burger-two.png';
import buritto from '@/assets/images/buritto.png';
import cheese from '@/assets/images/cheese.png';
import coleslaw from '@/assets/images/coleslaw.png';
import cucumber from '@/assets/images/cucumber.png';
import delivery from '@/assets/images/deliveryTruck.png';
import egg from '@/assets/images/eggBg.png';
import emptyState from '@/assets/images/empty-state.png';
import fries from '@/assets/images/fries.png';
import login from '@/assets/images/login-graphic.png';
import logo from '@/assets/images/logo.png';
import mozarella from '@/assets/images/mozarella-sticks.png';
import mushrooms from '@/assets/images/mushrooms.png';
import onionRing from '@/assets/images/onion-rings.png';
import onion from '@/assets/images/onions.png';
import pizza from '@/assets/images/pizza-one.png';
import salad from '@/assets/images/salad.png';
import success from '@/assets/images/success.png';
import tomatoes from '@/assets/images/tomatoes.png';
import tomatoesBg from '@/assets/images/tomatoesBG.jpg';

//images -vegetables
import beauty from '@/assets/images/beauty.png';
import beverages from '@/assets/images/beverages.png';
import breakery from '@/assets/images/breakery.png';
import detergents from '@/assets/images/detergents.png';
import discountBanner from '@/assets/images/discount-banner.png';
import fruits from '@/assets/images/fruits.png';
import meat from '@/assets/images/meat.png';
import snacks from '@/assets/images/snacks.png';
import vegetable from '@/assets/images/vegetables.png';

//fetaured -vegeatables
import pepper from '@/assets/images/featured/Product_2.png';
import cauliflower from '@/assets/images/featured/Product_3.png';
import bringle from '@/assets/images/featured/Product_4.png';
import lettuce from '@/assets/images/featured/Product_5.png';
import cabbage from '@/assets/images/featured/Product_6.png';
import chilli from '@/assets/images/featured/product_1.png';


import { offerType } from './types';


// fonts 
const libsans = require('@/assets/fonts/LibertinusSans-Regular.ttf');
const playwrite = require('@/assets/fonts/PlaywritePL-Regular.ttf');
const libsansBold = require('@/assets/fonts/LibertinusSans-Bold.ttf');

const images = {
    avatar,
    avacado, 
    bacon,
    burgerOne,
    burgerTwo,
    buritto,
    cheese,
    cucumber,
    coleslaw,
    emptyState,
    fries,
    login,
    mozarella,
    mushrooms,
    onionRing,
    onion,
    pizza,
    salad,
    success,
    tomatoes,
    logo,
    fruitBg,
    bannerBg,
    tomatoesBg,
    discountBanner,
    delivery,
    chilli,
    pepper,
    cauliflower,
    cabbage,
    bringle,
    lettuce,
    egg
}   

export const icons = {
    arrowBack,
    arrowRight,
    arrowDown,
    bag,
    check,
    clock,
    dollar,
    envelop,
    home,
    location,
    logout,
    minus,
    pencil,
    person,
    phone,
    plush,
    search,
    star,
    trash,
    user,
    plantLogo
}

export const fonts = {
    libsans,
    playwrite,
    libsansBold
}


export const offers:offerType[] = [
    {
        id: 1,
        title: "SUMMER COMBO",
        image: burgerOne,
        color: "#D33B0D",
    },
    {
        id: 2,
        title: "BURGER BASH",
        image: burgerTwo,
        color: "#DF5A0C",
    },
    {
        id: 3,
        title: "PIZZA PARTY",
        image: pizza,
        color: "#084137",
    },
    {
        id: 4,
        title: "BURRITO DELIGHT",
        image: buritto,
        color: "#EB920C",
    },
];

export const categories = [
    {
       id:1,
       name: 'Fruist',
       icon:fruits,
       products:[]
    },
    {
        id:2,
        name:'Vegetables',
        icon:vegetable,
        prodcuts:[]
    },
    {
        id:3,
        name:'Meat and Fish',
        icon:meat,
        prodcuts:[]
    },
    {
        id:4,
        name:'Snacks',
        icon:snacks,
        prodcuts:[]
    },
    {
        id:5,
        name:'Beverages',
        icon:beverages,
        prodcuts:[]
    },
    {
        id:6,
        name:'Beauty & Health',
        icon:beauty,
        prodcuts:[]
    },
    {
        id:7,
        name:'Bread and Brakery',
        icon:breakery,
        prodcuts:[]
    },
    {
        id:8,
        name:'Detergents',
        icon:detergents,
        prodcuts:[]
    },
]

export const deals =[
    {
        id:11,
        name:'Chinese cabbage',
        icon:cabbage,
        price:12,
        rating:4,
        description:`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
        id:12,
        name:'Green Lettuce',
        icon:lettuce,      
        price:9,
        rating:5,
        description:`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
        id:13,
        name:'Egg plant',
        icon:bringle,      
        price:4.5,
        rating:5,
        description:`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`

    },
    {
        id:14,
        name:'Fresh Cauliflower',
        icon:cauliflower,      
        price:2,
        rating:4,
        description:`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`

    },
    {
        id:15,
        name:'Fresh Pepper',
        icon:pepper,      
        price:2,
        rating:4,
        description:`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`

    },
    {
        id:16,
        name:'Chilli',
        icon:chilli,      
        price:2,
        rating:4,
        description:`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`

    }

]


export default images