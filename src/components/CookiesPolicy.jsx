import React from "react";

const CookiesPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 sm:p-12 text-gray-800">
            <h1 className="text-3xl font-bold mb-6">Cookies Policy</h1>

            <p className="mb-4">
                This Cookies Policy explains how Joyory Beauty ("we", "our", or "us")
                uses cookies and similar technologies to recognize you when you visit
                our website.
                It explains what these technologies are, why we use them, and your
                rights to control our use of them.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">What are cookies?</h2>
            <p className="mb-4">
                Cookies are small data files that are placed on your device or computer
                when you visit a website. They are widely used to make websites work, or
                to work more efficiently, as well as to provide reporting information.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">
                Why we use cookies
            </h2>
            <p className="mb-4">
                We use cookies for several reasons. Some cookies are required for
                technical reasons to operate our Website, and we refer to these as
                “essential” or “strictly necessary” cookies. Other cookies also enable
                us to track and target the interests of our users to enhance the
                experience on our Website.
            </p>

            <ul className="list-disc ml-6 mb-4">
                <li>
                    <strong>Essential cookies:</strong> These are necessary to provide
                    services available through our website.
                </li>
                <li>
                    <strong>Performance and functionality cookies:</strong> These help us
                    improve the performance and functionality of our website but are
                    non-essential.
                </li>
                <li>
                    <strong>Analytics and customization cookies:</strong> These collect
                    information to help us understand how the website is being used and
                    customize the user experience.
                </li>
                <li>
                    <strong>Advertising cookies:</strong> These are used to make
                    advertising messages more relevant to you.
                </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Third-party cookies</h2>
            <p className="mb-4">
                We may allow third parties such as Google Analytics, Facebook Pixel,
                Razorpay, and others to set cookies on your device. These third parties
                may use information about your visits to this and other websites to
                provide relevant advertisements and analyze web traffic.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Your choices</h2>
            <p className="mb-4">
                You can choose whether to accept cookies by modifying your browser
                settings. Most browsers automatically accept cookies, but you can modify
                your browser setting to decline cookies if you prefer. Note that
                disabling cookies may affect the functionality of the site.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">
                Updates to this Policy
            </h2>
            <p className="mb-4">
                We may update this Cookies Policy from time to time. When we do, we will
                revise the "Last updated" date at the top of the policy.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Contact Us</h2>
            <p className="mb-4">
                If you have any questions about our use of cookies or this policy,
                please contact us at:{" "}
                <a
                    href="mailto:support@joyorybeauty.com"
                    className="text-pink-600 underline"
                >
                    joyory2025@gmail.com
                </a>
                .
            </p>
        </div>
    );
};

export default CookiesPolicy;
