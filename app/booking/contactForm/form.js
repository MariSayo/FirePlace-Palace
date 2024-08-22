import styles from './ContactForm.module.css';

const Form = ({ state, dispatch, onSubmit }) => {
    const formOptions = [
        { Labelfor: "fullName", Labelcontent: "Full Name*", inputType: "text", inputValue: state.data.fullName, inputName: "fullName" },
        { Labelfor: "postcode", Labelcontent: "Postcode*", inputType: "text", inputValue: state.data.postcode, inputName: "postcode" },
        { Labelfor: "house", Labelcontent: "House/Flat Number and street name*", inputType: "text", inputValue: state.data.house, inputName: "house" },
        { Labelfor: "city", Labelcontent: "City*", inputType: "text", inputValue: state.data.city, inputName: "city" },
    ];

    const extraFormOptions = [
        { Labelfor: "number", Labelcontent: "Tel number*", inputType: "tel", inputValue: state.data.number, inputName: "number" },
        { Labelfor: "email", Labelcontent: "Email*", inputType: "email", inputValue: state.data.email, inputName: "email" },
    ];

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
            {/*  fieldset with fullname, postcode, address and city */}
            <form className={styles.form} onSubmit={onSubmit}>
                <fieldset className={styles.personalInfo}>
                    <legend className={styles.legend}>Personal Information</legend>
                    {formOptions.map((formInput) => (
                        <div key={formInput.inputName} className={styles.inputGroup}>
                            <label className={styles.label} htmlFor={formInput.Labelfor}>{formInput.Labelcontent}</label>
                            <input
                                className={`${styles.input} ${state.fieldErrors[formInput.inputName] ? styles.errorOutline : ''}`}
                                type={formInput.inputType}
                                value={formInput.inputValue}
                                name={formInput.inputName}
                                onChange={handleChange}
                            />
                            {state.fieldErrors[formInput.inputName] && (
                                <p className={styles.errorMessage}>{state.fieldErrors[formInput.inputName]}</p>
                            )}
                        </div>
                    ))}
                </fieldset>

                {/*  fieldset with email and phone number */}
                <fieldset className={styles.contactInfo}>
                    <legend className={styles.legend}>Contact Information</legend>
                    {extraFormOptions.map((formInput) => (
                        <div key={formInput.inputName} className={styles.inputGroup}>
                            <label className={styles.label} htmlFor={formInput.Labelfor}>{formInput.Labelcontent}</label>
                            <input
                                className={`${styles.input} ${state.fieldErrors[formInput.inputName] ? styles.errorOutline : ''}`}
                                type={formInput.inputType}
                                value={formInput.inputValue}
                                name={formInput.inputName}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                </fieldset>
                <p className={styles.error}>{state.error ? "Fill out all the forms" : ""}</p>
                <button type="submit" className={styles.submit}>
                    {state.loadingState ? "Loading..." : "Request Design Consultation"}
                </button>
            </form>
        </>
    );
};

export default Form;
