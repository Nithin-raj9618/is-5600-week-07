import Header from './components/Header';
import CardList from './components/CardList';
import SingleView from './components/SingleView';
import Cart from './components/Cart';
import {CartProvider} from './state/CartProvider';
import productData from './data/full-products';


function App() {


  return (
    <div className="App">
      <Header />


        <Routes>
          <Route path="/" element={<CardList data={productData} />} />
          <Route path="/product/:id" element={<SingleView data={productData} />} />
        </Routes>


    <CartProvider>
    <Header />

    <Routes>
      <Route path="/" element={<CardList />} />
      <Route path="/product/:id" element={<SingleView />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders" element={<Orders />} /> 
    </Routes>
  </CartProvider>

    </div>
  );
}

export default App;