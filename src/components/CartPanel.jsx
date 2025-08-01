import React, { useState } from 'react';
import loadRazorpayScript from '../utils/loadRazorpayScript';

export default function CartPanel({ cart, setCart, isOpen, onClose }) {
    const [promoCode, setPromoCode] = useState('');
    const [discountPercent, setDiscountPercent] = useState(0);
    const [savedItems, setSavedItems] = useState([]);

    const applyPromo = () => {
        if (promoCode === 'JOY20') {
            setDiscountPercent(20);
            alert('Promo applied! 20% off');
        } else {
            setDiscountPercent(0);
            alert('Invalid promo code');
        }
    };

    const moveToSaved = (item) => {
        setSavedItems([...savedItems, item]);
        setCart(cart.filter((i) => i.id !== item.id));
    };

    const moveBackToCart = (item) => {
        setCart([...cart, item]);
        setSavedItems(savedItems.filter((i) => i.id !== item.id));
    };

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discountAmount = (total * discountPercent) / 100;
    const finalTotal = total - discountAmount;

    const handlePayment = async () => {
        const isLoaded = await loadRazorpayScript();
        if (!isLoaded) {
            alert('Failed to load Razorpay SDK');
            return;
        }

        const options = {
            key: '7nFTPv5XQUyQxkDKdkNPEgHq', // Replace with your Razorpay test key
            amount: Math.round(finalTotal * 100),
            currency: 'INR',
            name: 'Joyory Beauty',
            description: 'Test Transaction',
            handler: function (response) {
                alert(`Payment successful! ID: ${response.razorpay_payment_id}`);
                setCart([]);
            },
            prefill: {
                name: 'Test User',
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
        <div className={`fixed top-0 right-0 w-full md:w-[400px] h-full bg-white shadow-2xl transition-transform z-50 border-l border-gray-200 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex justify-between items-center px-4 py-3 border-b bg-pink-50">
                <h2 className="text-xl font-bold text-pink-600">🛍️ Your Cart</h2>
                <button onClick={onClose} className="text-gray-500 hover:text-pink-500">✖️</button>
            </div>

            <div className="p-4 space-y-4 overflow-y-auto h-[65%]">
                {cart.length === 0 ? (
                    <p className="text-gray-500 text-center mt-8">Your cart is empty. Add some beauty ✨</p>
                ) : (
                    cart.map((item) => (
                        <div key={item.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm">
                            <div>
                                <p className="font-semibold text-gray-800">{item.name}</p>
                                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                <p className="text-sm font-medium text-gray-700">₹{item.price * item.quantity}</p>
                            </div>
                            <button
                                onClick={() => moveToSaved(item)}
                                className="text-sm text-pink-500 hover:underline"
                            >
                                Save for Later
                            </button>
                        </div>
                    ))
                )}

                {savedItems.length > 0 && (
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-purple-600 mb-2">💾 Saved for Later</h3>
                        {savedItems.map((item) => (
                            <div key={item.id} className="flex justify-between items-center bg-yellow-50 p-4 rounded-lg">
                                <div>
                                    <p className="font-semibold text-gray-800">{item.name}</p>
                                    <p className="text-sm text-gray-600">₹{item.price}</p>
                                </div>
                                <button
                                    onClick={() => moveBackToCart(item)}
                                    className="text-sm text-purple-600 hover:underline"
                                >
                                    Move to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Promo Code & Summary */}
            <div className="p-4 border-t bg-gray-50 shadow-inner">
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="🎁 Enter promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <button
                        onClick={applyPromo}
                        className="w-full mt-2 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
                    >
                        Apply Promo
                    </button>
                </div>

                <div className="text-sm space-y-1 text-gray-700">
                    <p className="flex justify-between">
                        <span>Subtotal</span>
                        <span>₹{total.toFixed(2)}</span>
                    </p>
                    {discountPercent > 0 && (
                        <p className="flex justify-between text-green-600">
                            <span>Discount ({discountPercent}%)</span>
                            <span>-₹{discountAmount.toFixed(2)}</span>
                        </p>
                    )}
                    <hr />
                    <p className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>₹{finalTotal.toFixed(2)}</span>
                    </p>
                </div>

                <button
                    onClick={handlePayment}
                    className="mt-4 w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold shadow"
                >
                    🧾 Pay with Razorpay
                </button>
            </div>
        </div>
    );
}