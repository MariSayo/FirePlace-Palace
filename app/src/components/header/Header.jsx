'use client'
import Image from 'next/image'
import { useState } from 'react'

const Header = () => {
  const [menuStatus, SetMenuStatus] = useState(false)

  function handleClick() {
    SetMenuStatus(!menuStatus)
    { menuStatus ? 'orange' : 'transparent'}
    console.log('button clicks')
  }

  return (
    <header className='siteHeader'>
      <h3>🔥Fireplace Palace</h3>
      <button onClick={handleClick}>
        <div className = {styles.headerButtonmenuStatus}></div>
        <div className = {styles.blueBackground}></div>

      <Image
            src="/menu-open-button.png"
            alt="Le burger"
            width={5}
            height={5}
            className="openBurger"
        />
        </button>
      {menuStatus && <p>menu</p>}
    </header>
  )
}

export default Header

// menu toggle turns into the burger image permanently ✅

//burgerPage
//inside burger make all orange
//once burger is clicked- entire page orange
//useState turn true 
//when true background turns orange

//burger css to top right of header

// inside burger open menu page to home link and meet the founders link, with orange background- full screen
//inside open menu page there is an X button to click out of menu entirely.
//Click on founders page- takes me to entirely new page
