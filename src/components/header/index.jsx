import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { userLogOut, userLogin } from "../../redux/userReducer/userActions";
import { selectProductsCount } from "../../redux/cartReducer/cartSelectors";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer)
  const dispatch = useDispatch()  

  const productsCount = useSelector(selectProductsCount)


  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLogin = () => {
    dispatch(
      userLogin({ name: 'edson', email: 'edson@mail.com' })
    )
  }

  const handleLogOut = () => {
    dispatch(
      userLogOut()
    )
  }

  return (
    <Styles.Container>
      <Styles.Logo>Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser
          ? <div onClick={handleLogOut}>Logout</div>
          : <div onClick={handleLogin} >Login</div>
        }

        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
