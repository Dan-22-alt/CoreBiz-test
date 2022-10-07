import Header from './components/header/Header';
import SliderLayout from './components/slider-layout/SliderLayout';
import SliderProducts from './components/slider-products/SliderProducts';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

function App() {

  const [itemsCart, setItemsCart] = useState(0)

  return (
    <div className="App">
      <Header itemsCart={itemsCart} />
      <SliderLayout />
      <SliderProducts itemsCart={itemsCart} setItemsCart={setItemsCart} />
      <Footer />
    </div>
  );
}

export default App;
