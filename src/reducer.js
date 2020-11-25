export const initialState = {
  basket: [],
  user: null
}

// Selector
export const getBasketTotal = (basket) => {
  return basket?.reduce((acc, curr) => acc + curr.price, 0);
}

const reducer = (state, action) => {
  // console.log(action);
  switch(action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [
          ...state.basket,
          action.item
        ]
      };
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex((item) => item.id === action.id);

      let newBasket = [...state.basket];

      if(index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Product (id: ${action.id}) not found in basket.`)
      }

      return {
        ...state,
        basket: newBasket
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  }
};

export default reducer;