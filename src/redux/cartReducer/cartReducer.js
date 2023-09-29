import cartActionTypes from "./cartActionTypes"
const initialState = {
  products: []
}


const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add Product
    case cartActionTypes.ADD_PRODUCT:
      const productIsAlreadyInCart = state.products.some(
        product => product.id === action.payload.id
      )
      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          )
        }
      }
      return {
        ...state, products: [...state.products, { ...action.payload, quantity: 1 }]
      }
    // Remove Product
    case cartActionTypes.REMOVE_PRODUCT:
      return {
        ...state, products: state.products.filter(product => product.id !== action.payload)
      }
    // Increase Product quantity
    case cartActionTypes.INCREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      }
    // Decrease Product Quantity
    case cartActionTypes.DECREASE_PRODUCT_QUANTITY:

      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter(product => product.quantity > 0)
      }

    default:
      return state
  }
}

export default cartReducer;