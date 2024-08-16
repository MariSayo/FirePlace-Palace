import Image from 'next/image'
import styles from './Founderhero.module.css';

const Founderhero = () => {
    return (<section className={styles.founderheroWrapper}>
          <div className={styles.founderheroText}>
          <h1>Meet the artisans behind our masterpieces!
            <br></br>
            Mike and Mandy
          </h1>
          <div className={styles.founderheroImage}>
          <Image
            src='/founder-mike-and-mandy.png'
            alt='Mike and Mandy smiling'
            priority={true}
            width='500'
            height='500'
          />
        </div>
        </div>
     
      
      </section>)
}

export default Founderhero;