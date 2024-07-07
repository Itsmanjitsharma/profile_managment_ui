import React from 'react';
import './ShoppingCart.css';

const ShoppingCart = () => {
    return (
        <div className='shoppingCart'>
            <div className='shoppingCart-header'><h3>Cart</h3></div>
            <div className='shoppingcart-products'>
                <div className='items-info'>
                    <img src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c05d936c7e204374961753b5a35fee87_9366/Barricade_13_Tennis_Shoes_White_IG3114_HM3_hover.jpg' alt='Product' />
                    <div className='info'>
                        <p>Running Shoes</p>
                        <p>M</p>
                        <p>green</p>
                        <p>₹5000.00</p>
                    </div>
                    <div className='info-calculator'>
                        <button>-</button>
                        <p>01</p>
                        <button>+</button>
                    </div>
                </div>
                <div className='items-info'>
                    <img src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c05d936c7e204374961753b5a35fee87_9366/Barricade_13_Tennis_Shoes_White_IG3114_HM3_hover.jpg' alt='Product' />
                    <div className='info'>
                        <p>Running Shoes</p>
                        <p>M</p>
                        <p>green</p>
                        <p>₹5000.00</p>
                    </div>
                    <div className='info-calculator'>
                        <button>-</button>
                        <p>01</p>
                        <button>+</button>
                    </div>
                </div>
                <div className='items-info'>
                    <img src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c05d936c7e204374961753b5a35fee87_9366/Barricade_13_Tennis_Shoes_White_IG3114_HM3_hover.jpg' alt='Product' />
                    <div className='info'>
                        <p>Running Shoes</p>
                        <p>M</p>
                        <p>green</p>
                        <p>₹5000.00</p>
                    </div>
                    <div className='info-calculator'>
                        <button>-</button>
                        <p>01</p>
                        <button>+</button>
                    </div>
                </div>
                <div className='items-info'>
                    <img src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c05d936c7e204374961753b5a35fee87_9366/Barricade_13_Tennis_Shoes_White_IG3114_HM3_hover.jpg' alt='Product' />
                    <div className='info'>
                        <p>Running Shoes</p>
                        <p>M</p>
                        <p>green</p>
                        <p>₹5000.00</p>
                    </div>
                    <div className='info-calculator'>
                        <button>-</button>
                        <p>01</p>
                        <button>+</button>
                    </div>
                </div>
            </div>
            <div className='shoppingcart-products-info'>
                <div className='promo-section'>
                    <input type='text' placeholder='Promo Code' />
                    <button>Apply</button>
                </div>
                <div className='details-amount'>
                    <p>Order Amount</p>
                    <p>₹1890.00</p>
                </div>
                <div className='details-amount'>
                    <p>Tax</p>
                    <p>₹1890.00</p>
                </div>
                <div className='details-amount'>
                    <p>Total Payment</p>
                    <p>₹1890.00</p>
                </div>
            </div>
            <div className='checkoutbutton'>
                <button>Proceed To Checkout</button>
            </div>
        </div>
    );
};

export default ShoppingCart;
