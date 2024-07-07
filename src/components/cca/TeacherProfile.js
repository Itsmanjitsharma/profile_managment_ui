import React, { useState } from 'react';
import './TeacherProfile.css';
import { IoIosArrowBack } from "react-icons/io";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { GrTransaction } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";


const TeacherProfile = () => {
    const [date, setDate] = useState(new Date());
    const [attendance, setAttendance] = useState({
        '2024-06-15': 'present',
        '2024-06-14': 'absent',
        // Add more dates with attendance status
    });

    const redDates = [
        // Add more dates here
    ];

    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            const dateString = date.toISOString().split('T')[0];
            if (attendance[dateString] === 'present') {
                return 'react-calendar__tile--present';
            } else if (attendance[dateString] === 'absent') {
                return 'react-calendar__tile--absent';
            } else if (redDates.includes(dateString)) {
                return 'react-calendar__tile--red';
            }
        }
        return null;
    };

    const transactions = [
        { id: 1, amount: 3000, description: 'Transaction done for 3000' },
        { id: 2, amount: 1500, description: 'Transaction done for 1500' },
        { id: 3, amount: 4500, description: 'Transaction done for 4500' },
        // Add more transactions here
    ];

    return (
        <div className="TeacherProfile">
            <div className="header">
                <div className="IoIosArrowBack">
                    <IoIosArrowBack />
                </div>
                <div className="profileheader">
                    Teacher Profile
                </div>
                <div className="IoIosArrowBack">
                    <IoMdAdd />
                </div>
            </div>
            <div className="teacher-info">
                <div className="images">
                    <img src="https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2023/12/408811690_1032494231332849_276092564573163609_n.jpeg?size=*:900" alt="Profile" />
                    <div className='infos'>
                        <div className='info-item'>
                            <label>Name:</label>
                            <span>Manjit</span>
                        </div>
                        <div className='info-item'>
                            <label>Parents:</label>
                            <span>Hariom</span>
                        </div>
                        <div className='info-item'>
                            <label>Mobile:</label>
                            <span>8153864836</span>
                        </div>
                        <div className='info-item'>
                            <label>B Group:</label>
                            <span>B+</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='address'>
                <span>Manjunatha Nagar Bagalakunte Bengaluru, Arisinakunte, Karnataka 560073</span>
            </div>
            <div className="attendance-calendar">
                <Calendar
                    onChange={setDate}
                    value={date}
                    tileClassName={tileClassName}
                />
            </div>
            {transactions.map(transaction => (
                <div key={transaction.id} className="transaction">
                    <GrTransaction className="trans-icon" />
                    <div className="transaction-details">
                        <p className="transaction-amount">₹{transaction.amount}</p>
                        <p className="transaction-description">{transaction.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeacherProfile;
