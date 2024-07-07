import './Address.css';
import { MdOutlineEdit, MdOutlineDeleteOutline } from "react-icons/md";

const Address = () => {
    return (
        <div className="Address">
            <div className="Address-header"><h3>My Address</h3></div>
            <div className='existing-address'>
                <div className='contect-info'>
                    <h3>John Doe</h3>
                    <p>+91 8152864826</p>
                </div>
                <div className='address-info'>
                    <p>Lakhan Majra, Rohtak</p>
                    <p>Haryana, 124514</p>
                </div>
                <div className='icons'>
                    <MdOutlineEdit className='edit-delete-icons' />
                    <MdOutlineDeleteOutline className='edit-delete-icons' />
                </div>
            </div>
            <div className='existing-address'>
                <div className='contect-info'>
                    <h3>John Doe</h3>
                    <p>+91 8152864826</p>
                </div>
                <div className='address-info'>
                    <p>Lakhan Majra, Rohtak</p>
                    <p>Haryana, 124514</p>
                </div>
                <div className='icons'>
                    <MdOutlineEdit className='edit-delete-icons' />
                    <MdOutlineDeleteOutline className='edit-delete-icons' />
                </div>
            </div>
            <div className='existing-address'>
                <div className='contect-info'>
                    <h3>John Doe</h3>
                    <p>+91 8152864826</p>
                </div>
                <div className='address-info'>
                    <p>Lakhan Majra, Rohtak</p>
                    <p>Haryana, 124514</p>
                </div>
                <div className='icons'>
                    <MdOutlineEdit className='edit-delete-icons' />
                    <MdOutlineDeleteOutline className='edit-delete-icons' />
                </div>
            </div>
            <div className='existing-address'>
                <div className='contect-info'>
                    <h3>John Doe</h3>
                    <p>+91 8152864826</p>
                </div>
                <div className='address-info'>
                    <p>Lakhan Majra, Rohtak</p>
                    <p>Haryana, 124514</p>
                </div>
                <div className='icons'>
                    <MdOutlineEdit className='edit-delete-icons' />
                    <MdOutlineDeleteOutline className='edit-delete-icons' />
                </div>
            </div>
            {/* Repeat existing-address divs as needed */}
            <div className='add-address'>
                <button>Add New Address</button>
            </div>
        </div>
    );
};

export default Address;
