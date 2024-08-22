'use client'
import { useState, useEffect } from 'react'
import styles from '../countryButtons/Country-button.module.css'

export default function CountryButton() {
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [reviewData, setReviewData] = useState(null)

  useEffect(() => {
    if (selectedCountry) {
      // Fetch data here
      fetch(
        `https://seal-app-336e8.ondigitalocean.app/reviews?country=${selectedCountry}`
      )
        .then((response) => response.json())
        .then((data) => setReviewData(data))
    }
  }, [selectedCountry])

  function selectReviews(name) {
    setSelectedCountry(name)
  }

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        {['England', 'Wales', 'Scotland'].map((country) => (
          <button
            key={country}
            className={`${styles.countryButton} ${
              selectedCountry === country ? styles.active : ''
            }`}
            onClick={() => selectReviews(country)}
          >
            {country}
          </button>
        ))}
      </div>

      {reviewData && (
        <div className={styles.review}>
          <p>
            <span className={styles.highlight}>Reviwer: </span>
            {reviewData.author}
          </p>
          <p>
            <span className={styles.highlight}>Location: </span>
            {reviewData.location}
          </p>
          <p>
            <span className={styles.highlight}>Business Name: </span>
            {reviewData.businessName}
          </p>

          <p className={styles.reviewPara}>{reviewData.text}</p>
        </div>
      )}
    </div>
  )
}
