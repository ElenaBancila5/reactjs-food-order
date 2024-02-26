import { useState} from "react";

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsSwhown] = useState(false);
  function showCartHandler(){
    setCartIsSwhown(true)
  }

  function hideCartHandler(){
    setCartIsSwhown(false)
  }
  return (
    <CartProvider>
      {cartIsShown && <div>Cart...</div>}
      <Header onShowCart = {showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
