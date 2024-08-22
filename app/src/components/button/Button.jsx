'use client'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import styles from './Button.module.css'

const Button = () => {
  const [menuStatus, setMenuStatus] = useState(false)

  function openMenu() {
    setMenuStatus(true)
  }
  function closeMenu() {
    setMenuStatus(false)
  }

  return (
    <div className={menuStatus ? styles.burgerContainer : ''}>
      {!menuStatus ? (
        <button onClick={openMenu} className={styles.openBurger}>
          <Image
            src='/menu-open-button.png'
            alt='Le burger'
            width={5}
            height={5}
          />
        </button>
      ) : (
        <></>
      )}

      {menuStatus && (
        <div className={styles.menu}>
          <button onClick={closeMenu} className={styles.closeBurger}>
            X
          </button>
          <br />
          <Link href='/founders' onClick={closeMenu}>
            Go to founders page
          </Link>
          <br />
          <Link href='/' onClick={closeMenu}>
            Go to the main page
          </Link>
        </div>
      )}
    </div>
  )
}

export default Button
