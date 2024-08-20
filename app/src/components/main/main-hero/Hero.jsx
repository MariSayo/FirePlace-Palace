import styles from './Hero.module.css'
import Image from 'next/image'
import Link from "next/link";

const Hero = () => {
    return (
        <section className={styles.heroWrapper}>
            <div className={styles.heroImage}>
                <Image
                    src='/hero-mobile.png'
                    alt='hero mobile'
                    priority={true}
                    width='500'
                    height='500'
                />
            </div>
            <div className={styles.heroText}>
                <h1>Discover the Perfect Fireplace...</h1>
                <h3>
                    Book consultation:
                    <span className={styles.colourChange}><Link href="/booking"
                    >Book consultation</Link></span>
                </h3>
            </div>
        </section>
    )
}

export default Hero
