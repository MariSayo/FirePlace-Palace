"use client";

import { useState } from "react";

const Header = () => {
  const [menuStatus, SetMenuStatus] = useState(false);

  function handleClick() {
    SetMenuStatus(!menuStatus);
    console.log("button clicks");
  }
  return (
    <header className="siteHeader">
      <h3>🔥Fireplace Palace</h3>
      <button onClick={handleClick}>Menu toggle</button>
    </header>
  );
};

export default Header;
