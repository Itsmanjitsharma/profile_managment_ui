import React, { useState, useEffect } from 'react';
import './StudentProfile.css';
import { RxCross1 } from "react-icons/rx";
import { useLocation, Link } from 'react-router-dom';
import Calendar from 'react-calendar';

const StudentProfile = () => {
    const location = useLocation();
    const { state } = location;
    const profileId = state?.profileId; // Access studentId safely using optional chaining
    const [student, setStudent] = useState({});
    const [transactions, setTransactions] = useState([]);
    const [date, setDate] = useState(new Date());
    const [attendance, setAttendance] = useState({});

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                if (!profileId) {
                    console.error('Student ID is not defined');
                    return; // Exit early if studentId is not defined
                }
                console.log('Fetching data for student ID:', profileId); // Log for debugging
                const response = await fetch(`http://localhost:8080/api/profile/student?id=${profileId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setStudent(data);
                console.log(data.image)
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
    }, [profileId]); // Ensure `studentId` is included in the dependency array

    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            const dateString = date.toISOString().split('T')[0];
            if (attendance[dateString] === 'present') {
                return 'react-calendar__tile--present';
            } else if (attendance[dateString] === 'absent') {
                return 'react-calendar__tile--absent';
            }
        }
        return null;
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
                <Link to='/QRCode'>
                    <button>Pay here</button>
                </Link>
            </div>
        </div>
    );
};

export default StudentProfile;
