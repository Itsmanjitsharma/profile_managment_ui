import './NewAddress.css';

const NewAddress = () => {
    return (
        <div className="NewAddress">
            <div className="address-infos">
                <h3>Name</h3>
                <input type="text" placeholder="Mr.X" />
            </div>
            <div className="address-infos">
                <h3>Phone</h3>
                <div className="phone-infos">
                    <select>
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                        <option value="+92">+92</option>
                    </select>
                    <input type="text" placeholder="9000000000" />
                </div>
            </div>
            <div className="address-infos">
                <h3>House Number*</h3>
                <input type="text" placeholder="Type here" />
            </div>
            <div className="address-infos">
                <h3>Floor</h3>
                <input type="text" placeholder="Type here" />
            </div>
            <div className="address-infos">
                <h3>Street Name</h3>
                <input type="text" placeholder="Type here" />
            </div>
            <div className="address-infos">
                <h3>City</h3>
                <input type="text" placeholder="Type here" />
            </div>
            <div className="address-infos">
                <h3>State</h3>
                <input type="text" placeholder="Type here" />
            </div>
            <div className="address-infos">
                <h3>Country</h3>
                <input type="text" placeholder="Type here" />
            </div>
            <div className="address-infos">
                <h3>Pin Code*</h3>
                <input type="text" placeholder="Type here" />
            </div>
            <div className='address-btn'>
                <button>Add</button>
            </div>
        </div>
    );
}

export default NewAddress;
