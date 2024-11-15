import React from 'react'
import Link from 'next/link'

//import internal
import Style from './Discover.module.css'

const Discover = () => {

  // Discover navigation menu
  const discover = [
    {
      name: "Collection",
      link: "collection"
    },
    {
      name: "Search",
      link: "search"
    },
    {
      name: "Author Profile",
      link: "author-profile"
    },
    {
      name: "NFT Details",
      link: "NFT-details"
    },
    {
      name: "Account Settings",
      link: "account-settings"
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet"
    },
    {
      name: "Blog",
      link: "blog"
    },
  ]
  return (
    <div className={Style.discover_parent}>
      {discover.map((el, i)=> (
        <div key={i} className={Style.discover}>
          <Link href={{pathname: `${el.link}`}}>
          {el.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Discover