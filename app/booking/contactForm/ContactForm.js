'use client'
import styles from "./ContactForm.module.css"
import { useReducer } from "react";
import React from "react";

const initialState = {
    data: {
        fullName: "",
        postcode: "",
    },
    error: false,
}

function reducer(state, action) {
    switch (action.type) {
        case 'SET_FIELD':
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.payload.field]: action.payload.value
                }
            };
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
        default:
            return state;
    }
}

const ContactForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state)
    function handleClick(e) {
        e.preventDefault();
        if (!state.data.fullName || !state.data.postcode) {
            dispatch({ type: 'SHOW_ERROR' });
        } else {
            dispatch({ type: 'CLEAR_ERROR' });

        }
    }

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
                    {/* city input */}
                </fieldset>

                {/* new filedset with email and phone number */}
                {state.error && (
                    <p className={styles.error}>Error: All fields are required - some are missing.</p>
                )}

                <button type="submit" className={styles.submit}>Request Design Consultation</button>
            </form>
        </>
    );
}

export default ContactForm;
