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
    fieldErrors: {
        fullName: "",
        postcode: "",
        number: "",
        email: "",
    },
    loadingState: false,
    successState: false,
    error: false,
};
// reducer function
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
        case 'SET_FIELD_ERROR':
            return {
                ...state,
                fieldErrors: {
                    ...state.fieldErrors,
                    [action.payload.field]: action.payload.error,
                },
            };
        case 'CLEAR_FIELD_ERROR':
            return {
                ...state,
                fieldErrors: {
                    ...state.fieldErrors,
                    [action.payload.field]: "",
                },
            };
        default:
            return state;
    }
}

//component
const ContactForm = () => {
    //declaring our reducer hook
    const [state, dispatch] = useReducer(reducer, initialState);
// validating fullName function
    function validateFullName(fullName) {
        const namePattern = /^[A-Za-z]+ [A-Za-z]+$/;
        if (!namePattern.test(fullName)) {
            return "Full name must contain only alphabetical characters and include both a first and last name.";
        }
        return "";
    }


// validating postcode function
    function validatePostcode(postcode) {
            // Regular expression to match valid UK postcode formats
            
            const postcodePattern = /^[A-Z]{1,2}\d{1,2}[A-Z\d]? \d[A-Z]{2}$/;
            // Remove any spaces from the postcode before testing
            
            // Test the postcode against the pattern - This line removes any spaces from the input postcode. It uses replace with a regular expression (\s matches any whitespace character) and the g flag to replace all occurrences of spaces with an empty string.
            if(!postcodePattern.test(postcode)) {
                return "Please enter a valid UK Postcode"
            }
            return "";
        }
// validateUkTelNum
function validateUkTelNum(number) {
    const numberPattern = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
    if (!numberPattern.test(number)) {
        return "Number must be a UK valid number";
    }
    return "";
}
// validateUkTelNum
function validatEmail(email) {
    const emailPattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])?$/;
    if (!emailPattern.test(email)) {
        return "Email must be a valid format";
    }
    return "";
}
    function handleSubmit(e) {
        // Prevents constant refresh of form
        e.preventDefault();

// full name dispatches depending on t/f
        const fullNameError = validateFullName(state.data.fullName);
        if (fullNameError) {
            dispatch({
                type: 'SET_FIELD_ERROR',
                payload: { field: 'fullName', error: fullNameError }
            });

        } else {
            dispatch({ 
                type: 'CLEAR_FIELD_ERROR', 
                payload: { field: 'fullName' } });
        }
// postcode dispatches depending on t/f
        const postcodeError = validatePostcode(state.data.postcode);
        if (postcodeError) {
            dispatch({
                type: 'SET_FIELD_ERROR',
                payload: {field: 'postcode', error: postcodeError }
            })
        } else {
            dispatch({ 
                type: 'CLEAR_FIELD_ERROR', 
                payload: { field: 'postcode' } });
        }
        // number dispatches depending on t/f
        const numberError = validateUkTelNum(state.data.number);
        if (numberError) {
            dispatch({
                type: 'SET_FIELD_ERROR',
                payload: {field: 'number', error: numberError }
            })
        } else {
            dispatch({ 
                type: 'CLEAR_FIELD_ERROR', 
                payload: { field: 'number' } 
            });
        }
        // email dispatches depending on t/f
        const emailError = validatEmail(state.data.email);
        if (emailError) {
            dispatch({
                type: 'SET_FIELD_ERROR',
                payload: {field: 'email', error: emailError }
            })
        } else {
            dispatch({ 
                type: 'CLEAR_FIELD_ERROR', 
                payload: { field: 'email' } 
            });
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
            {state.successState ? <p className={styles.successMessage}>We have got your request we will call you back as soon as possible!</p> : <Form state={state} dispatch={dispatch} onSubmit={handleSubmit} />}
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


/////////////////////////////////////////////////////////////////////////



//1. put postcode in inital state -empty string
//create the function that contains and tests postcode input against anything other than UK postcode format


// 2. Copy code
// function isValidUKPostcode(postcode) {
//     // Regular expression to match valid UK postcode formats
//     const postcodePattern = /^([A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}|GIR\s?0AA)$/i;
    
//     // Remove any spaces from the postcode before testing
//     const formattedPostcode = postcode.replace(/\s/g, '');
    
//     // Test the postcode against the pattern
//     return postcodePattern.test(formattedPostcode);
// }


// 3. //Modify handleClick:
//I need to create an error variable called postcodeError that is compared to the isValidUKPostcode function (this takes its data from the regex)
// if else conditionals where we create our actions
//type: SET_POSTCODE_ERROR
//type: CLEAR_POSTCODE_ERROR
//add your variable to the list of SHOW_ERROR. This will mean that if an error is found your code will know to show the action of SHOW_ERROR.
