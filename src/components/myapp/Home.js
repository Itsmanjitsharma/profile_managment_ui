import './Home.css';
import { FaSearch } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { SiGooglenearby } from "react-icons/si";
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const Home = () => {
    const products = [
        {
            image:"https://cdn.thewirecutter.com/wp-content/media/2024/05/runningshoesforyou-2048px-2251.jpg?auto=webp&quality=75&width=1024",
            name:"Nike Revolution 7",
            price:"3 695.00"
        }, {
            image:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d217f7a3-e68c-4765-9c3f-db145d6131d6/impact-4-basketball-shoes-CcJxBx.png",
            name:"Nike Impact 4",
            price:"8 495.00"
        }, {
            image:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8f2b32ed-34f4-4065-ab8f-f3a9d0aa47a8/dunk-low-retro-se-shoes-RSrHtr.png",
            name:"Nike Dunk Low Retro SE",
            price:"10 795.00"
        }, {
            image:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d7171a94-218e-4945-98cb-43715284f69c/air-jordan-1-low-se-shoes-WSkjPL.png",
            name:"Air Jordan 1 Low SE",
            price:"9 777.00"
        }, {
            image:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b93818fb-90b6-44a1-8de5-ee6d863adca7/sb-dunk-low-pro-skate-shoes-7H63Cd.png",
            name:"Nike SB Dunk Low Pro",
            price:"9 207.00"
        }, {
            image:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1a063d4a-c5e8-4cfd-b93a-61d59dd4201b/sb-zoom-janoski-og-skate-shoes-cGdJGP.png",
            name:"Nike SB Zoom Janoski OG+",
            price:"8 595.00"
        }, {
            image:"https://as2.ftcdn.net/v2/jpg/06/60/94/67/1000_F_660946788_WHey9DCgiZkQfsfIsA0viiyujwHJcWVo.jpg",
            name:"White sneaker",
            price:"7890.00"
        }, {
            image:"https://www.rei.com/media/392e8073-43ee-4695-8a1e-62368c1246eb.jpg?size=784x588",
            name:"Fresh Foam X 1080v13",
            price:"1659.00"
        }, {
            image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/379978/01/sv01/fnd/IND/fmt/png/Puma-Wish-Max-Men's-Running-Shoes",
            name:"Puma Wish Max Men's Running Shoes",
            price:"2,249"
        }, {
            image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/377827/01/sv01/fnd/AUS/fmt/png/Liberate-NITRO%E2%84%A2-2-Run-75-Men's-Running-Shoes",
            name:"Liberate NITRO™ 2 Run 75 Men's Running Shoes",
            price:"14500.00"
        }, {
            image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/377748/07/sv01/fnd/IND/fmt/png/Velocity-NITRO%E2%84%A2-3-Men's-Running-Shoes",
            name:"Velocity NITRO™ 3 Men's Running Shoes",
            price:"12,999"
        }, {
            image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ee82faf538964684a25ada28902dade6_9366/Adizero_Boston_12_Shoes_Beige_IG3320_HM1.jpg",
            name:"ADIZERO BOSTON 12 SHOES",
            price:"15 999.00"
        }, {
            image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b29cb39126f5428fbb0f234ac042edc4_9366/ADIZERO_ADIOS_PRO_3_Shoes_White_IG6440_HM1.jpg",
            name:"ADIZERO ADIOS PRO 3 SHOES",
            price:"24 999.00"
        }
    ];
    return (
        <div className='home'>
            <div className='profile-info'>
                <div className='profile-info-left'>
                    <p>Hi Jacky!</p>
                    <h3>Good Morning!</h3>
                </div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdaxcs5iTnp6jhO39KoUz5HHVV6JD3-J4fw&s' alt='Profile' />
            </div>
            <div className='home-profile-details-search'>
                <input type='text' placeholder='Search' />
                <div className='home-profile-details-search-icon'>
                    <FaSearch />
                </div>
            </div>
            <div className='search-suggestions'>
                    <p>All</p>
                    <p>Nike</p>
                    <p>Adidas</p>
                    <p>Converse</p>
                    <p>Puma</p>
                    <p>Sketchers</p>
                    <p>Lotto</p>
                    <p>Gucci</p>
                    <p>Balenciaga</p>
                </div>
            <div className='home-main'>
                <div className='content-container'>
                {products.map((product, index) => (
                        <div className='content-container-card' key={index}>
                            <img src={product.image} alt='Product' />
                            <div>
                                <p>{product.name}</p>
                                <h4>₹{product.price}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='home-footer'>
                <IoHomeOutline className='footer-icon' />
                <SiGooglenearby className='footer-icon' />
                <FaCartShopping className='footer-icon' />
                <CgProfile className='footer-icon' />
            </div>
        </div>
    );
}

export default Home;
