import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ cart, toggleCartPanel }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 text-center text-sm">
                <p>✨ Free Shipping on Orders Above ₹999 | 20% Off on First Order ✨</p>
            </div>

            {/* Main Navigation */}
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
                        <Link to="/privacy-policy" className="text-gray-700 hover:text-pink-500 font-medium">Privacy</Link>
                    </nav>

                    {/* Search Bar */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search beauty products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-64 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-pink-500">🔍</button>
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

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-gray-700 hover:text-pink-500"
                        >
                            ☰
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200 py-4">
                        <div className="space-y-4 px-4">
                            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-pink-500">Home</Link>
                            <Link to="/categories" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-pink-500">Categories</Link>
                            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-pink-500">About</Link>
                            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-pink-500">Contact</Link>
                            <Link to="/privacy-policy" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-pink-500">Privacy</Link>
                            <div className="pt-4 border-t border-gray-200">
                                <input
                                    type="text"
                                    placeholder="Search beauty products..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
