import React, { useState, useEffect } from 'react';
import './StudentProfile.css';
import { RxCross1 } from "react-icons/rx";
import { useLocation, Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';

const loadScript = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
};

const StudentProfile = () => {
    const location = useLocation();
    const { state } = location;
    const profileId = state?.profileId; // Access profileId safely using optional chaining
    const [student, setStudent] = useState({});
    const [transactions, setTransactions] = useState([]);
    const [date, setDate] = useState(new Date());
    const [attendance, setAttendance] = useState({});
    const navigate = useNavigate(); // Use the navigate hook

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                if (!profileId) {
                    console.error('Student ID is not defined');
                    return; // Exit early if profileId is not defined
                }
                console.log('Fetching data for student ID:', profileId); // Log for debugging
                const response = await fetch(`http://localhost:8080/api/profile/student?id=${profileId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setStudent(data);
                console.log(data.image);
                setTransactions(data.transactions);

                // Convert attendance dates
                const attendanceMap = {};
                data.attendances.forEach(att => {
                    const [day, month, year] = att.date.split('-');
                    const dateString = `${year}-${month}-${day}`;
                    attendanceMap[dateString] = att.status;
                });
                setAttendance(attendanceMap);
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };

        fetchStudentData();
    }, [profileId]); // Ensure profileId is included in the dependency array

    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            const dateString = date.toISOString().split('T')[0];
            if (attendance[dateString] === 'Present') {
                return 'react-calendar__tile--present';
            } else if (attendance[dateString] === 'Absent') {
                return 'react-calendar__tile--absent';
            }
        }
        return null;
    };

    const handlePayClick = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/transaction/initiateTransaction?customer_id=${profileId}&order_id=someOrderId&ammount=150`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const order = await response.json();
            const isScriptLoaded = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
            if (!isScriptLoaded) {
                console.error('Razorpay SDK failed to load.');
                return;
            }
            openRazorpayCheckout(order);
        } catch (error) {
            console.error('Error processing payment:', error);
        }
    };

    const openRazorpayCheckout = (order) => {
        const options = {
            key: 'rzp_test_KHkKUM5Faj08Ha',
            amount: order.amount,
            currency: 'INR',
            name: 'CCA ERP',
            description: 'Test Transaction',
            order_id: order.studentid,
            prefill: {
                name: student.name,
                email: 'test@example.com',
                contact: student.mobile
            },
            notes: {
                address: 'itsmanjitsharma@gmail.com'
            },
            theme: {
                color: '#3399cc'
            },
            handler: async function (response) {
                try {
                    const verificationResponse = await fetch(`http://localhost:8080/api/transaction/verifyPayment?razorpay_payment_id=${response.razorpay_payment_id}&razorpay_order_id=${response.razorpay_order_id}&razorpay_signature=${response.razorpay_signature}&amount=${order.amount}&studentid=${order.studentid}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    const verificationResult = await verificationResponse.json();
                    if (verificationResult.status === 'success') {
                        alert('Payment successful');
                        navigate('/home');
                    } else {
                        alert('Payment verification failed');
                    }
                } catch (error) {
                    console.error('Error verifying payment:', error);
                }
            },
            modal: {
                ondismiss: function () {
                    console.log('Checkout form closed');
                }
            }
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };
    return (
        <div className="StudentProfile">
            <div className="student-header">
                <h3>Student Profile</h3>
                <Link to='/home'>
                    <RxCross1 className='student-cross'/>
                </Link>
            </div>
            <div className='student-infos-container'>
                <div className="student-info">
                    <div className="images">
                        {student.image && <img src={`data:image/png;base64,${student.image}`} alt="Photo" />}
                        <div className='infos'>
                            <div className='info-item'>
                                <label>Name:</label>
                                <span>{student.name || "Manjit"}</span>
                            </div>
                            <div className='info-item'>
                                <label>Parents:</label>
                                <span>{student.parents || "Hariom"}</span>
                            </div>
                            <div className='info-item'>
                                <label>Mobile:</label>
                                <span>{student.mobile || "8153864836"}</span>
                            </div>
                            <div className='info-item'>
                                <label>B Group:</label>
                                <span>{student.bGroup || "B+"}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='address'>
                    <span>{student.address || "Manjunatha Nagar Bagalakunte Bengaluru, Arisinakunte, Karnataka 560073"}</span>
                </div>
            </div>
            <div className='transactions'>
                <div className="attendance-calendar">
                    <Calendar
                        onChange={setDate}
                        value={date}
                        tileClassName={tileClassName}
                    />
                </div>
            </div>
            <div className='transactions'>
                {Array.isArray(transactions) && transactions.map(transaction => (
                    <div key={transaction.id} className="student-transaction">
                        <div className="student-transaction-details">
                            <p className="student-transaction-amount">₹{transaction.amount}</p>
                            <p className="student-transaction-description">{transaction.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className='payment-button'>
                <button onClick={handlePayClick}>Pay here</button>
            </div>
        </div>
    );
};

export default StudentProfile;
