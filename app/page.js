import Link from 'next/link';
import Main from "./src/components/main/Main"



export default function Home() {
  return (
    <>
    <main className="siteMain">
      <Link href="founders">Got to founders page</Link>
        <Main />
      </main>
    </>
  );
}
