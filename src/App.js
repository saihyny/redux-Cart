import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import "./app.css";
import axios from "axios";
function App() {
  const [error, setError] = useState(false);
  const [suc, setSuc] = useState(false);
  const [errorToggle, setErrorToggle] = useState(true);
  const toggleFunc = () => {
    setErrorToggle(true);
    setTimeout(() => {
      setErrorToggle(false);
    }, 3000);
  };
  const toggel = useSelector((state) => {
    return state.ui_slice.toggle;
  });

  const data = useSelector((state) => state.cart);
  useEffect(() => {
    setError(true);
    setSuc(false)
    toggleFunc();
    axios
      .put("https://auth-cd5cd-default-rtdb.firebaseio.com/data.json", data)
      .then((data) => {
        if (data.status === 200) {
          setSuc(true);
        }
      })
      .catch((error) => {
        setError(false);
      });
  }, [data]);
  return (
    <>
      {errorToggle && (
        <div className={ error ? "loading" : 'notification-e'}>
          {!suc ? (
            <>
              <span className="spans">{error ? "sending..." : "error"}</span>
              <span className="spans">
                {error ? "sending Data to cart" : "sending faild to Cart"}
              </span>
            </>
          ) : (
            <div className="notification-s">
              <span className="spans">{"success"}</span>
              <span className="spans">{"sending   success to Cart"}</span>
            </div>
          )}
        </div>
      )}
      <Layout>
        {toggel && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
