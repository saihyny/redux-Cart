import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { getThedata } from "./Store/ui-slice";
import axios from "axios";
import "./app.css";
import { showNotification as notificationAction  } from "./Store/ui-slice";
let initialState = false;
function App() {
  const notification = useSelector((state)=>state.ui_slice.notification)
  const [showNotification, setShowNotification] = useState(false);
 
  const toggel = useSelector((state) => state.ui_slice.toggle);
  const data = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    let timer;

    if (!initialState) {
      dispatch(getThedata());
      initialState = true;
    }

    const sendData = async () => {
      try {
        
        const response = await axios.put(
          "https://auth-cd5cd-default-rtdb.firebaseio.com/data.json",
          data
        );
        if (response.status === 200) {
          dispatch(notificationAction({
            status:'success',
            title:'send data to cart was success',
            message:'add more'
          }))
        } else {
        }
      } catch (error) {
        dispatch(notificationAction({
          status:'error',
          title:'send data to cart was Unsuccess',
          message:'please try again after '
        }))
      }
    };

    if (data.items.length === 0 || data.items === undefined) {
    } else {
      sendData();
    }
    if(notification){
      setShowNotification(true)
      setTimeout(()=>{
        setShowNotification(false)
      },3000)
    } 

    return () => {
      clearTimeout(timer);
    };
  }, [data]);

  return (
    <>
      {showNotification && <StatusIndicator status={notification} />}
      <Layout>
        {toggel && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;

// StatusIndicator component
const StatusIndicator = ( {status} ) => {
  switch (status.status) {
    case "loading":
      return (
        <div className="loading">
          <div className="loading-container">
            <div className="loading-bar">
              <div className="loading-bar">
                <h4 className="spans">{status.title} </h4>
              </div>
            </div>
          </div>
        </div>
      );
    case "error":
      return (
        <div className="loading">
          <div className="loading-container">
            <div className="loading-bar">
              <div className="notification-e">
                <h4 className="spans">{status.title}</h4>
              </div>
            </div>
          </div>
        </div>
      );
    case "success":
      return (
        <div className="loading">
          <div className="loading-container">
            <div className="loading-bar">
              <div className="notification-s">
                <h4 className="spans">{status.title}</h4>
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};
