//2. Create Reducer
import cartItems from "../../cart-items";

import {
	CLEAR_CART,
	REMOVE,
	INCREASE,
	DECREASE,
	GET_TOTAL,
} from "./bookAction";

const initialState = {
	cart: cartItems,
	total: 0,
	amount: 0,
};

const reducer = (state = initialState, action) => {
	if (action.type === CLEAR_CART) {
		return {
			...state,
			cart: [],
		};
	}

	if (action.type === INCREASE) {
		let newCart = state.cart.map((cartItem) => {
			if (cartItem.id === action.payload.id) {
				cartItem = { ...cartItem, amount: cartItem.amount + 1 };
			}
			return cartItem;
		});
		return {
			...state,
			cart: newCart,
		};
	}

	if (action.type === DECREASE) {
		let newCart = [];

		if (action.payload.amount === 1) {
			newCart = state.cart.filter((cartItem) => {
				return cartItem.id !== action.payload.id;
			});
		} else {
			newCart = state.cart.map((cartItem) => {
				if (cartItem.id === action.payload.id) {
					cartItem = { ...cartItem, amount: cartItem.amount - 1 };
				}
				return cartItem;
			});
		}

		return {
			...state,
			cart: newCart,
		};
	}

	if (action.type === REMOVE) {
		let newCart = state.cart.filter((cartItem) => {
			return cartItem.id !== action.payload.id;
		});

		return {
			...state,
			cart: newCart,
		};
	}

	if (action.type === GET_TOTAL) {
		let { total, amount } = state.cart.reduce(
			(cartTotal, cartItem) => {
				const { amount, price } = cartItem;
				const itemTotal = price * amount;
				cartTotal.total += itemTotal;
				cartTotal.amount += amount;
				return cartTotal;
			},
			{
				total: 0,
				amount: 0,
			}
		);

		total = parseFloat(total.toFixed(2));

		return {
			...state,
			total,
			amount,
		};
	}

	return state;
};

export default reducer;
