import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AllCategories({ categories }) {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 py-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-5xl font-extrabold text-pink-600 drop-shadow mb-4">
                    ✨ Explore by Category
                </h1>
                <p className="text-xl text-gray-600 mb-12">
                    Dive into our luxurious collection — handpicked just for you 💖
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(`/categories/${category.slug}`)}
                            className="rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer backdrop-blur-lg bg-white/60 border border-white hover:scale-105"
                        >
                            <div className="text-5xl mb-4">{category.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                {category.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {category.products.length} products
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
