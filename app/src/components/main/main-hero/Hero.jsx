import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src="src/images/hero-desktop.png" alt="hero mobile" />
      </div>
      <div className="hero-text">
        <h1>Discover the Perfect Fireplace...</h1>
        <h3>
          Book consultation:{" "}
          <span className="colour-change">0121 356 7897</span>
        </h3>
      </div>
    </section>
  );
};

export default Hero;
