'use client'
import styles from "./ContactForm.module.css"
import { useReducer } from "react";
import React from "react";

//setting the initialState
const initialState = {
    data: {
        fullName: "",
        postcode: "",
        house: "",
        city: "",
        number: "",
        email: ""
    },
    loadingState: false,
    error: false,
}

function reducer(state, action) {
    switch (action.type) {
        case 'SET_FIELD':
            return {
                //here it is spreading the state. Copies the stuff in initialState as its own state (as an object) 
                //and then when you ask for data it gives you the data in the copied state.
                ...state,
                data: {
                    ...state.data,
                    //this code goes into the 
                    [action.payload.field]: action.payload.value
                }
            }
        case 'SHOW_ERROR':
            return {
                ...state,
                error: true
            }
        case 'CLEAR_ERROR':
            return {
                ...state,
                error: false
            }
        case 'RESET_FIELDS':
            return { ...initialState }
        case 'BUTTON_SWITCH':
            return {
                ...state,
                data: {
                    ...state.data
                },
                loadingState: true,
            }
        default:
            return state;
    }
}

const ContactForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    function handleClick(e) {
        //prevents constant refresh of form
        e.preventDefault();
        //if not {object} then show error otherwise no error shown
        if (!state.data.fullName || !state.data.postcode || !state.data.house || !state.data.city) {
            dispatch({ type: 'SHOW_ERROR' });
        } else {
            dispatch({ type: 'CLEAR_ERROR' });
            dispatch({ type: 'BUTTON_SWITCH' });

            setTimeout(() => {
                dispatch({ type: 'RESET_FIELDS' });
            }, 2000)
        }
    }


    //function for the dispatch aka the action part. what is inputted in the CASE return part of reducer function
    function handleChange(e) {
        dispatch({
            type: 'SET_FIELD',
            payload: {
                field: e.target.name,
                value: e.target.value
            }
        });
    }

    return (
        <>
            <form className={styles.form} onSubmit={handleClick}>
                <fieldset className={styles.personalInfo}>
                    <legend className={styles.legend}>Personal Information</legend>
                    {/* fullName input */}
                    <label className={styles.label} htmlFor="fullName">Full name*</label>
                    <input className={styles.input}
                        type="text"
                        value={state.data.fullName}
                        name="fullName"
                        onChange={handleChange} />

                    {/* postcode input */}
                    <label className={styles.label} htmlFor="postcode">Postcode*</label>
                    <input className={styles.input}
                        type="text"
                        value={state.data.postcode}
                        name="postcode"
                        onChange={handleChange} />
                    {/* house address input */}
                    <label className={styles.label} htmlFor="house">House/Flat Number and Street Name*</label>
                    <input className={styles.input}
                        type="text"
                        value={state.data.house}
                        name="house"
                        onChange={handleChange} />
                    {/* city input */}
                    <label className={styles.label} htmlFor="city">City*</label>
                    <input className={styles.input}
                        type="text"
                        value={state.data.city}
                        name="city"
                        onChange={handleChange} />
                </fieldset>

                {/* new filedset with email and phone number */}

                <fieldset className={styles.contactInfo}>
                    <legend className={styles.legend}>Contact Information</legend>
                    <label className={styles.label} htmlFor="number">Phone number*</label>
                    <input className={styles.input}
                        type="tel"
                        value={state.data.number}
                        name="number"
                        onChange={handleChange} />

                    <label className={styles.label} htmlFor="email">Email Address*</label>
                    <input className={styles.input}
                        type="email"
                        value={state.data.email}
                        name="email"
                        onChange={handleChange} />
                </fieldset>

                {state.error && (
                    <p className={styles.error}>Error: All fields are required - some are missing.</p>
                )}



                <button type="submit" className={styles.submit}>
                    {!state.loadingState ? "Request Design Consultation" : "Loading..."}
                </button>
            </form>
        </>
    );
}

export default ContactForm;
