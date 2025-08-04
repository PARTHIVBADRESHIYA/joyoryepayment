import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Categories({ cartContext, categories }) {
    const { slug } = useParams();
    const navigate = useNavigate();
    const sectionRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [products, setProducts] = useState([]);
    const [sortBy, setSortBy] = useState('featured');

    useEffect(() => {
        console.log("🔍 Route slug:", slug);
        console.log("📦 categories loaded in props:", categories);

        if (slug && categories && Array.isArray(categories)) {
            const matched = categories.find(cat => cat.slug === slug);
            if (matched) {
                console.log("✅ Matched category:", matched);
                setSelectedCategory(matched);
                setProducts(matched.products || []);
            } else {
                console.warn("❌ No category matched for slug:", slug);
            }
        }
    }, [slug, categories]);

    useEffect(() => {
        if (selectedCategory && sectionRef.current) {
            setTimeout(() => {
                sectionRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }, [selectedCategory]);

    const addToCart = (product) => cartContext.addToCart(product);

    const renderStars = (rating) =>
        '⭐'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));

    const sortProducts = (products) => {
        switch (sortBy) {
            case 'price-low': return [...products].sort((a, b) => a.price - b.price);
            case 'price-high': return [...products].sort((a, b) => b.price - a.price);
            case 'rating': return [...products].sort((a, b) => b.rating - a.rating);
            case 'newest': return [...products].sort((a, b) => (b.isNew ? -1 : 1));
            default: return products;
        }
    };

    if (!selectedCategory) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center py-16 bg-gradient-to-br from-pink-50 via-white to-purple-50">
                <h2 className="text-3xl font-bold text-gray-600 mb-4">No category found.</h2>
                <p className="text-gray-500">Try accessing a valid category slug.</p>
            </div>
        );
    }

    const sortedProducts = sortProducts(products);

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
            <section className="py-16 bg-[#ffe7ef] text-[#333]">
                <div className="max-w-7xl mx-auto px-4" ref={sectionRef}>
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center space-x-4">
                            <button onClick={() => navigate('/categories')} className="text-white hover:text-pink-200">
                                ← Back to Categories
                            </button>
                            <div className="text-4xl">{selectedCategory.icon}</div>
                            <div>
                                <h1 className="text-4xl font-bold">{selectedCategory.name}</h1>
                                <p className="text-pink-100">{selectedCategory.description}</p>
                            </div>
                        </div>
                        <div>
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-2 rounded-lg bg-white/20 text-black border border-white/30">
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Highest Rated</option>
                                <option value="newest">Newest First</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {sortedProducts.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-xl">
                            <div className="relative">
                                <img src={product.img} alt={product.name} className="w-full h-64 object-cover" />
                                {product.isNew && (
                                    <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">NEW</div>
                                )}
                                {product.discount > 0 && (
                                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        -{product.discount}%
                                    </div>
                                )}
                                <div className="absolute bottom-4 right-4 bg-white/90 rounded-full p-2">
                                    <button className="text-pink-500 hover:text-pink-700">❤️</button>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-gray-500">{selectedCategory.name}</span>
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
                                    className={`w-full py-3 rounded-lg font-semibold ${product.inStock ? 'bg-pink-500 hover:bg-pink-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                                >
                                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
