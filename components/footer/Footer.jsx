import React from "react";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialYoutube,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiArrowSortedDown,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";

//Internal import
import Style from "./Footer.module.css";
import image from "@/image";
import { Discover, HelpCenter } from "../navbar";

export default function Footer() {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_social}>
          <Image src={image.logo} alt='footer logo' height={100} width={100} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            dolores ipsa laborum iste, aspernatur cupiditate, quos, rerum ipsam
            praesentium harum laboriosam ad quis non! Excepturi, itaque! Quis
            obcaecati possimus magnam.
          </p>
          <div className={Style.footer_social_media}>
            <a href='#'>
              <TiSocialFacebook />
            </a>
            <a href='#'>
              <TiSocialInstagram />
            </a>
            <a href='#'>
              <TiSocialYoutube />
            </a>
            <a href='#'>
              <TiSocialLinkedin />
            </a>
            <a href='#'>
              <TiSocialTwitter />
            </a>
            <a href='#'>
              <TiArrowSortedDown />
            </a>
          </div>
        </div>

        <div className={Style.footer_box_discover}>
          <h3>Discover</h3>
          <Discover />
        </div>

        <div className={Style.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter />
        </div>

        <div className={Style.subscribe_box}>
          <div className={Style.subscribe_box_email}>
          <input type='email' placeholder='  enter your mail' />
          <RiSendPlaneFill className={Style.subscribe_box_send} />
          </div>
          <div className={Style.subscribe_box_info}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            qui nobis vitae laudantium provident deleniti minima consequatur
            dolore ipsam commodi maxime quae sunt doloremque assumenda,
            perferendis obcaecati nesciunt atque labore.
          </p>
        </div>
        </div>
        
      </div>
    </div>
  );
}
