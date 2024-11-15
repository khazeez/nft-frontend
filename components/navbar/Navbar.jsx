"use client";

import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';

//Import Icons
import {MdNotifications} from 'react-icons/md';
import {BsSearch} from 'react-icons/bs';
import {CgMenuLeft, CgMenuRight} from 'react-icons/cg';

//Internal import
import Style from "./Navbar.module.css";
import {Discover, HelpCenter, Notification, Profile, Sidebar } from './index';
import { Button } from '../componentsindex';
import image from '@/image';

const Navbar = () => {
  //use state
  const [discover, setDiscover] = useState(false);
  const [helpCenter, setHelpCenter] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [sidebar, setSidebar] = useState(false);


  
const actDiscover = () => {
  if (!discover) {
    setDiscover(true)
    setNotification(false)
    setProfile(false)
    setHelpCenter(false)
  } else {
    setDiscover(false)
  }
}


const actHelpCenter = () => {
  if (!helpCenter) {
    setHelpCenter(true)
    setNotification(false)
    setProfile(false)
    setDiscover(false)

  } else{
    setHelpCenter(false)
  }
}


const openNotification = () => {
  if (!notification) {
    setNotification(true);
    setProfile(false)
    setDiscover(false)
    setHelpCenter(false)

  } else{
    setNotification(false)
  }
}

const openProfile = () => {
  if (!profile) {
    setProfile(true);
    setNotification(false)
    setHelpCenter(false)
    setDiscover(false)
  } else {
    setProfile(false);
  }
}

const openSidebar = () => {
  if (!sidebar) {
      setSidebar(true)
  } else {
    setSidebar(false)
  }
}


  return (
   <div className={Style.navbar}>
    <div className={Style.navbar_container}>
      <div className={Style.navbar_container_left}>
      <div className={Style.logo}>
        <Image src={image.logo} 
        alt='NFT MARKET PLACE'
        width={100}
        height={100}
        />
      </div>
        <div className={Style.navbar_container_left_box_input}>
          <div className={Style.navbar_container_left_box_input_box}>
            <input type="text" placeholder='Search Nft' />
            <BsSearch onClick={() => {}} className={Style.search_icon}/>
          </div>
        </div>
      </div>
      {/* End of left section */}
  
      <div className={Style.navbar_container_right}>
         {/* Discover menu */}
        <div className={Style.navbar_container_right_discover}  onClick={()=> actDiscover()}>
          <p>Discover</p>
          {discover && (
            <div className={Style.navbar_container_right_discover_box}>
            <Discover/>
          </div>
          )}
        </div>
        {/* HelpCenter menu */}
          <div className={Style.navbar_container_right_help} onClick={()=>actHelpCenter()}>
            <p >Help Center</p>
            {helpCenter && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications className={Style.notify} onClick={(e)=>openNotification()}/>
              {notification && <Notification/>}
          </div> 

          {/* Create button section */}
          <div className={Style.navbar_container_right_button}>
            <Button btnName="Create" handleClick={()=>{}} />
          </div>

          {/* Create user profile */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image src={image.user1} 
                    alt="Profile-image" 
                    width={40} 
                    height={40}  
                    onClick={ ()=> openProfile()} 
                    className={Style.navbar_container_right_profile}/>
                {profile && <Profile />}
            </div>
          </div>

            {/* Create meny button */}
          <div className={Style.navbar_container_right_menuButton}>
            <CgMenuRight className={Style.menuIcon} onClick={()=> openSidebar()} />
          </div>
      </div>
    </div>
     {/* sidebar component */}
     {
            sidebar && (
              <div className={Style.sideBar}>
                <Sidebar setSidebar={setSidebar} />
              </div>
            )
          }
   </div>
   
    )
};

export default Navbar