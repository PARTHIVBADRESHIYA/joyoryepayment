import React, { useState } from 'react';

export default function Privacy() {
    const [activeModal, setActiveModal] = useState(null);

    const privacySections = [
        {
            title: 'Information We Collect',
            content: [
                'Personal Details: Full name, email address, phone number, shipping/billing addresses, and payment information when you make a purchase.',
                'Account Credentials: Username, password (encrypted), and profile preferences when you register or update your account.',
                'Transaction Details: Order history, saved addresses, applied coupons, and payment methods (including Razorpay UPI or card-based payments).',
                'Usage Information: IP address, device type, operating system, browser, pages visited, and session activity to enhance user experience.',
                'Communication History: Messages sent to our support team, email inquiries, chat interactions, and support call logs.'
            ]
        },
        {
            title: 'How We Use Your Information',
            content: [
                'To fulfill your orders and deliver products as requested.',
                'To process secure payments via third-party gateways such as Razorpay.',
                'To send order status updates, transactional emails, and delivery alerts.',
                'To respond to your support requests, product inquiries, or returns.',
                'To improve website functionality and tailor shopping recommendations.',
                'To comply with applicable laws including tax, fraud prevention, and consumer protection.'
            ]
        },
        {
            title: 'Information Sharing',
            content: [
                'We do not sell or rent your personal information to third parties.',
                'We may share limited data with payment partners such as Razorpay to facilitate secure payment processing.',
                'Third-party logistics (e.g., Shiprocket) may receive address and contact details to complete deliveries.',
                'We may disclose data to legal authorities if required by law or for fraud prevention.',
                'In the event of a business restructure or acquisition, your data may be part of the transferred assets.'
            ]
        },
        {
            title: 'Data Security',
            content: [
                'We use industry-standard encryption (SSL) and secure servers to protect your data.',
                'Payment details are processed securely through PCI-compliant platforms like Razorpay and are not stored on our servers.',
                'Our infrastructure includes firewalls, restricted access control, and security audits.',
                'Access to your personal information is limited to authorized personnel under confidentiality obligations.'
            ]
        },
        {
            title: 'Your Rights',
            content: [
                'Access: Request a copy of personal data we hold.',
                'Rectification: Update incorrect or outdated information.',
                'Erasure: Request deletion of your data where legally applicable.',
                'Objection: Object to processing for marketing purposes.',
                'Withdraw Consent: Opt-out of promotional communication or data collection (such as cookies).'
            ]
        },
        {
            title: 'Cookies and Tracking',
            content: [
                'We use cookies and similar technologies to personalize your shopping experience.',
                'Strictly necessary cookies ensure site functionality (e.g., cart, login).',
                'Performance cookies help us measure site traffic and performance.',
                'Marketing cookies allow us to show you personalized ads through platforms like Google or Facebook.',
                'You can manage cookie preferences through your browser settings or our Cookie Banner.'
            ]
        }
    ];

    const modals = {
        terms: {
            title: 'Terms of Service',
            body: `By using Joyory's services, you agree to abide by our terms and policies. This includes compliance with all applicable laws and refraining from misuse of our platform or intellectual property. Joyory reserves the right to modify services, suspend accounts for violations, and update terms without prior notice.`
        },
        refund: {
            title: 'Refund & Shipping Policy',
            body: `We aim to dispatch products within 2–4 working days. Returns are accepted within 7 days of delivery if products are unused and in original packaging. Refunds are processed to the original payment method within 5–7 business days after inspection. Shipping fees are non-refundable except in cases of wrong or damaged items.`
        },
        rights: {
            title: 'Data Protection Rights',
            body: `You have rights under data protection laws, including the right to access, rectify, erase, restrict processing, object to processing, and data portability. You may also withdraw consent at any time. Requests can be made via privacy@joyory.in.`
        },
        security: {
            title: 'Security Measures',
            body: `Joyory implements SSL encryption, PCI-compliant payment processors, firewall protection, and access controls. We regularly update our systems, limit data access to essential personnel, and conduct security audits to ensure your data remains safe.`
        }
    };

    const contactInfo = [
        {
            method: 'Email',
            details: "joyory2025@gmail.com",
            description: 'For privacy-related inquiries and data requests'
        },
        {
            method: 'Phone',
            details: "+91 96011 77701",
            description: 'Call us for urgent privacy concerns'
        },
        {
            method: 'Address',
            details: 'Shop 9,Narayan Heights,Moraiya panchayat road,Changodar,Ahmedabad-382213',
            description: 'Write to us for formal privacy requests'
        }
    ];

    const Modal = ({ title, body, onClose }) => (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 overflow-y-auto">
            <div className="bg-white rounded-xl p-8 max-w-2xl shadow-xl">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="text-gray-700 whitespace-pre-line mb-6">{body}</p>
                <button onClick={onClose} className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700">Close</button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
            <section className="py-20 bg-gradient-to-r from-pink-400 via-purple-500 to-pink-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
                    <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto">
                        Your privacy is important to us. Learn how we collect, use, and protect your personal information.
                    </p>
                    <p className="text-pink-200 mt-4">Last updated: January 2025</p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Our Commitment to Privacy</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            At Joyory Beauty, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            By using our services, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {privacySections.map((section, index) => (
                            <div key={index} className="bg-gray-50 p-8 rounded-lg">
                                <h3 className="text-2xl font-bold mb-6 text-gray-800">{section.title}</h3>
                                <ul className="space-y-3">
                                    {section.content.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-pink-500 mr-3 mt-1">•</span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-gradient-to-r from-pink-100 to-purple-100 p-8 rounded-lg">
                        <h3 className="text-2xl font-bold mb-6">Data Retention</h3>
                        <p className="text-gray-700 mb-4">
                            We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. The retention period depends on the type of information and the purpose for which it was collected.
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Account information: Retained while your account is active</li>
                            <li>• Order information: Retained for 7 years for tax and legal purposes</li>
                            <li>• Marketing communications: Retained until you unsubscribe</li>
                            <li>• Website analytics: Retained for 2 years</li>
                        </ul>
                        <p className="text-sm text-gray-500 mt-2">
                            Payment details (e.g., Razorpay transaction IDs) are retained securely and only as long as required for tax and regulatory purposes.
                        </p>
                    </div>

                    <div className="mt-12 bg-yellow-50 p-8 rounded-lg">
                        <h3 className="text-2xl font-bold mb-6">Children's Privacy</h3>
                        <p className="text-gray-700 mb-2">
                            Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
                        </p>
                        <p className="text-gray-700">
                            If you are a parent or guardian and believe your child has provided us with personal information, please contact us at joyory2025@gmail.com . We will take prompt action to delete such data.
                        </p>
                    </div>

                    <div className="mt-12 bg-blue-50 p-8 rounded-lg">
                        <h3 className="text-2xl font-bold mb-6">International Data Transfers</h3>
                        <p className="text-gray-700">
                            Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and that your information receives adequate protection wherever it is processed.
                        </p>
                    </div>

                    <div className="mt-12 bg-green-50 p-8 rounded-lg">
                        <h3 className="text-2xl font-bold mb-6">Changes to This Privacy Policy</h3>
                        <p className="text-gray-700">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
                    <p className="text-lg text-gray-700 text-center mb-8">
                        If you have any questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {contactInfo.map((contact, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg text-center shadow-lg">
                                <h3 className="text-xl font-semibold mb-3">{contact.method}</h3>
                                <p className="text-pink-600 font-medium mb-2">{contact.details}</p>
                                <p className="text-gray-600 text-sm">{contact.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Additional Resources</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Terms of Service</h3>
                            <p className="text-gray-700 mb-4">Learn about the terms and conditions that govern your use of our website and services.</p>
                            <button onClick={() => setActiveModal('terms')} className="text-pink-600 hover:text-pink-700 font-medium">Read Terms of Service →</button>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Refund & Shipping Policy</h3>
                            <p className="text-gray-700 mb-4">How we handle deliveries, returns, and refunds for your orders.</p>
                            <button onClick={() => setActiveModal('refund')} className="text-pink-600 hover:text-pink-700 font-medium">Read Refund Policy →</button>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Data Protection Rights</h3>
                            <p className="text-gray-700 mb-4">Understand your rights regarding your personal data and how to exercise them.</p>
                            <button onClick={() => setActiveModal('rights')} className="text-pink-600 hover:text-pink-700 font-medium">Learn More →</button>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Security Measures</h3>
                            <p className="text-gray-700 mb-4">Information about the security measures we implement to protect your data.</p>
                            <button onClick={() => setActiveModal('security')} className="text-pink-600 hover:text-pink-700 font-medium">Security Details →</button>
                        </div>
                    </div>
                </div>
            </section>

            {activeModal && (
                <Modal
                    title={modals[activeModal].title}
                    body={modals[activeModal].body}
                    onClose={() => setActiveModal(null)}
                />
            )}
        </div>
    );
}
