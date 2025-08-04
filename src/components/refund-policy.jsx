import React from 'react';

const RefundPolicy = () => (
    <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Shipping & Refund Policy</h1>

        {/* SHIPPING POLICY */}
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Shipping Policy</h2>
        <p className="mb-4">
            At Joyory Beauty, we strive to ensure timely and safe delivery of your favorite beauty and skincare products across India. All orders are shipped using our trusted logistics partners.
        </p>
        <ul className="list-disc list-inside mb-4">
            <li><strong>Dispatch Time:</strong> Orders are typically dispatched within 1–2 working days of successful payment confirmation.</li>
            <li><strong>Delivery Time:</strong> Expected delivery is within 4–7 working days depending on your location. Delivery timelines may vary during holidays, sales, or peak periods.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Shipping Charges</h2>
        <ul className="list-disc list-inside mb-4">
            <li><strong>Prepaid Orders:</strong> Free shipping for all orders above ₹499.</li>
            <li><strong>Orders Below ₹499:</strong> A standard shipping fee of ₹49 will be applied.</li>
            <li><strong>Cash on Delivery (COD):</strong> Available with an additional ₹30 handling charge.</li>
        </ul>

        {/* TRACKING */}
        <h2 className="text-xl font-semibold mt-6 mb-2">3. Order Tracking</h2>
        <p className="mb-4">
            Once your order is shipped, you will receive a tracking link via email and/or SMS. You can also track the status of your order anytime from your Joyory Beauty account under the “My Orders” section.
        </p>

        {/* RETURNS AND REPLACEMENTS */}
        <h2 className="text-xl font-semibold mt-6 mb-2">4. Return & Replacement Policy</h2>
        <p className="mb-4">
            Due to hygiene and safety reasons, we do not accept returns or replacements once the product is opened or used.
            However, we are happy to offer a replacement or refund in the following scenarios:
        </p>
        <ul className="list-disc list-inside mb-4">
            <li>You received a damaged, defective, or expired product</li>
            <li>You received an incorrect item</li>
            <li>Your order is missing items</li>
        </ul>
        <p className="mb-4">
            In such cases, please raise a return request within <strong>48 hours</strong> of order delivery by emailing us at <strong>joyory2025@gmail.com</strong> with photos of the package/product and your order ID.
        </p>

        {/* RETURN CONDITIONS */}
        <h2 className="text-xl font-semibold mt-6 mb-2">5. Return Conditions</h2>
        <ul className="list-disc list-inside mb-4">
            <li>Product must be unused, unopened, and in its original packaging</li>
            <li>Return request must be raised within 48 hours of delivery</li>
            <li>Returns are subject to inspection and verification by our team</li>
        </ul>

        {/* REFUNDS */}
        <h2 className="text-xl font-semibold mt-6 mb-2">6. Refund Process</h2>
        <p className="mb-4">
            Once the returned product is received and passes quality checks, the refund will be processed within 5–7 working days.
        </p>
        <ul className="list-disc list-inside mb-4">
            <li><strong>Prepaid Orders:</strong> Refunds are credited back to the original payment method (credit/debit card, UPI, etc.)</li>
            <li><strong>COD Orders:</strong> Refunds are issued via UPI or bank transfer (details to be provided at time of request)</li>
        </ul>

        {/* FINAL NOTES */}
        <h2 className="text-xl font-semibold mt-6 mb-2">7. Cancellation Policy</h2>
        <p className="mb-4">
            Orders can only be cancelled before they are dispatched. Once shipped, cancellations are not allowed. For assistance, contact our support team as soon as possible.
        </p>

        <p className="mt-6">
            For any concerns or support, reach out to our team at <strong>joyory2025@gmail.com</strong> and we’ll be happy to help you.
        </p>
    </div>
);

export default RefundPolicy;
