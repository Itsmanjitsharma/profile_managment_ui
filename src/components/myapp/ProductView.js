import React from 'react';
import './ProductView.css';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const ProductView = () => {
    const product = {
        name: "Nike Air Force",
        price: "50.00",
        rating: 4.5,
        reviews: 15,
        description: "Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer.",
        colors: ["#000000", "#F5F5DC", "#FFD700", "#808080"],
        sizes: ["Choose Size", "S", "M", "L", "XL"],
        images: [
            'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c05d936c7e204374961753b5a35fee87_9366/Barricade_13_Tennis_Shoes_White_IG3114_HM3_hover.jpg',
            'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/25134dcd2bf646c49b22c5c91590e600_9366/Barricade_13_Tennis_Shoes_White_IG3114_HM4.jpg',
            'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b40f40137fb44897996df9ff7087eee2_9366/Barricade_13_Tennis_Shoes_White_IG3114_HM1.jpg',
            'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/55c007e52f4b4dd6bb2241e0d5fb802c_9366/Barricade_13_Tennis_Shoes_White_IG3114_HM6.jpg',
            'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/479aa65392f640f8a4077c2fe14287d4_9366/Barricade_13_Tennis_Shoes_White_IG3114_HM7.jpg'
        ]
    };

    return (
        <div className='product-container'>
            <div className='product-container-details'>
            <Swiper 
                    pagination={{ clickable: true }} 
                    modules={[Navigation, Pagination]}
                >
               {product.images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <img src={src} alt={`Product Image ${index + 1}`} />
                        </SwiperSlide>
               ))}
            </Swiper>
            <div className='product-container-details-info'>
                <div className='name-price'>
                    <h4>Nike Aire Force</h4>
                    <h5>₹ 4999.00</h5>
                </div>
                <p><FaStar/> 4.5(15 Review)</p>
                <strong>Details</strong><br/>
                <span>Nike Dri-fit is a polyester fabric design to help you keep dry so you can more comfortably work harder longer</span>
                <div className="color-selection">
                    <h4>Color:</h4>
                    <div className="colors">
                        {product.colors.map((color, index) => (
                            <div key={index} className="color" style={{ backgroundColor: color }}></div>
                        ))}
                    </div>
                </div>
                <div className="size-selection">
                    <h4>Size:</h4>
                    <select>
                        {product.sizes.map((size, index) => (
                            <option key={index} value={size}>{size}</option>
                        ))}
                    </select>
                </div>
                <div className="buy-now">
                <button>Buy Now</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ProductView;
