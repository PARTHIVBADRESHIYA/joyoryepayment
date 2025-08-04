import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import categories from './data/categories.js';

export default function Navbar({ cart, toggleCartPanel }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
    const navigate = useNavigate();

    const handleSearch = () => {
        const query = searchQuery.trim().toLowerCase();

        // Match category by name
        const matchedCategory = categories.find(
            cat => cat.name.toLowerCase().includes(query)
        );
        if (matchedCategory) {
            navigate(`/categories/${matchedCategory.slug}`);
            return;
        }

        // Match product by name inside categories
        for (const category of categories) {
            const matchedProduct = category.products?.find(prod =>
                prod.name.toLowerCase().includes(query)
            );
            if (matchedProduct) {
                // Navigate to category where product lives
                navigate(`/categories/${category.slug}`);
                return;
            }
        }

        alert("No matching category or product found.");
    };

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 text-center text-sm">
                <p>✨ Free Shipping on Orders Above ₹999 | 20% Off on First Order ✨</p>
            </div>

            {/* Main Nav */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="text-3xl">✨</div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                            Joyory Beauty
                        </h1>
                    </Link>

                    {/* Desktop Links */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-pink-500 font-medium">Home</Link>
                        <Link to="/categories" className="text-gray-700 hover:text-pink-500 font-medium">Categories</Link>
                        <Link to="/about" className="text-gray-700 hover:text-pink-500 font-medium">About</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-pink-500 font-medium">Contact</Link>
                    </nav>

                    {/* Search Bar */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search beauty products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                className="w-64 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                            <button
                                onClick={handleSearch}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-pink-500"
                            >🔍</button>
                        </div>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center space-x-4">
                        <Link to="/profile" className="text-xl text-gray-700 hover:text-pink-500">👤</Link>
                        <Link to="/wishlist" className="text-xl text-gray-700 hover:text-pink-500">❤️</Link>
                        <button
                            onClick={toggleCartPanel}
                            className="relative text-xl text-gray-700 hover:text-pink-500"
                        >
                            🛒
                            {cartItemCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartItemCount}
                                </span>
                            )}
                        </button>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-gray-700 hover:text-pink-500"
                        >☰</button>
                    </div>
                </div>
            </div>
        </header>
    );
}
