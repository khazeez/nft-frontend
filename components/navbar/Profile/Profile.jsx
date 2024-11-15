import React from "react";
import Image from "next/image";
import { FaUserAlt, FaRegImage, FaUserEdit, FaEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";
import { VscDebugDisconnect } from "react-icons/vsc";
import { LiaSitemapSolid } from "react-icons/lia";
import Link from "next/link";

//Import internal
import Style from "./Profile.module.css";
import image from "@/image";

const Profile = () => {
  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <Image 
        src={image.user1} 
        alt='user profile'
        width={50}
        height={50}
        className={Style.profile_account_image} 
        />
        <div className={Style.profile_account_info}>
          <p>Khoirul Aziz</p>
          <small>x03437482374823.....</small>
        </div>

      </div>

      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            <FaUserAlt className={Style.profile_icon}/>
            <p>
              <Link href={{pathname: '/myprofile'}}>My Profile</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
          <LiaSitemapSolid className={Style.profile_icon} />
            <p>
              <Link href={{pathname: '/my-items'}}>My Items</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
          <FaEdit className={Style.profile_icon} />
            <p>
              <Link href={{pathname: '/edit-profile'}}>Edit Profile</Link>
            </p>
          </div>
        </div>

        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter className={Style.profile_icon} />
            <p>
              <Link href={{pathname:'/help'}}>
                Help
              </Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
          <VscDebugDisconnect className={Style.profile_icon} />
            <p>
              <Link href={{pathname:'/disconnect'}}>
                Disconnected
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
