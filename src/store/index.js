import React from "react";
import globalHook from "use-global-hook";
import * as actions from "../actions";
import curryImg from '../img/curry.jpg';
import pizzaImg from '../img/pizza.jpg';
import ramenImg from '../img/ramen.jpg';
import saladImg from '../img/salad.jpg';
import cupcakeImg from '../img/cupcake.jpg';
import asianElephantImg from '../img/asianelephant.jpg';
import chicagoPizzaImg from '../img/chicagopizza.jpg';
import freshiiImg from '../img/freshii.jpg';
import cafeCoImg from '../img/cafeco.jpg';


const initialState = {
    restaurants: [
        {
            name: 'Asian Elephant',
            image: asianElephantImg,
            selected: false
        },
        {
            name: 'Chicago Pizza',
            image: chicagoPizzaImg,
            selected: false
        },
        {
            name: 'Freshii',
            image: freshiiImg,
            selected: false
        },
        {
            name: 'Cafe Co',
            image: cafeCoImg,
            selected: false
        }
    ],
    meals: [
        {
            id: 1,
            name: 'curry',
            price: 12,
            image: curryImg,
            restaurant: 'Asian Elephant',
            inCart: false,
            quantity: 1,
            selected: true
        },
        {
            id: 2,
            name: 'pizza',
            price: 19,
            image: pizzaImg,
            restaurant: 'Chicago Pizza',
            inCart: false,
            quantity: 1,
            selected: true
        },
        {
            id: 3,
            name: 'ramen',
            price: 13,
            image: ramenImg,
            restaurant: 'Asian Elephant',
            inCart: false,
            quantity: 1,
            selected: true
        },
        {
            id: 4,
            name: 'salad',
            price: 15,
            image: saladImg,
            restaurant: 'Freshii',
            inCart: false,
            quantity: 1,
            selected: true
        },
        {
            id: 5,
            name: 'cupcake',
            price: 6,
            image: cupcakeImg,
            restaurant: 'Cafe Co',
            inCart: false,
            quantity: 1,
            selected: true
        }
    ],
}

const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;
