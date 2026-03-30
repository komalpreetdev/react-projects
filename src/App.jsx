import { Suspense, useState } from 'react'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Category_List from './components/Category_List'
import Details from './components/Details'
import Cart_popup from './includes/Cart_popup'
import Checkout from './components/Checkout'



function App() {

  const [visiblePopup, setVisiblePopup] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const addCart = (product, quantity) => {

    setCartItems((prev) => {

      const existing = prev.find(item => item.id === product.id);

      if (existing) {
        return prev.map(item =>
          item.id === product.id ? {
            ...item, quantity: item.quantity + quantity
          }
            : item
        );
      }

      return [...prev, { ...product, quantity }];

    });

    setVisiblePopup(true);
  }

  const removeCart = (id) => {
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const increaseQty = (id) => {
    setCartItems(prev => prev.map(item => item.id === id ?
      { ...item, quantity: item.quantity + 1 } : item
    )

    )

  };


  const totalValue = cartItems.reduce((total, item) =>
    total + item.price * item.quantity,
    0
  );



  const dicreaseQty = (id) => {

    setCartItems(prev =>

      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item


        )
        .filter(item => item.quantity > 0)
    );



  };


  const navigate = useNavigate();

  const checkoutHandler = (items) => {
    navigate(`/checkout`, { state: { Checkout: items } })
    setVisiblePopup(false);

  }




  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/food' element={<FoodZone />} />
        <Route path='/game' element={<Game />} />
        <Route path='/contact' element={<Contact />} /> */}

        <Route path='/category/:name' element={<Category_List />} />

        <Route path='/:categoryName/:title/:productId' element={<Details addCart={addCart} />} />

        <Route path='/checkout' element={<Checkout  totalValue={totalValue}/>} />
      </Routes>

      <Cart_popup show={visiblePopup} setShow={setVisiblePopup} cartItems={cartItems} removeCart={removeCart} increaseQty={increaseQty} dicreaseQty={dicreaseQty} totalValue={totalValue} checkoutHandler={checkoutHandler} />

    </>
  )
}

export default App
