import "./page.css";
import Header from "./src/components/header/Header";
import Main from "./src/components/main/Main"
import Footer from "./src/components/footer/Footer"

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <Header />

        <main className="site-main">
          <Main />
        </main>
        <Footer />
      </div>
    </>
  );
}
