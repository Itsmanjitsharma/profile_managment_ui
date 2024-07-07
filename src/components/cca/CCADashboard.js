import './CCADashboard.css';
import { FaSearch } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { SiGooglenearby } from "react-icons/si";
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { PiStudentLight } from "react-icons/pi";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoAddOutline } from "react-icons/io5";

const CCADashboard = () => {
    const navigate = useNavigate();
    const [profiles, setProfiles] = useState([]);
    const [profileType, setProfileType] = useState("Student");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/profile/students');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data[0].image)
                setProfiles(data);  
            } catch (error) {
                console.error('Error fetching profiles:', error);
            }
        };

        fetchData();
    }, []);

    const handleProfileTypeChange = (e) => {
        setProfileType(e.target.value);
    };

    const handleProfileClick = (profileId) => {
        navigate('/student', { state: { profileId } });
    };

    const filteredProfiles = profiles.filter(profile => profile.profileType === profileType);

    return (
        <div className='ccadashboard'>
            <div className='cca-profile-info'>
                <div className='cca-profile-info-left'>
                    <p>Hi Keerthan</p>
                    <h3>Good Morning</h3>
                </div>
                <img src='https://thumbs.dreamstime.com/b/happy-black-teen-boy-outside-african-american-smiles-sitting-bench-192130399.jpg' alt='' />
            </div>
            <div className='cca-home-profile-details-search'>
                <select value={profileType} onChange={handleProfileTypeChange}>
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                </select>
                <input type='text' placeholder='Search' />
                <div className='cca-home-profile-details-search-icon'>
                    <FaSearch />
                </div>
            </div>
            <div className='cca-home-main'>
                {filteredProfiles.map((profile) => (
                    <div key={profile.id} className='wrapper' onClick={() => handleProfileClick(profile.id)}>
                        <div className='img-area'>
                        {profile.image && <img src={`data:image/png;base64,${profile.image}`} alt="Photo" />}
                        </div>
                    </div>
                ))}
            </div>
            <div className='cca-home-footer'>
                <IoHomeOutline className='cca-footer-icon' />
                <a href="/attendance">
                    <PiStudentLight className='cca-footer-icon' />
                </a>
                <PiChalkboardTeacherFill className='cca-footer-icon' />
                <a href='/adminprofile'>
                    <CgProfile className='cca-footer-icon' />
                </a>
                <a href='/addProfile'>
                    <IoAddOutline className='cca-footer-icon' />
                </a>
            </div>
        </div>
    );
};

export default CCADashboard;
