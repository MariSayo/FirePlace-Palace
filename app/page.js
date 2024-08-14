import Header from "./src/components/header/Header";
import Main from "./src/components/main/Main"
import Footer from "./src/components/footer/Footer"

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
