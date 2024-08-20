'use client'
import styles from "./ContactForm.module.css"
import { useState } from "react";
import React from "react";

const ContactForm = () => {
    const [fullName, setFullName] = useState('');
    const [postcode, setPostcode] = useState('');
    const [house, setHouse] = useState('');
    const [city, setCity] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    //const [errorVis, setErrorVis] = useState(false)

    function handleCLick(e) {
        e.preventDefault();
        if (!fullName || !postcode || !house || !city || !number || !email) {
            // alert('fill all the fields')
        } else {
            console.log(`fullname: ${fullName},\n postcode: ${postcode},\n house: ${house},\n city: ${city},\n number: ${number},\n email: ${email}`);
            // reset the value to empty string
            setFullName('')
            setPostcode('')
            setHouse('')
            setCity('')
            setNumber('')
            setEmail('')
        }
    }

    // function toggleError() {
    //     setErrorVis(true)
    // }

    return (
        <>
            <form className={styles.form} onSubmit={handleCLick}>
                <fieldset className={styles.personalInfo}>
                    <legend className={styles.legend}>Personal Information</legend>
                    <label className={styles.label} htmlFor="fname">Full name*</label>
                    <input className={styles.input} type="text" value={fullName} name="fname"
                        onChange={(e) => setFullName(e.target.value)} />

                    <label className={styles.label} htmlFor="postcode">Postcode*</label>
                    <input className={styles.input} type="text" value={postcode} name="postcode"
                        onChange={(e) => setPostcode(e.target.value)} />

                    <label className={styles.label} htmlFor="house">House/Flat Number and Street Name*</label>
                    <input className={styles.input} type="text" value={house} name="house"
                        onChange={(e) => setHouse(e.target.value)} />

                    <label className={styles.label} htmlFor="city">City*</label>
                    <input className={styles.input} type="text" value={city} name="city"
                        onChange={(e) => setCity(e.target.value)} />
                </fieldset>

                <fieldset className={styles.contactInfo}>
                    <legend className={styles.legend}>Contact Information</legend>
                    <label className={styles.label} htmlFor="number">Phone number*</label>
                    <input className={styles.input} type="tel" value={number} name="number"
                        onChange={(e) => setNumber(e.target.value)} />

                    <label className={styles.label} htmlFor="email">Email Address*</label>
                    <input className={styles.input} type="email" value={email} name="email"
                        onChange={(e) => setEmail(e.target.value)} />
                </fieldset>
                {!fullName || !postcode || !house || !city || !number || !email ?
                    <p className={styles.error}>Error all fields are required - some missing.</p> : null}
                <button type="submit" className={styles.submit} >Request Design Consultation</button>
            </form>
        </>
    )
}

export default ContactForm;