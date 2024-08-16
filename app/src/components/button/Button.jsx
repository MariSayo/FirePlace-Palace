'use client'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import styles from './Button.module.css'

const Button = () => {
    const [menuStatus, SetMenuStatus] = useState(false)
  
    function openMenu() {
      SetMenuStatus(true);
    }
     function closeMenu() {
      SetMenuStatus(false);
     }
  
    return (
    <>
        <button onClick={openMenu}className={styles.openBurger}>
        <Image
              src="/menu-open-button.png"
              alt="Le burger"
              width={5}
              height={5}
              />
          </button>
      
        {menuStatus && (
          <div className={styles.menu}>
              <button onClick={closeMenu}className={styles.closeBurger}>
              <Image
                src="/menu-close-button.png"
                alt="close the menu page"
                width={5}
                height={5}
              />
            </button>
            <br></br>
            <Link href="/founders" onClick = {closeMenu}>Got to founders page</Link>
            <br></br>
            <Link href="/" onClick = {closeMenu}>Go to the main page</Link>
          </div>
        )}
         </>
  )
}
  
//   export default Header
export default Button;
  
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
  