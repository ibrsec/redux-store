const initialState = {
  products:  [],
  basket: JSON.parse(localStorage.getItem("basketGlobal")) || [],
};

export const takeProducts = "takeProducts";
export const ADD = "ADD";
export const DEL = "DEL";
export const EMPTY = "EMPTY";
const PLUS = "PLUS";
const MINUS = "MINUS";

export const takeProductsAction = (payload) => ({
  type: takeProducts,
  payload,
});
export const addBasket = (payload) => ({ type: ADD, payload });
export const delBasket = (payload) => ({ type: DEL, payload });
export const emptyBasket = ( ) => ({ type: EMPTY  });
export const plusBasket = ( payload) => ({ type: PLUS,payload });
export const minusBasket = (payload ) => ({ type: MINUS,payload  });

export const productReducer = (state = initialState, { type, payload }) => {
  console.log("switchdeki payload = ", payload);
  switch (type) {
    case takeProducts:
      return { ...state, products: payload };
    case ADD:
      return {
        ...state,
        basket: [...state.basket, {product:payload,quantity:1}],
      };
    case DEL:
      return {
        ...state,
        basket:state.basket.filter(item => item.product.id != payload)
      };
    case EMPTY:
      return {
        ...state,
        basket: []
      }
      case PLUS:
        const updatedBasketPlus = state.basket.map(item => {
          if(item.product.id === payload){
            return {...item,quantity:item.quantity +1}
          }else{
            return item
          }
        })
        return {...state,basket:updatedBasketPlus} 
        case MINUS:
        const updatedBasketMinus =    state.basket.map(item => {
          if(item.product.id === payload && item.quantity > 1){
            return {...item,quantity:item.quantity -1}
          }else{
            return item
          }
        })  
        return {...state,basket:updatedBasketMinus} 
    default:
      return state;
  }



  
};

//{...state, basket:state.basket.includes(payload) ? state.basket :  [...state.basket,payload]}



