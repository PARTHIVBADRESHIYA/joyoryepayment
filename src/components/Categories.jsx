import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function Categories({ cartContext }) {
    const location = useLocation();
    const sectionRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [sortBy, setSortBy] = useState('featured');

    const categories = [
        {
            id: 'makeup',
            name: 'Makeup',
            icon: '💄',
            description: 'Discover the perfect makeup products for every occasion',
            color: 'bg-pink-100',
            products: [
                {
                    id: 1,
                    name: 'Matte Liquid Lipstick',
                    price: 499,
                    originalPrice: 699,
                    description: 'Long-lasting, smudge-proof matte lipstick in 12 stunning shades.',
                    img: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop',
                    rating: 4.8,
                    reviews: 1247,
                    inStock: true,
                    isNew: true,
                    discount: 29
                },
                {
                    id: 2,
                    name: 'Waterproof Kajal Pencil',
                    price: 249,
                    originalPrice: 349,
                    description: 'Intense black kajal that stays put for 12+ hours.',
                    img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
                    rating: 4.7,
                    reviews: 892,
                    inStock: true,
                    isNew: false,
                    discount: 29
                },
                {
                    id: 3,
                    name: 'Foundation Stick',
                    price: 899,
                    originalPrice: 1199,
                    description: 'Buildable coverage foundation stick for flawless finish.',
                    img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop',
                    rating: 4.6,
                    reviews: 567,
                    inStock: true,
                    isNew: false,
                    discount: 25
                },
                {
                    id: 4,
                    name: 'Eyeshadow Palette',
                    price: 1299,
                    originalPrice: 1599,
                    description: '18 highly pigmented shades for endless eye looks.',
                    img: 'https://images-static.nykaa.com/media/catalog/product/f/8/f897e18KAYBE00000721_9.jpg?tr=w-500',
                    rating: 4.9,
                    reviews: 1023,
                    inStock: true,
                    isNew: true,
                    discount: 19
                }
            ]
        },
        {
            id: 'skincare',
            name: 'Skincare',
            icon: '🧴',
            description: 'Nurture your skin with our premium skincare collection',
            color: 'bg-blue-100',
            products: [
                {
                    id: 5,
                    name: 'Vitamin C Brightening Serum',
                    price: 899,
                    originalPrice: 1299,
                    description: 'Advanced formula with 20% Vitamin C for radiant skin.',
                    img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
                    rating: 4.9,
                    reviews: 2156,
                    inStock: true,
                    isNew: false,
                    discount: 31
                },
                {
                    id: 6,
                    name: 'Hyaluronic Acid Moisturizer',
                    price: 649,
                    originalPrice: 899,
                    description: 'Deeply hydrating moisturizer with hyaluronic acid.',
                    img: 'https://images-static.nykaa.com/media/catalog/product/d/9/d9720acDRSHE00000058_1a.jpg?tr=w-500',
                    rating: 4.6,
                    reviews: 1567,
                    inStock: true,
                    isNew: false,
                    discount: 28
                },
                {
                    id: 7,
                    name: 'Retinol Night Cream',
                    price: 1199,
                    originalPrice: 1499,
                    description: 'Anti-aging night cream with 0.5% retinol.',
                    img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop',
                    rating: 4.7,
                    reviews: 892,
                    inStock: true,
                    isNew: true,
                    discount: 20
                },
                {
                    id: 8,
                    name: 'Sunscreen SPF 50',
                    price: 449,
                    originalPrice: 599,
                    description: 'Broad spectrum protection with lightweight formula.',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA0Rwp6gG47XuHGq1P7NC19e1Q5XFtW7opCA&s',
                    rating: 4.8,
                    reviews: 2341,
                    inStock: true,
                    isNew: false,
                    discount: 25
                }
            ]
        },
        {
            id: 'haircare',
            name: 'Hair Care',
            icon: '💇‍♀️',
            description: 'Transform your hair with professional hair care products',
            color: 'bg-purple-100',
            products: [
                {
                    id: 9,
                    name: 'Argan Oil Hair Serum',
                    price: 599,
                    originalPrice: 799,
                    description: 'Nourishing hair serum for smooth and shiny hair.',
                    img: 'https://lordscares.com/cdn/shop/files/ArganHairSerum.jpg?v=1712142158&width=800',
                    rating: 4.7,
                    reviews: 1234,
                    inStock: true,
                    isNew: false,
                    discount: 25
                },
                {
                    id: 10,
                    name: 'Keratin Hair Mask',
                    price: 899,
                    originalPrice: 1199,
                    description: 'Deep conditioning mask for damaged hair repair.',
                    img: 'https://m.media-amazon.com/images/I/51+Td55XX7L.jpg',
                    rating: 4.8,
                    reviews: 987,
                    inStock: true,
                    isNew: true,
                    discount: 25
                },
                {
                    id: 11,
                    name: 'Heat Protectant Spray',
                    price: 349,
                    originalPrice: 449,
                    description: 'Protect your hair from heat styling damage.',
                    img: 'https://m.media-amazon.com/images/I/41ZRZg9wfJL.jpg',
                    rating: 4.6,
                    reviews: 756,
                    inStock: true,
                    isNew: false,
                    discount: 22
                },
                {
                    id: 12,
                    name: 'Bamboo Hair Brush',
                    price: 299,
                    originalPrice: 399,
                    description: 'Gentle detangling brush for all hair types.',
                    img: '	https://images.meesho.com/images/products/554541030/pjffy_1200.jpg?width=512',
                    rating: 4.5,
                    reviews: 432,
                    inStock: true,
                    isNew: false,
                    discount: 25
                }
            ]
        },
        {
            id: 'fragrances',
            name: 'Fragrances',
            icon: '🌸',
            description: 'Discover your signature scent with our luxury fragrances',
            color: 'bg-yellow-100',
            products: [
                {
                    id: 13,
                    name: 'Rose Gold Perfume',
                    price: 1499,
                    originalPrice: 1999,
                    description: 'Luxurious fragrance with notes of rose, vanilla, and sandalwood.',
                    img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop',
                    rating: 4.9,
                    reviews: 1023,
                    inStock: true,
                    isNew: false,
                    discount: 25
                },
                {
                    id: 14,
                    name: 'Ocean Breeze Body Mist',
                    price: 399,
                    originalPrice: 549,
                    description: 'Refreshing body mist with marine notes.',
                    img: 'https://aqualogica.in/cdn/shop/files/shoot_a938da08-e236-4451-94c3-cf8652f0cf2e.jpg?v=1726640760',
                    rating: 4.4,
                    reviews: 678,
                    inStock: true,
                    isNew: true,
                    discount: 27
                },
                {
                    id: 15,
                    name: 'Vanilla Dream Candle',
                    price: 599,
                    originalPrice: 799,
                    description: 'Soy wax candle with warm vanilla fragrance.',
                    img: 'https://m.media-amazon.com/images/I/61ytAXoRvGL.jpg',
                    rating: 4.7,
                    reviews: 445,
                    inStock: true,
                    isNew: false,
                    discount: 25
                },
                {
                    id: 16,
                    name: 'Lavender Room Spray',
                    price: 299,
                    originalPrice: 399,
                    description: 'Calming lavender spray for peaceful sleep.',
                    img: 'https://bsoul.in/cdn/shop/files/Serenelavender04.jpg?v=1741408618&width={width}',
                    rating: 4.6,
                    reviews: 567,
                    inStock: true,
                    isNew: false,
                    discount: 25
                }
            ]
        },
        {
            id: 'tools',
            name: 'Tools & Brushes',
            icon: '🖌️',
            description: 'Professional beauty tools for flawless application',
            color: 'bg-green-100',
            products: [
                {
                    id: 17,
                    name: 'Professional Makeup Brush Set',
                    price: 1299,
                    originalPrice: 1899,
                    description: 'Complete set of 12 professional brushes for flawless makeup.',
                    img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
                    rating: 4.8,
                    reviews: 743,
                    inStock: true,
                    isNew: true,
                    discount: 32
                },
                {
                    id: 18,
                    name: 'LED Makeup Mirror',
                    price: 2499,
                    originalPrice: 2999,
                    description: '10x magnification mirror with adjustable lighting.',
                    img: 'https://femallura.com/image/cache/catalog/femimg/b0bbpq5ydm_l1-800x800.webp',
                    rating: 4.9,
                    reviews: 456,
                    inStock: true,
                    isNew: false,
                    discount: 17
                },
                {
                    id: 19,
                    name: 'Beauty Blender Sponge',
                    price: 199,
                    originalPrice: 299,
                    description: 'Soft, blendable sponge for seamless foundation application.',
                    img: 'https://www.reneecosmetics.in/cdn/shop/files/RENE_Superblender_ListingPI_01.jpg?v=1742484944',
                    rating: 4.7,
                    reviews: 1234,
                    inStock: true,
                    isNew: false,
                    discount: 33
                },
                {
                    id: 20,
                    name: 'Eyelash Curler',
                    price: 149,
                    originalPrice: 199,
                    description: 'Professional eyelash curler for dramatic lashes.',
                    img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQWWcQ1BrdwfwaeR8DgGibOfuWBgDpGc7y2LQALmEB3Pat73EOzkzRScZnb-75XhLJZ3CQec4VfNnm_0BWLoN3_JOrslXyGhE13lxzLlZQ&usqp=CAc',
                    rating: 4.5,
                    reviews: 789,
                    inStock: true,
                    isNew: false,
                    discount: 25
                }
            ]
        }
    ];




    useEffect(() => {
        const hash = location.hash.replace('#', '');
        const categoryExists = categories.find(cat => cat.id === hash);
        if (categoryExists) {
            setSelectedCategory(hash);
            setTimeout(() => {
                sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }, [location.hash]);


    const addToCart = (product) => cartContext.addToCart(product);

    const renderStars = (rating) => '⭐'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));

    const sortProducts = (products) => {
        switch (sortBy) {
            case 'price-low': return [...products].sort((a, b) => a.price - b.price);
            case 'price-high': return [...products].sort((a, b) => b.price - a.price);
            case 'rating': return [...products].sort((a, b) => b.rating - a.rating);
            case 'newest': return [...products].sort((a, b) => (b.isNew ? -1 : 1));
            default: return products;
        }
    };

    const category = categories.find(cat => cat.id === selectedCategory);

    if (!selectedCategory || !category) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
                <section className="md:py-20 py-10 bg-gradient-to-r from-pink-400 via-purple-500 to-pink-600 text-white">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Shop by Category</h1>
                        <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto">
                            Discover our curated collection of beauty products organized by category.
                        </p>
                    </div>
                </section>
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((cat) => (
                            <div key={cat.id} onClick={() => setSelectedCategory(cat.id)}
                                className={`${cat.color} p-8 rounded-lg cursor-pointer hover:scale-105 transition-all`}>
                                <div className="text-center">
                                    <div className="text-6xl mb-4">{cat.icon}</div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{cat.name}</h3>
                                    <p className="text-gray-600 mb-2">{cat.description}</p>
                                    <div className="text-sm text-gray-500 mb-4">
                                        {cat.products.length} products available
                                    </div>
                                    <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600">
                                        Browse {cat.name}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        );
    }

    const sortedProducts = sortProducts(category.products);

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
            <section className="py-16 bg-gradient-to-r from-pink-400 via-purple-500 to-pink-600 text-white">
                <div className="max-w-7xl mx-auto px-4" ref={sectionRef}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <button onClick={() => setSelectedCategory(null)} className="text-white hover:text-pink-200">
                                ← Back to Categories
                            </button>
                            <div className="text-4xl">{category.icon}</div>
                            <div>
                                <h1 className="text-4xl font-bold">{category.name}</h1>
                                <p className="text-pink-100">{category.description}</p>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30">
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
                                    <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        NEW
                                    </div>
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
                                    <span className="text-sm text-gray-500">{category.name}</span>
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
