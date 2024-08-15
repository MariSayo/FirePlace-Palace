import Link from 'next/link';
import Main from "./src/components/main/Main"



export default function Home() {
  return (
    <>
      <Link href="founders">Got to founders page</Link>
      <main className="siteMain">
        <Main />
      </main>
    </>
  );
}
