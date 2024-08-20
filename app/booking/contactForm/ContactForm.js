'use client'
import styles from "./ContactForm.module.css"
import {useState} from "react";
import React from "react";

const ContactForm = () => {
    const [fullName, setFullName] = useState('');
    const [postcode, setPostcode] = useState('');
    const [house, setHouse] = useState('');
    const [city, setCity] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');

function handleCLick(e) {
    e.preventDefault();
    console.log(fullName);
    console.log("clicked");
}

    return (
        <>
            <form action="" className={styles.form} onSubmit={handleCLick}>
            <fieldset className={styles.personalInfo}>
            <legend className={styles.legend}>Personal Information</legend>
                <label className={styles.label} htmlFor="fname">Full name</label>
                <input className={styles.input} type="text" id="fname" name="fname" onChange={(e)=> setFullName(e.target.value)}/>

                <label className={styles.label} htmlFor="postcode">Postcode</label>
                <input className={styles.input} type="text" id="postcode" name="postcode" onChange={(e)=> setPostcode(e.target.value)}/>

                <label className={styles.label} htmlFor="house">House/Flat Number and Street Name</label>
                <input className={styles.input} type="text" id="house" name="house" onChange={(e)=> setHouse(e.target.value)}/>

                <label className={styles.label} htmlFor="city">City</label>
                <input className={styles.input} type="text" id="city" name="city" onChange={(e)=> setCity(e.target.value)}/>
                </fieldset>
           
            <fieldset className={styles.contactInfo}>
            <legend className={styles.legend}>Contact Information</legend>
                <label className={styles.label} htmlFor="number">Phone number</label>
                <input className={styles.input} type="tel" id="number" name="number"onChange={(e)=> setNumber(e.target.value)}/>

                <label className={styles.label} htmlFor="email">Email Address</label>
                <input className={styles.input} type="email" id="email" name="email" onChange={(e)=> setEmail(e.target.value)}/>
                </fieldset>

                <button type="submit" className={styles.submit}>Request Design Consultation</button>
            </form>

            
        </>
    )
}

export default ContactForm;