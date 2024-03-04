import { useLayoutEffect } from 'react';
import CartItem from '../cart/cart-item/Index';
import './style.css';
import { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';

const Cart = ({ items, onDecrease, onIncrease }) => {

  const { cartItems } = useContext(ProductsContext)

  const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  useLayoutEffect(() => {
    saveCartToLocalStorage(cartItems)
  }, [cartItems])

  return (
    <div>
      <div className='title'>Cart</div>
      <div className="cart">
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
          />
        ))}
      </div>
    </div>
  );

}



export default Cart;