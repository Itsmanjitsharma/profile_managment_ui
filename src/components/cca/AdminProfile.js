import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import './AdminProfile.css';
import { GrTransaction } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";

const AdminProfile = () => {
    const [adminDetails, setAdminDetails] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const [studentPendingTotal, setStudentPendingTotal] = useState(0);
    const [studentCompletedTotal, setStudentCompletedTotal] = useState(0);
    const [teacherPendingTotal, setTeacherPendingTotal] = useState(0);
    const [teacherCompletedTotal, setTeacherCompletedTotal] = useState(0);
    const [revenue, setRevenue] = useState(0);
    const [debited, setDebited] = useState(0);
    const [credited, setCredited] = useState(0);
    const [transactionType, setTransactionType] = useState('all');
    const [transactionSize, setTransactionSize] = useState(10);

    const StudentTransaction = [
        { name: 'Pending', amount: studentPendingTotal, color: '#DC143C' },
        { name: 'Completed', amount: studentCompletedTotal, color: '#000080' },
    ];
    const TeacherTransaction = [
        { name: 'Pending', amount: teacherPendingTotal, color: '#EC7A08' },
        { name: 'Completed', amount: teacherCompletedTotal, color: '#38812F' },
    ];

    useEffect(() => {
        // Fetch admin profiles from API
        async function fetchProfiles() {
            try {
                const response = await fetch('http://localhost:8080/api/profile/adminInfos');
                if (!response.ok) {
                    throw new Error('Failed to fetch profiles');
                }
                const data = await response.json();
                setAdminDetails(data);

                // Calculate totals
                let studentPending = 0;
                let studentCompleted = 0;
                let teacherPending = 0;
                let teacherCompleted = 0;

                data.forEach(profile => {
                    if (profile.transactionStatus === 'Pending' && profile.profileType === 'Student') {
                        studentPending += profile.fees;
                    } else if (profile.transactionStatus === 'Completed' && profile.profileType === 'Student') {
                        studentCompleted += profile.fees;
                    }
                    if (profile.transactionStatus === 'Pending' && profile.profileType === 'Teacher') {
                        teacherPending += profile.fees;
                    } else if (profile.transactionStatus === 'Completed' && profile.profileType === 'Teacher') {
                        teacherCompleted += profile.fees;
                    }
                });

                setStudentPendingTotal(studentPending);
                setStudentCompletedTotal(studentCompleted);
                setTeacherPendingTotal(teacherPending);
                setTeacherCompletedTotal(teacherCompleted);

                // Initially show all transactions
                setFilteredTransactions(data);
            } catch (error) {
                console.error('Error fetching profiles:', error);
            }
        }

        fetchProfiles();
    }, []);

    const handleTransactionTypeChange = (e) => {
        const selectedType = e.target.value;
        setTransactionType(selectedType);

        const filtered = adminDetails.filter(profile => {
            if (selectedType === 'all') {
                return true;
            } else if (selectedType === 'credit') {
                return profile.profileType === 'Student';
            } else if (selectedType === 'debit') {
                return profile.profileType === 'Teacher';
            }
            return false;
        });
        setFilteredTransactions(filtered);
    };

    return (
        <div className="AdminProfile">
            <div className='admin-header'>
                <h3>Admin Profile</h3>
                <a href='/home'>
                    <RxCross1 className='cross' />
                </a>
            </div>
            <h5>Student Transaction</h5>
            <div className="Transaction">
                <PieChart width={200} height={200}>
                    <Pie data={StudentTransaction} dataKey="amount" outerRadius={100}>
                        {StudentTransaction.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
                <div className="Legend">
                    {StudentTransaction.map((entry, index) => (
                        <div key={`legend-${index}`} className="LegendItem">
                            <div className="ColorBox" style={{ backgroundColor: entry.color }}></div>
                            <span>{entry.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <h5>Teacher Transaction</h5>
            <div className='Teacher-Transaction'>
                <div className="Legend">
                    {TeacherTransaction.map((entry, index) => (
                        <div key={`legend-${index}`} className="LegendItem">
                            <div className="ColorBox" style={{ backgroundColor: entry.color }}></div>
                            <span>{entry.name}</span>
                        </div>
                    ))}
                </div>
                <PieChart width={200} height={200}>
                    <Pie data={TeacherTransaction} dataKey="amount" outerRadius={100}>
                        {TeacherTransaction.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </div>
            <h5>Payment Info</h5>
            <div className='payment-infos'>
                <div className='sub-payment-infos'>
                    <h5>Revenue</h5>
                    <span>{revenue}</span>
                </div>
                <div className='sub-payment-infos'>
                    <h5>Credited</h5>
                    <span>{credited}</span>
                </div>
                <div className='sub-payment-infos'>
                    <h5>Debited</h5>
                    <span>{debited}</span>
                </div>
            </div>
            <h5>Filters</h5>
            <div className="filters">
                <select value={transactionType} onChange={handleTransactionTypeChange}>
                    <option value="all">All Transactions</option>
                    <option value="credit">Student Transactions</option>
                    <option value="debit">Teacher Transactions</option>
                </select>
                <select value={transactionSize} onChange={(e) => setTransactionSize(Number(e.target.value))}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={40}>40</option>
                    <option value={50}>50</option>
                    <option value={60}>60</option>
                    <option value={70}>70</option>
                    <option value={80}>80</option>
                </select>
            </div>
            <div className='all-transaction'>
                {filteredTransactions.slice(0, transactionSize).map(transaction => (
                    <div key={transaction.id} className="admin-transaction">
                        <GrTransaction className="admin-trans-icon" />
                        <div className="admin-transaction-details">
                            <p className="admin-transaction-amount">₹{transaction.fees}</p>
                            <p className="admin-transaction-description">{transaction.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AdminProfile;
