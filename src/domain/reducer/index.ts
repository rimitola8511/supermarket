import { Cart } from '../models/Cart';
import { cartService } from '../services/Cart.service';

type Action = { type: string; payload?: any };
type State = {
  loading: boolean;
  cart: Cart;
  total: number;
  qty: number;
};

const reducer = (state: State, action: Action): State => {
  if (action.type === 'INCREASE') {
    const cart = cartService.addProductToCart(action.payload, state.cart);
    console.log('INCREASE', cart);
    return {
      ...state,
      cart,
    };
  }
  if (action.type === 'DECREASE') {
    const cart =
      state.cart && cartService.decreaseCart(state.cart, action.payload);
    return { ...state, cart };
  }
  if (action.type === 'GET_TOTALS') {
    const qty = state.cart ? cartService.getTotalItemsInCart(state.cart) : 0;
    return { ...state, total: state.cart?.total || 0, qty };
  }
  return { ...state };
};

export default reducer;
