import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import Categories from './components/Categories';
import loadRazorpayScript from './utils/loadRazorpayScript'; // ✅ import this at top
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCartPanel = () => setIsCartOpen(!isCartOpen);

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      setCart(cart.filter(item => item.id !== productId));
    } else {
      setCart(cart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      ));
    }
  };

  const cartContext = {
    cart,
    addToCart,
    updateQuantity,
    setCart
  };

  const handleRazorpayPayment = async () => {
    const res = await loadRazorpayScript('https://checkout.razorpay.com/v1/checkout.js');
  
    if (!res) {
      alert('Razorpay SDK failed to load.');
      return;
    }
  
    const amount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  
    const options = {
      key: 'rzp_test_YK2tGGnqcok3dj', // ✅ Replace with your Razorpay test key
      amount: amount * 100, // in paise
      currency: 'INR',
      name: 'Joyory Beauty',
      description: 'Test Transaction',
      handler: function (response) {
        alert(`✅ Payment successful! ID: ${response.razorpay_payment_id}`);
        setCart([]); // Clear cart after payment
        setIsCartOpen(false);
      },
      prefill: {
        name: 'Joyory Customer',
        email: 'test@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#ec4899'
      }
    };
  
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <Navbar cart={cart} toggleCartPanel={toggleCartPanel} />
        
        {/* Slide-in Cart Panel */}
        {isCartOpen && (
  <div className="fixed top-0 right-0 w-full sm:w-[400px] h-full bg-white/90 backdrop-blur-lg shadow-lg z-50 border-l border-gray-200 transition-transform duration-300">
    {/* Header */}
    <div className="p-4 border-b bg-gradient-to-r from-pink-500 to-purple-500 text-white flex justify-between items-center shadow-sm">
      <h2 className="text-lg font-semibold">🛍️ Your Bag</h2>
      <button
        onClick={toggleCartPanel}
        className="text-2xl hover:text-white/80 transition"
        title="Close"
      >
        ×
      </button>
    </div>

    {/* Cart Items */}
    <div className="p-4 space-y-6 overflow-y-auto h-[calc(100%-230px)]">
      {cart.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">Your bag is currently empty.</div>
      ) : (
        cart.map(item => (
          <div key={item.id} className="flex items-center space-x-4">
            <img
              src={item.img || 'https://via.placeholder.com/60'}
              alt={item.name}
              className="w-16 h-16 object-cover rounded border"
            />
            <div className="flex-1">
              <h4 className="font-semibold text-sm text-gray-800">{item.name}</h4>
              <p className="text-xs text-gray-500">₹{item.price} x {item.quantity}</p>
              <div className="flex items-center mt-2 space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 text-sm"
                >−</button>
                <span className="text-sm">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 text-sm"
                >+</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>


    {/* Summary & Checkout */}
    <div className="p-4 border-t bg-white">
      <div className="flex justify-between text-sm text-gray-700 mb-2">
        <span>Subtotal</span>
        <span>₹{cart.reduce((total, item) => total + item.price * item.quantity, 0)}</span>
      </div>
      <div className="flex justify-between text-sm text-gray-500 mb-2">
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between font-semibold text-md text-gray-800 mb-4">
        <span>Total</span>
        <span>₹{cart.reduce((total, item) => total + item.price * item.quantity, 0)}</span>
      </div>
      <button
  onClick={handleRazorpayPayment}
  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition"
>
  Pay with Razorpay
</button>

    </div>
  </div>
)}

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home cartContext={cartContext} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/categories" element={<Categories cartContext={cartContext} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
