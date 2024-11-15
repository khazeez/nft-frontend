import React from 'react'
import Image from 'next/image'

import Style from "./Notification.module.css"
import image from '@/image'

const Notification = () => {
  return (
  <div className={Style.notification}>
    <p>Notification</p>
    <div className={Style.notification_box}>
      <div className={Style.notifcation_box_image}>
        <Image 
        src={image.user1} 
        alt="Profile-image" 
        width={50} 
        height={50} 
        className={Style.notification_box_image} />
      </div>
      <div className={Style.notification_box_info}>
        <h4>Khoirul Aziz</h4>
        <p>Measure Action Your User...</p>
        <p>3 minutes ago</p>
      </div>
        <span className={Style.notification_box_new}></span>
    </div>
  </div>
  )
}

export default Notification