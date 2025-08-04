import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            alert('Thank you for your message! We\'ll get back to you within 24 hours.');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        }, 2000);
    };

    const contactInfo = [
        {
            icon: '📧',
            title: 'Email Support',
            details: ["joyory2025@gmail.com"],
            description: 'Get help with orders and general inquiries'
        },
        {
            icon: '📞',
            title: 'Phone Support',
            details: ["+91 96011 77701"],
            description: 'Call us for urgent assistance'
        },
        {
            icon: '💬',
            title: 'Live Chat',
            details: ['Available 24/7'],
            description: 'Chat with our beauty experts'
        },
        {
            icon: '📱',
            title: 'WhatsApp',
            details: ["+91 96011 77701"],
            description: 'Message us on WhatsApp'
        }
    ];

    const officeLocations = [
        {
            city: 'Ahmedabad',
            address: 'Shop 9,Narayan Heights,Moraiya panchayat road,Changodar,Ahmedabad-382213',
            phone: '+91 96011 77701',
            hours: 'Mon-Sat: 9 AM - 6 PM'
        }
    ];

    const faqs = [
        {
            question: 'How can I track my order?',
            answer: 'You can track your order by logging into your account and visiting the "My Orders" section, or by using the tracking number sent to your email.'
        },
        {
            question: 'What is your return policy?',
            answer: 'We offer a 30-day return policy for all products in their original packaging. Some restrictions apply to certain items.'
        },
        {
            question: 'Do you ship internationally?',
            answer: 'Currently, we only ship within India. We\'re working on expanding our international shipping options.'
        },
        {
            question: 'Are your products authentic?',
            answer: 'Yes, all our products are 100% authentic and sourced directly from authorized distributors and brand partners.'
        },
        {
            question: 'How can I become a seller on Joyory?',
            answer: 'We\'re always looking for quality beauty brands to partner with. Please email us at joyory2025@gmail.com  with your brand details.'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-r from-pink-400 via-purple-500 to-pink-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
                    <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto">
                        We're here to help! Contact us for any questions about our products, orders, or beauty advice.
                    </p>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Contact Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">{info.icon}</div>
                                <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                                <div className="space-y-2 mb-3">
                                    {info.details.map((detail, idx) => (
                                        <p key={idx} className="text-pink-600 font-medium">{detail}</p>
                                    ))}
                                </div>
                                <p className="text-gray-600 text-sm">{info.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Office Locations */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="order-inquiry">Order Inquiry</option>
                                            <option value="product-question">Product Question</option>
                                            <option value="return-refund">Return & Refund</option>
                                            <option value="technical-support">Technical Support</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                        placeholder="Tell us how we can help you..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                                        isSubmitting
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-pink-500 text-white hover:bg-pink-600'
                                    }`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>

                        {/* Office Locations */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
                            <div className="space-y-6">
                                {officeLocations.map((office, index) => (
                                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                        <h3 className="text-xl font-semibold mb-3 text-pink-600">{office.city}</h3>
                                        <div className="space-y-2 text-gray-600">
                                            <p className="flex items-start">
                                                <span className="mr-2">📍</span>
                                                {office.address}
                                            </p>
                                            <p className="flex items-center">
                                                <span className="mr-2">📞</span>
                                                {office.phone}
                                            </p>
                                            <p className="flex items-center">
                                                <span className="mr-2">🕒</span>
                                                {office.hours}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold mb-3 text-gray-800">{faq.question}</h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Customer Support Hours */}
            <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-8">Customer Support Hours</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="text-4xl mb-4">📞</div>
                            <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
                            <p className="text-gray-600">Monday - Saturday</p>
                            <p className="text-gray-600 font-semibold">10:00 AM - 6:00 PM IST</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="text-4xl mb-4">💬</div>
                            <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                            <p className="text-gray-600">Available 24/7</p>
                            <p className="text-gray-600 font-semibold">Instant Response</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="text-4xl mb-4">📧</div>
                            <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                            <p className="text-gray-600">Response within</p>
                            <p className="text-gray-600 font-semibold">24 Hours</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
