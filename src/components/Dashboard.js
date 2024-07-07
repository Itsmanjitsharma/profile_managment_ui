import logo from './logo.svg';
import { FaFacebookF } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { VscGraph } from "react-icons/vsc";
import { LuFileLineChart } from "react-icons/lu";
import { RiProgress2Line } from "react-icons/ri";
import { HiArrowRightStartOnRectangle } from "react-icons/hi2";
import { BiSearchAlt2 } from "react-icons/bi";
import LinearProgress from '@mui/material/LinearProgress';
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaWalking } from "react-icons/fa";
import { CiCircleChevRight } from "react-icons/ci";

import './App.css';
import { useState } from 'react';

function Dashboard() {
  const [progress, setProgress] = useState(10);
  return (
    <div className="App">
      <div className='section-one'>
        <div className='section-one-left'>
          <div className='section-one-left-top'>
          <FaRegBell className='bellicon'/>
          </div>
          <div className='section-one-left-middle'>
          <IoHomeOutline className='icon-middle' />
          <CgNotes className='icon-middle' />
          <VscGraph className='icon-middle'/>
          <LuFileLineChart className='icon-middle'/>
          <RiProgress2Line className='icon-middle'/>
          </div>
          <div className='section-one-left-bottom'>
          <HiArrowRightStartOnRectangle className='icon-middle'/>
          </div>
        </div>
        <div className='section-one-right'>
          <div className='section-one-right-top'>
            <div className='section-one-right-top-first'>
              <p>Primary</p>
              <h3>Dashboard</h3>
            </div>
            <div className='section-one-right-top-second'>
              <div className='section-one-right-top-second-search'>
                <BiSearchAlt2 className='search-icon'/>
                <input type='text' placeholder='Search'/>
              </div>
              <img src='https://img.freepik.com/premium-photo/very-detailed-cute-kid-boy-generate-ai_868783-2770.jpg' alt=''/>
            </div>
          </div>
          <div className='section-one-right-middle'>
            <div className='section-one-right-middle-left'></div>
            <div className='section-one-right-middle-right'>
              <div className='section-one-right-middle-right-top'>
                <div className='section-one-right-middle-right-top-left'>
                <FaWalking className='section-one-right-middle-right-top-left'/>
                </div>
                <div className='section-one-right-middle-right-top-right'><p>Daily Jogging</p></div>
              </div>
              <div className='section-one-right-middle-right-bottom'>
                <div className='section-one-right-middle-right-bottom-top'>         
                 <div className='section-one-right-middle-right-bottom-top-left'>
                  <FaWalking className='section-one-right-middle-right-bottom-top-left-walking'/>
                </div>
                <div className='section-one-right-middle-right-bottom-top-right'>
                  <p>Daily Jogging</p>
                </div>
                </div>
                <div className='section-one-right-middle-right-bottom-bottom'>
                   <div className='section-one-right-middle-right-bottom-bottom-details'>
                    <p>Total hours</p>
                    <h4>748 hr</h4>
                    <p>July</p>
                   </div>
                   <CiCircleChevRight className='section-one-right-middle-right-bottom-bottom-details-icon'/>
                </div>
              </div>
            </div>
          </div>
          <div className='section-one-right-lower'>
          <div className='section-one-right-lower-first'>
            <div className='section-one-right-lower-first-container'>
              <img src='https://www.herocycles.com/dw/image/v2/BGQH_PRD/on/demandware.static/-/Sites-cycles-master/default/dw4c3be3b6/Products/F11/BCF1120BLBK001/04.png?sh=523&sfrm=png' alt='' className='section-one-right-lower-first-container-icon'/>
              <div className='section-one-right-lower-first-container-first-type'>
                <h3>Bicycle-Drill</h3>
                <p>38 km/weeks</p>
              </div>
              <div className='section-one-right-lower-first-container-first'>
                <div className='progess-details'>
                  <p>Progress</p><p>45%</p>
                </div>
                <LinearProgress />             
                <div className='progess-details-other'>
                  <p>need more</p>
                  <span>2 days left</span>
                </div>
              </div>
            </div>
          </div>
          <div className='section-one-right-lower-first'>
            <div className='section-one-right-lower-first-container'>
              <img src='https://www.herocycles.com/dw/image/v2/BGQH_PRD/on/demandware.static/-/Sites-cycles-master/default/dw4c3be3b6/Products/F11/BCF1120BLBK001/04.png?sh=523&sfrm=png' alt='' className='section-one-right-lower-first-container-icon'/>
              <div className='section-one-right-lower-first-container-first-type'>
                <h3>Bicycle-Drill</h3>
                <p>38 km/weeks</p>
              </div>
              <div className='section-one-right-lower-first-container-first'>
                <div className='progess-details'>
                  <p>Progress</p><p>45%</p>
                </div>
                <LinearProgress />             
                <div className='progess-details-other'>
                  <p>need more</p>
                  <span>2 days left</span>
                </div>
              </div>
            </div>
          </div>
          <div className='section-one-right-lower-first'>
            <div className='section-one-right-lower-first-container'>
              <img src='https://www.herocycles.com/dw/image/v2/BGQH_PRD/on/demandware.static/-/Sites-cycles-master/default/dw4c3be3b6/Products/F11/BCF1120BLBK001/04.png?sh=523&sfrm=png' alt='' className='section-one-right-lower-first-container-icon'/>
              <div className='section-one-right-lower-first-container-first-type'>
                <h3>Bicycle-Drill</h3>
                <p>38 km/weeks</p>
              </div>
              <div className='section-one-right-lower-first-container-first'>
                <div className='progess-details'>
                  <p>Progress</p><p>45%</p>
                </div>
                <LinearProgress />             
                <div className='progess-details-other'>
                  <p>need more</p>
                  <span>2 days left</span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className='section-two'>
      <div className='section-two-top'>
        <div className='section-two-top-first'>
          <div className='section-two-top-first-left'>
          <FaUserFriends className='section-two-top-first-left-icon'/>
          <h3>Friends</h3>
          </div>
          <span>View All</span>
        </div>
        <div className='section-two-top-second'>
          <span>Activities</span>
          <span>Outlines</span>
        </div>
      </div>
      <div className='section-two-middle'>
        <div className='section-two-middle-container'>
          <div className='section-two-middle-profile'>
            <img src='https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/bed4ee91-0dd6-48ac-a66b-f58e2f941a27/14e360f6-3b71-481c-bedd-80e580decebd.png' alt=''/>
            <div className='section-two-middle-profile-details'>
              <h3>Max Stone</h3>
              <p>Developer</p>
              <span>Zuric</span>
            </div>
          </div>
          <MdOutlineMailOutline className='section-two-middle-profile-icons'/>
        </div>
        <div className='section-two-middle-container'>
          <div className='section-two-middle-profile'>
            <img src='https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/bed4ee91-0dd6-48ac-a66b-f58e2f941a27/14e360f6-3b71-481c-bedd-80e580decebd.png' alt=''/>
            <div className='section-two-middle-profile-details'>
              <h3>Max Stone</h3>
              <p>Developer</p>
              <span>Zuric</span>
            </div>
          </div>
          <MdOutlineMailOutline className='section-two-middle-profile-icons'/>
        </div>
        <div className='section-two-middle-container'>
          <div className='section-two-middle-profile'>
            <img src='https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/bed4ee91-0dd6-48ac-a66b-f58e2f941a27/14e360f6-3b71-481c-bedd-80e580decebd.png' alt=''/>
            <div className='section-two-middle-profile-details'>
              <h3>Max Stone</h3>
              <p>Developer</p>
              <span>Zuric</span>
            </div>
          </div>
          <MdOutlineMailOutline className='section-two-middle-profile-icons'/>
        </div>
        <div className='section-two-middle-container'>
          <div className='section-two-middle-profile'>
            <img src='https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/bed4ee91-0dd6-48ac-a66b-f58e2f941a27/14e360f6-3b71-481c-bedd-80e580decebd.png' alt=''/>
            <div className='section-two-middle-profile-details'>
              <h3>Max Stone</h3>
              <p>Developer</p>
              <span>Zuric</span>
            </div>
          </div>
          <MdOutlineMailOutline className='section-two-middle-profile-icons'/>
        </div>
        <div className='section-two-middle-container'>
          <div className='section-two-middle-profile'>
            <img src='https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/bed4ee91-0dd6-48ac-a66b-f58e2f941a27/14e360f6-3b71-481c-bedd-80e580decebd.png' alt=''/>
            <div className='section-two-middle-profile-details'>
              <h3>Max Stone</h3>
              <p>Developer</p>
              <span>Zuric</span>
            </div>
          </div>
          <MdOutlineMailOutline className='section-two-middle-profile-icons'/>
        </div>
        
      </div>
      <div className='section-two-lower'>
        <div className='section-two-lower-top'>
          <div className='section-two-lower-top-another'>
            <CiLocationOn className='location'/>
            <h4>Live Map</h4>
          </div>
          <p>View</p>
        </div>
        <div className='checklocation'>
          <img src='https://static.vecteezy.com/system/resources/previews/036/026/363/large_2x/ai-generated-pin-location-icon-for-navigation-or-map-generative-ai-photo.jpg' alt=''/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Dashboard;
