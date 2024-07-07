import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';

const QRCodeComponent = ({ paymentId }) => {
    const [payment, setPayment] = useState(null);

    useEffect(() => {
        const fetchPaymentDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/payments/${paymentId}`);
                if (response.ok) {
                    const data = await response.json();
                    setPayment(data);
                } else {
                    console.error('Failed to fetch payment details');
                }
            } catch (error) {
                console.error('Error fetching payment details:', error);
            }
        };

        fetchPaymentDetails();
    }, [paymentId]);

    if (!payment) {
        return <div>Loading...</div>;
    }

    const paymentUrl = `http://localhost:8080/api/payments/${paymentId}`;

    return (
        <div>
            <h3>Pay Fees</h3>
            <p>{payment.description}</p>
            <p>Amount: ${payment.amount}</p>
            <QRCode value={paymentUrl} />
        </div>
    );
};

export default QRCodeComponent;
