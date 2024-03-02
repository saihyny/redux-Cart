import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
function App() {
  const toggel = useSelector((state)=>{
    return state.cart.toggle
  })
  return (
    <Layout>
     {toggel && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
