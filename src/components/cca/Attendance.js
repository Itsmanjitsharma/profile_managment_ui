import React, { useEffect, useState } from 'react';
import './Attendance.css';
import { RxCross1 } from "react-icons/rx";

const Attendance = () => {
    const [attendance, setAttendance] = useState(Array(30).fill(null));
    const [showAttendance, setShowAttendance] = useState(true); // State to toggle between pages
    const [student, setStudent] = useState([]);

    const handleAttendanceClick = (index, status) => {
        const newAttendance = [...attendance];
        newAttendance[index] = status;
        setAttendance(newAttendance);
    };

    const togglePage = () => {
        setShowAttendance(!showAttendance);
    };
    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/profile/students');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setStudent(data);                
             } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };
        fetchStudentData();
    }, []);

    const submitAttendance = async () => {
        const attendanceData = student.map((stud, index) => ({
            profile_id: stud.id,
            id: null, // Ensure ID is null or not included
            date: new Date().toISOString().split('T')[0], // Format the date as YYYY-MM-DD
            status: attendance[index]
        }));

        try {
            const response = await fetch('http://localhost:8080/api/attendance/addAttendance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(attendanceData)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Attendance submitted successfully:', data);
        } catch (error) {
            console.error('Error submitting attendance:', error);
        }
    };

    return (
        <div className="attendance">
            <div className='attendance-calendar'>
            <div className='attendance-toggle-switch'>
                    <label className='attendance-switch-label'>
                        <input 
                            type="checkbox" 
                            className='attendance-checkbox' 
                            checked={showAttendance} 
                            onChange={togglePage} 
                        />
                        <span className='attendance-slider'></span>
                    </label>
                </div>
               <h3>Attendance</h3>
               <a href='/home'>
               <RxCross1 className='cross'/>
               </a>
            </div>
            <div className="sub-attendance">
            {student.map((stud, index) => (
                    <div className="attendance-container" key={index}>
                        <p>{stud.name}</p>
                        <p>{stud.id}</p>
                        <div className='present-absent'>
                            <p 
                                className={attendance[index] === 'Present' ? 'selected' : ''} 
                                onClick={() => handleAttendanceClick(index, 'Present')}
                            >P</p>
                            <p 
                                className={attendance[index] === 'Absent' ? 'selected' : ''} 
                                onClick={() => handleAttendanceClick(index, 'Absent')}
                            >A</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='button-container'>
                <button onClick={submitAttendance}>Submit Attendance</button>
            </div>
        </div>
    );
}

export default Attendance;
