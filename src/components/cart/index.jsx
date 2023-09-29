// Styles
import { selectProductsTotalPrice } from "../../redux/cartReducer/cartSelectors";
import CartItem from "../cart-item";
import * as Styles from "./styles";
import { useSelector } from 'react-redux'

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);
  const { products } = useSelector(rootReducer => rootReducer.cartReducer);
  const totalPrice = useSelector(selectProductsTotalPrice)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {products.map(product => <CartItem key={product.id} product={product} />)}

        <Styles.CartTotal>Total R$ {totalPrice}</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
