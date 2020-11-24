import React from "react";
import globalHook from "use-global-hook";
import * as actions from "../actions";
import curryImg from '../img/curry.jpg';
import pizzaImg from '../img/pizza.jpg';
import ramenImg from '../img/ramen.jpg';
import saladImg from '../img/salad.jpg';
import cupcakeImg from '../img/cupcake.jpg';

const initialState = {
    meals: [
        {
            name: 'curry',
            price: 12,
            image: curryImg,
            restaurant: 'Thai Elephant',
            inCart: false,
            quantity: 1,
        },
        {
            name: 'pizza',
            price: 19,
            image: pizzaImg,
            restaurant: 'Chicago Pizza',
            inCart: false,
            quantity: 1,
        },
        {
            name: 'ramen',
            price: 13,
            image: ramenImg,
            restaurant: 'Isshin',
            inCart: false,
            quantity: 1,
        },
        {
            name: 'salad',
            price: 15,
            image: saladImg,
            restaurant: 'Freshii',
            inCart: false,
            quantity: 1,
        },
        {
            name: 'cupcake',
            price: 6,
            image: cupcakeImg,
            restaurant: 'Cafe Co',
            inCart: false,
            quantity: 1,
        }
    ]
}

const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;
