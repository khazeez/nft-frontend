"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrClose, grClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialYoutube,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiArrowSortedDown,
} from "react-icons/ti";

import Style from "./Sidebar.module.css";
import image from "@/image";
import { Button } from "@/components/componentsindex";

const Sidebar = ({ setSidebar }) => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const openDiscoverMenu = ()=> {
    if (!openDiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
     
  } 

  const openHelpMenu = () => {
    if (!openHelp) {
      setOpenHelp(true);
    } else {
      setOpenHelp(false);
    }
  }

  const closeSideBar = () => {
    setSidebar(false)
  }

  //Discover menu
  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author-profile",
    },
    {
      name: "NFT Details",
      link: "NFT-details",
    },
    {
      name: "Account Settings",
      link: "account-settings",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];

  //Help menu
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];
  return (
    <div className={Style.sideBar}>
      <GrClose
        className={Style.sideBar_closeBtn}
        onClick={() => closeSideBar()}
      />

      <div className={Style.sideBar_box}>
        <Image
          src={image.logo}
          alt='close btn'
          width={150}
          height={150}
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          hic soluta ut nihil magni earum accusamus. Eligendi enim itaque, a
          necessitatibus quia sunt provident mollitia totam repellendus
          voluptate! Hic, mollitia!
        </p>
        <div className={Style.sideBar_social_media}>
          <a href='#'>
            <TiSocialFacebook />
          </a>
          <a href='#'>
            <TiSocialInstagram />
          </a>
          <a href='#'>
            <TiSocialTwitter />
          </a>
          <a href='#'>
            <TiSocialLinkedin />
          </a>
        </div>
      </div>
      <div className={Style.sideBar_menu}>
        <div>
          <div className={Style.sideBar_menu_box} onClick={() => openDiscoverMenu()}>
          <p>Discover</p>
          <TiArrowSortedDown />
          </div>
          {openDiscover && (
            <div className={Style.sideBar_discover}>
              {discover.map((el, i) => (
                <div key={i} className={Style.discover}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <div className={Style.sideBar_menu_box} onClick={()=> openHelpMenu()}>
          <p>Help Center</p>
          <TiArrowSortedDown />
          </div>
          {
            openHelp && (
              <div className={Style.sideBar_discover}>
                {
                  helpCenter.map(
                    (el, i)=> (
                      <p key={i}>
                        <Link href={{pathname: `${el.link}`}}>
                        {el.name}
                        </Link>
                      </p>
                    )
                  )
                }
              </div>
            )
          }
        </div>
      </div>
      <div className={Style.sideBar_button}>
        <Button btnName="Create" handleClick={()=>{}}/>
        <Button btnName="Connect wallet" handleClick={()=>{}} />
      </div>
    </div>
  );
};

export default Sidebar;
