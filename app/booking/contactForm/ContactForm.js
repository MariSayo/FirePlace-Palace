'use client';
import { useReducer } from "react";
import React from "react";
import Form from './form';
import styles from './ContactForm.module.css'

// Setting the initialState
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
    successState: false,
    error: false,
};

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
            };
        case 'CLEAR_ERROR':
            return {
                ...state,
                error: false
            };
        case 'RESET_FIELDS':
            return {
                ...initialState,
                successState: state.successState, // Preserve successState on reset
            };
        case 'BUTTON_SWITCH':
            console.log('Button Switch Triggered');
            return {
                ...state,
                loadingState: true,
            };
        case 'SUCCESS_TOGGLE':
            return {
                ...state,
                loadingState: false,  // Reset loading state after success
                successState: true,
            };
        default:
            return state;
    }
}

const ContactForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleSubmit(e) {
        // Prevents constant refresh of form
        e.preventDefault();

        // Start loading and clear previous error
        dispatch({ type: 'CLEAR_ERROR' });


        // If required fields are not filled, show an error
        if (!state.data.fullName || !state.data.postcode || !state.data.house || !state.data.city || !state.data.number || !state.data.number) {
            dispatch({ type: 'SHOW_ERROR' });
        } else {
            dispatch({ type: 'BUTTON_SWITCH' }); // change loading state to true (changing text to loading)
            setTimeout(() => {
                dispatch({ type: 'RESET_FIELDS' }); // resets fields
                dispatch({ type: 'SUCCESS_TOGGLE' });
                console.log(state);
            }, 2000);
        }
    }

    return (
        <>
            {state.successState ? <p className={styles.successMessage}>Success!!!!!</p> : <Form state={state} dispatch={dispatch} onSubmit={handleSubmit} />}
        </>
    );
};

export default ContactForm;
