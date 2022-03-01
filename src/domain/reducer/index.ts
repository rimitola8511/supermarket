import { Cart } from '../models/Cart';
import { cartService } from '../services/Cart.service';

type Action = { type: string; payload?: any };
type State = {
  cart: Cart;
  total: number;
  qty: number;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREASE': {
      const cart = cartService.addProductToCart(action.payload, state.cart);
      return {
        ...state,
        cart,
      };
    }
    case 'DECREASE': {
      const cart =
        state.cart && cartService.decreaseCart(state.cart, action.payload);
      return { ...state, cart };
    }
    case 'GET_TOTALS': {
      const qty = state.cart ? cartService.getTotalItemsInCart(state.cart) : 0;
      return { ...state, total: state.cart?.total || 0, qty };
    }
    default: {
      return { ...state };
    }
  }
};

export default reducer;
