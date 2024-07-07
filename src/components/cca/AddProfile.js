import './AddProfile.css';
import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";

const AddProfile = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [profileType, setProfileType] = useState("Student");

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setSelectedImage(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', e.target.elements.name.value);
        formData.append('parents', e.target.elements.parents.value);
        formData.append('mobile', e.target.elements.mobile.value);
        formData.append('bloodGroup', e.target.elements.bloodGroup.value);
        formData.append('address', e.target.elements.address.value);
        formData.append('dateOfBirth', e.target.elements.dateOfBirth.value);
        formData.append('fees', e.target.elements.fees.value);
        formData.append('profileType', profileType);
        if (selectedImage) {
            formData.append('image', selectedImage);
        }

        try {
            const response = await fetch('http://localhost:8080/api/profile/save', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                alert('Profile saved successfully!');
                e.target.reset();
                setSelectedImage(null);
            } else {
                alert('Failed to save profile');
            }
        } catch (error) {
            console.error('Error saving profile:', error);
            alert('An error occurred while saving profile');
        }
    };

    return (
        <div className='AddProfile'>
            <div className='profile-header'>
                <select value={profileType} onChange={(e) => setProfileType(e.target.value)}>
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                </select>
                <h3>Profile</h3>
                <a href='/home'>
                    <RxCross1 className='cross'/>
                </a>
            </div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='Name' />
                <input type='text' name='parents' placeholder='Guardian' />
                <input type='text' name='mobile' placeholder='Mobile Number' />
                <input type='text' name='bloodGroup' placeholder='Blood Group' />
                <input type='text' name='address' placeholder='Address' />
                <input type='text' name='dateOfBirth' placeholder='Date Of Birth' />
                <input type='text' name='fees' placeholder='Fees' />
                <div className='image-upload'>
                    <label htmlFor='file-input'>
                        {selectedImage ? (
                            <img src={URL.createObjectURL(selectedImage)} alt='Profile' className='profile-image' />
                        ) : (
                            <span>Upload Image</span>
                        )}
                    </label>
                    <input
                        id='file-input'
                        type='file'
                        accept='image/*'
                        onChange={handleImageChange}
                    />
                </div>
                <button type='submit'>Add Profile</button>
            </form>
        </div>
    );
};

export default AddProfile;
