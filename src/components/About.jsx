import React from 'react';

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
            {/* Hero Section */}
            <section className="py-20 bg-[#ffe7ef] text-[#333]">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">About Joyory Beauty</h1>
                    <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto">
                        A new-age Indian beauty brand focused on authenticity, affordability, and inclusivity.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Joyory Beauty was founded in 2025 with a simple mission — to provide high-quality beauty and skincare products that people can trust.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        As a young startup, we're committed to curating genuine products from verified suppliers and offering them through a simple, secure, and seamless online experience.
                    </p>
                    <p className="text-lg text-gray-700">
                        Our vision is to grow step by step with our customers — listening, improving, and delivering the best we can. We're grateful for your support as we build Joyory Beauty together.
                    </p>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">What We Believe In</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: '🧴',
                                title: 'Product Authenticity',
                                description: 'We only list products sourced from verified and trusted suppliers.'
                            },
                            {
                                icon: '💖',
                                title: 'Customer-Centric',
                                description: 'Every decision we make keeps your experience and feedback in mind.'
                            },
                            {
                                icon: '🌱',
                                title: 'Simple & Clean Beauty',
                                description: 'We care about safety, sustainability, and honest formulations.'
                            },
                            {
                                icon: '🛡️',
                                title: 'Secure Shopping',
                                description: 'SSL-secured site, safe payments, and transparent policies.'
                            }
                        ].map((item, index) => (
                            <div key={index} className="text-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline (optional, startup version) */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <div className="bg-pink-500 text-white p-3 rounded-full">2025</div>
                            <div>
                                <h3 className="font-semibold">Launched Joyory Beauty</h3>
                                <p className="text-gray-600">Started with a few handpicked products and a big dream.</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-purple-500 text-white p-3 rounded-full">Now</div>
                            <div>
                                <h3 className="font-semibold">Building With Love</h3>
                                <p className="text-gray-600">Actively adding new collections and features based on your feedback.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Note */}
            <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Thank You!</h2>
                    <p className="text-lg text-gray-700">
                        We're excited to grow with your support. Whether you’re here to shop, explore, or just say hello — thank you for being part of our journey.
                    </p>
                </div>
            </section>
        </div>
    );
}
