'use client'
import Countrybutton from '../countryButtons/Country-button'
import styles from '../reviews/Reviews.module.css'
const Reviews = () => {
  return (
    <>
      <section className={styles.reviewSection}>
        <h2>Trusted.</h2>
        <div className={styles.reviewCall}>
          <p>
            Weve got thousands of happy customers all over the UK. Choose your
            country to see the latest review:
          </p>
        </div>
        <Countrybutton />
      </section>
    </>
  )
}

export default Reviews
