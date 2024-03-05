import classes from './CartButton.module.css';
import {useSelector,useDispatch} from 'react-redux'
import {isCartOpen} from '../../Store/ui-slice'
const CartButton = (props) => {
  const totalItems = useSelector((state)=>state.cart.totalQuantity)
  console.log(totalItems)
  const dispatch = useDispatch()
  const toggelFunc = ()=>{
    dispatch(isCartOpen())
  }
  
  return (
    <button className={classes.button} onClick={toggelFunc}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
