'use client'
import Image from 'next/image'
import { useState } from 'react'

const Header = () => {
  const [menuStatus, SetMenuStatus] = useState(false)

  function handleClick() {
    SetMenuStatus(!menuStatus)
    console.log('button clicks')
  }
  return (
    <header className='siteHeader'>
      <h3>🔥Fireplace Palace</h3>
      <button onClick={handleClick}>Menu toggle</button>
      {menuStatus && <p>menu</p>}
    </header>
  )
}

export default Header
