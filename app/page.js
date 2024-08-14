import Link from 'next/link';
import Main from "./src/components/main/Main"
import {useState} from 'react';



export default function Home() {

  const [menuStatus, SetMenuStatus] = useState(false);

  function handleClick() {
    SetMenuStatus(!menuStatus)
  }

  return (
    <>
      <main className="siteMain">
        <Main />
      </main>
      <Link href="founders">Got to founders page</Link>
    </>
  );
}
