import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        setEmail('');
    };

    const footerSections = [
        {
            title: 'Shop',
            links: [
                { name: 'Makeup', href: '/categories#makeup' },
                { name: 'Skincare', href: '/categories#skincare' },
                { name: 'Hair Care', href: '/categories#haircare' },
                { name: 'Fragrances', href: '/categories#fragrances' }
            ]
        },
        {
            title: 'Customer Service',
            links: [
                { name: 'Contact Us', href: '/contact' },
                { name: 'Returns & Exchanges', href: '/refund-policy' },
                { name: 'Shipping Info', href: '/refund-policy' }
            ]
        },
        {
            title: 'About Joyory',
            links: [
                { name: 'Our Story', href: '/about' },
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Cookie Policy', href: '/privacy-policy#cookie-policy' },
            ]
        }
    ];

    const paymentMethods = ['💳', '🏦', '📱', '💻', '📧', '🏪'];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="text-3xl">✨</div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                                Joyory Beauty
                            </h3>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Your trusted destination for authentic beauty products. We bring you the finest cosmetics,
                            skincare, and beauty tools from around the world, delivered right to your doorstep.
                        </p>

                        <div className="mb-6">
                            <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
                            <form onSubmit={handleNewsletterSubmit} className="flex">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-pink-500 text-white rounded-r-lg hover:bg-pink-600 transition-colors"
                                >
                                    Subscribe
                                </button>
                            </form>
                            <p className="text-xs text-gray-400 mt-2">
                                Get beauty tips, new product alerts, and exclusive offers
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
                        </div>
                    </div>

                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        {link.href.startsWith('/') ? (
                                            <a
                                                href={link.href}
                                                className="text-gray-300 hover:text-pink-400 transition-colors text-sm"
                                            >
                                                {link.name}
                                            </a>
                                        ) : (
                                            <a
                                                href={link.href}
                                                className="text-gray-300 hover:text-pink-400 transition-colors text-sm"
                                            >
                                                {link.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-400 text-sm">
                            © 2025 Joyory Beauty. All rights reserved.
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-400 text-sm mr-2">We Accept:</span>
                            {paymentMethods.map((method, index) => (
                                <span key={index} className="text-xl" title="Payment Method">
                                    {method}
                                </span>
                            ))}
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <Link to="/privacy-policy" className="text-gray-400 hover:text-pink-400 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="text-gray-400 hover:text-pink-400 transition-colors">
                                Terms of Service
                            </Link>
                            <Link to="/privacy-policy#cookie-policy" className="text-gray-400 hover:text-pink-400 transition-colors">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-800 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center items-center space-x-8 text-gray-400">
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl">🔒</span>
                            <span className="text-sm">SSL Secured</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl">✅</span>
                            <span className="text-sm">100% Authentic</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl">🚚</span>
                            <span className="text-sm">Free Shipping</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl">🔄</span>
                            <span className="text-sm">Easy Returns</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl">💬</span>
                            <span className="text-sm">24/7 Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
