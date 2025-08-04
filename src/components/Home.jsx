import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
    {
        id: 1,
        name: 'Matte Liquid Lipstick',
        price: 499,
        originalPrice: 699,
        description: 'Long-lasting, smudge-proof matte lipstick in 12 stunning shades. Perfect for all-day wear.',
        img: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop',
        category: 'Makeup',
        rating: 4.8,
        reviews: 1247,
        inStock: true,
        isNew: true,
        discount: 29
    },
    {
        id: 2,
        name: 'Vitamin C Brightening Serum',
        price: 899,
        originalPrice: 1299,
        description: 'Advanced formula with 20% Vitamin C for radiant, even-toned skin. Suitable for all skin types.',
        img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
        category: 'Skincare',
        rating: 4.9,
        reviews: 2156,
        inStock: true,
        isNew: false,
        discount: 31
    },
    {
        id: 3,
        name: 'Waterproof Kajal Pencil',
        price: 249,
        originalPrice: 349,
        description: 'Intense black kajal that stays put for 12+ hours. Perfect for creating dramatic eye looks.',
        img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
        category: 'Makeup',
        rating: 4.7,
        reviews: 892,
        inStock: true,
        isNew: false,
        discount: 29
    },
    {
        id: 4,
        name: 'Hyaluronic Acid Moisturizer',
        price: 649,
        originalPrice: 899,
        description: 'Deeply hydrating moisturizer with hyaluronic acid. Provides 24-hour hydration.',
        img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
        category: 'Skincare',
        rating: 4.6,
        reviews: 1567,
        inStock: true,
        isNew: false,
        discount: 28
    },
    {
        id: 5,
        name: 'Professional Makeup Brush Set',
        price: 1299,
        originalPrice: 1899,
        description: 'Complete set of 12 professional brushes for flawless makeup application.',
        img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
        category: 'Tools & Brushes',
        rating: 4.8,
        reviews: 743,
        inStock: true,
        isNew: true,
        discount: 32
    },
    {
        id: 6,
        name: 'Rose Gold Perfume',
        price: 1499,
        originalPrice: 1999,
        description: 'Luxurious fragrance with notes of rose, vanilla, and sandalwood. Long-lasting scent.',
        img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop',
        category: 'Fragrances',
        rating: 4.9,
        reviews: 1023,
        inStock: true,
        isNew: false,
        discount: 25
    }
];

const categories = [
    { name: 'Makeup', icon: '💄', count: 156, color: 'bg-pink-100' },
    { name: 'Skincare', icon: '🧴', count: 89, color: 'bg-blue-100' },
    { name: 'Hair Care', icon: '💇‍♀️', count: 67, color: 'bg-purple-100' },
    { name: 'Fragrances', icon: '🌸', count: 34, color: 'bg-yellow-100' },
    { name: 'Tools & Brushes', icon: '🖌️', count: 45, color: 'bg-green-100' }
];

const testimonials = [
    {
        name: 'Priya Sharma',
        rating: 5,
        comment: 'Amazing quality products! The lipstick stays on for hours and the customer service is excellent.',
        avatar: '👩‍🦰'
    },
    {
        name: 'Anjali Patel',
        rating: 5,
        comment: 'Best beauty website I\'ve found. Fast delivery and authentic products. Highly recommended!',
        avatar: '👩‍🦱'
    },
    {
        name: 'Meera Reddy',
        rating: 5,
        comment: 'Love their skincare range. My skin has never looked better. Thank you Joyory!',
        avatar: '👩‍🦳'
    }
];

export default function Home({ cartContext }) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const navigate = useNavigate();

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(p => p.category === selectedCategory);

    const addToCart = (product) => {
        cartContext.addToCart(product);
    };

    const renderStars = (rating) => {
        return '⭐'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-pink-400 via-purple-500 to-pink-600 text-white py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-center md:text-left">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                Discover Your
                                <span className="block text-pink-200">Natural Beauty</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-pink-100 mb-8 max-w-xl">
                                Premium cosmetics and skincare products that enhance your natural beauty.
                                Shop authentic brands with free shipping on orders above ₹999.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <button
                                    onClick={() => navigate('/categories')}
                                    className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition"
                                >
                                    Shop Now
                                </button>
                                <button
                                    onClick={() => navigate('/categories')}
                                    className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition"
                                >
                                    View Categories
                                </button>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="w-full aspect-[4/3] relative overflow-hidden rounded-xl shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1581093588401-10c8d5c5e7d8?auto=format&fit=crop&w=1200&q=80"
                                alt="Joyory Beauty Collection"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/50 to-purple-500/50 backdrop-blur-sm" />
                            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Welcome to Joyory Beauty</h2>
                                <p className="text-sm sm:text-base max-w-md">
                                    Unveil your natural glow with the finest cosmetics, skincare, and fragrances.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            {/* Categories Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className={`${category.color} p-6 rounded-lg text-center cursor-pointer hover:scale-105 transition-transform`}
                            >
                                <div className="text-4xl mb-3">{category.icon}</div>
                                <h3 className="font-semibold text-gray-800">{category.name}</h3>
                                <p className="text-sm text-gray-600">{category.count} products</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-between items-center gap-4 mb-12">
                        <h2 className="text-3xl font-bold">Featured Products</h2>
                        <div className="flex flex-wrap gap-2">
                            {['All', 'Makeup', 'Skincare', 'Tools & Brushes', 'Fragrances'].map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === cat
                                        ? 'bg-pink-500 text-white'
                                        : 'bg-white text-gray-600 hover:bg-pink-50'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <div className="relative">
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="w-full h-64 object-cover"
                                    />
                                    {product.isNew && (
                                        <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            NEW
                                        </div>
                                    )}
                                    {product.discount > 0 && (
                                        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            -{product.discount}%
                                        </div>
                                    )}
                                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                                        <button className="text-pink-500 hover:text-pink-700">❤️</button>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-500">{product.category}</span>
                                        <div className="flex items-center">
                                            <span className="text-yellow-400 text-sm">{renderStars(product.rating)}</span>
                                            <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-xl font-bold text-gray-800">₹{product.price}</span>
                                            {product.originalPrice > product.price && (
                                                <span className="text-gray-400 line-through">₹{product.originalPrice}</span>
                                            )}
                                        </div>
                                        <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                                        </span>
                                    </div>

                                    <button
                                        onClick={() => addToCart(product)}
                                        disabled={!product.inStock}
                                        className={`w-full py-3 rounded-lg font-semibold transition-colors ${product.inStock
                                            ? 'bg-pink-500 text-white hover:bg-pink-600'
                                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            }`}
                                    >
                                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg">
                                <div className="flex items-center mb-4">
                                    <div className="text-3xl mr-3">{testimonial.avatar}</div>
                                    <div>
                                        <h4 className="font-semibold">{testimonial.name}</h4>
                                        <div className="text-yellow-400 text-sm">{renderStars(testimonial.rating)}</div>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Joyory Beauty?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl mb-4">🚚</div>
                            <h3 className="font-semibold mb-2">Free Shipping</h3>
                            <p className="text-gray-600">On orders above ₹999</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-4">✅</div>
                            <h3 className="font-semibold mb-2">Authentic Products</h3>
                            <p className="text-gray-600">100% genuine products</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-4">🔄</div>
                            <h3 className="font-semibold mb-2">Easy Returns</h3>
                            <p className="text-gray-600">30-day return policy</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-4">💬</div>
                            <h3 className="font-semibold mb-2">24/7 Support</h3>
                            <p className="text-gray-600">Always here to help</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

