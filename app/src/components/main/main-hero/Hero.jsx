import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImage}>
        <Image
          src="/public/hero-mobile.png"
          alt="hero mobile"
          priority={true}
          width="500"
          height="500"
        />
      </div>
      <div className={styles.heroText}>
        <h1>Discover the Perfect Fireplace...</h1>
        <h3>
          Book consultation:
          <span className={styles.colourChange}>0121 356 7897</span>
        </h3>
      </div>
    </section>
  );
};

export default Hero;
