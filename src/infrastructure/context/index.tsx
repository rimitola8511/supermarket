import { useContext, useEffect, useReducer, createContext } from 'react';
import { Product } from '../../domain/models/Product';
import reducer from '../../domain/reducer';
import { Cart } from '../../domain/models/Cart';

export interface AppContextInterface {
  loading: boolean;
  cart: Cart;
  qty: number;
  total: number;
}

type AppProviderProps = {
  children: React.ReactNode;
};

const initialState: AppContextInterface = {
  loading: false,
  cart: { id: '1', items: [], total: 0 },
  qty: 0,
  total: 0,
};

const AppContext = createContext({
  ...initialState,
  increase: (product: Product) => {},
  decrease: (product: Product) => {},
});

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increase = (product: Product): void => {
    dispatch({ type: 'INCREASE', payload: product });
  };

  const decrease = (product: Product): void => {
    dispatch({ type: 'DECREASE', payload: product });
  };

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);

  return (
    <AppContext.Provider value={{ ...state, increase, decrease }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
