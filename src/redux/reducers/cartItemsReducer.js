import {ADD_TO_CART, REMOVE_TO_CART} from '../actions/actionTypes';

const initialState = [];

const cartItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload];
        case REMOVE_TO_CART:
            return state.filter(cartItem => cartItem.id !== action.payload.id);
    }
    return state;
};

export default cartItemsReducer;