import classes from './CartButton.module.css';
import {useSelector,useDispatch} from 'react-redux'
import {isCartOpen} from '../../Store/cart'
const CartButton = (props) => {
  const dispatch = useDispatch()
  const toggelFunc = ()=>{
    dispatch(isCartOpen())
  }
  
  return (
    <button className={classes.button} onClick={toggelFunc}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
