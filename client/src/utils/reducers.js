import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from './actions';
import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch (action.type) {
        //if action type value is the value of 'UPDATE_PRODUCTS', return a new state object with an updated products array
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            };
        //if action type value is the value of 'UPDATE_CATEGORIES', return a new state object with an updated categories array
        case UPDATE_CATEGORIES: 
            return {
                ...state,
                categories: [...action.categories],
            };
        
        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };

        //if it's none of these actions, do not update state at all and keep things the same!
        default:
            return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}
//this function will be used to help initialize our global state object and then provide us with the functionality for updating that state by automatically running it through our custom reducer() function
    //this is similar to using the useState() hook, but useState is better for managing smaller amounts of state, like a form field value or button click status. useReducer() is meant for managing a greater level of state