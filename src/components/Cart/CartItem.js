import classes from './CartItem.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../Store/cart-slice';
const CartItem = (props) => {
  const dispatch = useDispatch()
  const { title, quantity, total, price } = props.item;
  const items = useSelector((state)=>state.cart.items)

  console.log(items)
  return (
    items.map((item)=>(
      <li className={classes.item} key={item.id}>
      <header>
        <h3>{item.title}</h3>
        <div className={classes.price}>
          ${item.total}{' '}
          <span className={classes.itemprice}>(${item.price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{item.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={()=>dispatch(removeItemFromCart(item.id))}>-</button>
          <button onClick={()=>{
            dispatch(addItemToCart(item))
          }}>+</button>
        </div>
      </div>
    </li>
    ))
  );
};

export default CartItem;
