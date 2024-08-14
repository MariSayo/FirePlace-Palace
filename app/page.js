import Link from 'next/link';
import Main from "./src/components/main/Main"
//import { useState } from 'react';



export default function Home() {
  /*
    const [menuStatus, SetMenuStatus] = useState(false);
  
    function handleClick() {
      SetMenuStatus(!menuStatus)
    }
  */
  return (
    <>
      <Link href="founders">Got to founders page</Link>
      <main className="siteMain">
        <Main />
      </main>

    </>
  );
}
