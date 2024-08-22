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
    nameError: false
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
            case 'SET_NAME_ERROR':
                return {
                    ...state,
                    nameError: true,

                };
            case 'CLEAR_NAME_ERROR':
                return {
                    ...state,
                    nameError: false,
                }
        default:
            return state;
    }
}

const ContactForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function validateFullName(fullName){
        const namePattern = /^[A-Za-z]+ [A-Za-z]+$/;
        if(!namePattern.test(fullName)){
            return "Full name must contain only alphabetical characters and include both a first and last name.";
    }
    return "";
    }

    function handleSubmit(e) {
        // Prevents constant refresh of form
        e.preventDefault();


    const fullNameError = validateFullName(state.data.fullName);
    if (fullNameError){
        dispatch({type: 'SET_NAME_ERROR'})
        
    } else {
        dispatch({type: 'CLEAR_NAME_ERROR'})
    }



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



//pseudocode
//add your new state field to initialState = nameError: false,

//Add Validation Function:
//Create a function that checks your state can only have inputs that you want
//fullName case /^[A-Za-z]+ [A-Za-z]+$/  (bunch of random characters)
//if (!namePattern.test(fullName)) .test here is not related to unit testing or anything similar.
//it is the .test() method used for checking a string against a regular expression(regex aka the bunch of random characters)
// In our case if the tested fullName is not the same as the namePattern then we return an error message.
//im Assuming that the return "" empty field is to let the code know that if it is correct the error stays empty.

//Modify handleClick:
//I need to create an error variable called fullNameError that is compared to the validateFullName function (this takes its data from the regex)
// if else conditionals where we create our actions
//type: SET_NAME_ERROR
//type: CLEAR_NAME_ERROR
//add your variable to the list of SHOW_ERROR. This will mean that if an error is found your code will know to show the action of SHOW_ERROR.

//Update the Reducer
//update with the name error cases
//One case rhows the error the other does not. SET_NAME_ERROR (data included)  CLEAR_NAME_ERROR (empty)


//Display error in jsx
// if the state.nameError is true then it will change the css being shown
{/* <input
   /////className={`${styles.input} ${state.nameError ? styles.errorOutline : ''}`}////////
    type="text"
    value={state.data.fullName}
    name="fullName"
    onChange={handleChange}
/> */}

//Here it automatically runs error as true so we will need to change the code
//basically saying hey if this is true render the css that we want to show muahahahaa
// {state.nameError && <p className={styles.error}>{state.nameError}</p>}