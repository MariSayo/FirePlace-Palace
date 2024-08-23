## change useState to useReduce

```
const [fullName, setFullName] = useState('');

```

- import the reducer ✅
- declare the initial state ✅
- declare the reducer✅
- declare the reducer function✅
- declare the switch statement with a default return ✅

- add rest of the states

````
    const [postcode, setPostcode] = useState('');
   const [house, setHouse] = useState('');
   const [city, setCity] = useState('');
   const [number, setNumber] = useState('');
   const [email, setEmail] = useState('');
   const [showError, setShowError] = useState(false);
   ```
````

**Plan**

objectives:

- improve usability = show when the form is submitting (loading state on button).
- validated = hide form, show = success
- error in submission = error
- incorrectly submitted the form = see an error under each field that has failed validation. The error should be specific to the field ("Not a valid phone number", "No bookings outside of England, Wales or Scotland").

Design Asset:
https://drive.google.com/drive/folders/1eVcRBiKDzl5_-Ic9vjTn-vChwi1Q8zLL?usp=sharing

DONE WITH USEREDUCER BASICS.

User perspective:

- after you press button
- loading state on button appears
- if it submits = success : form hides/ success page appears in its place. - conditional statement - hide and show

- if fail then loading stops
- revert back to original button
- error shows specifically on the input/box with an issue- box is red. There is a seperate error message for each box.

- (alt)- submit = success= it takes you to new page that says success
  😴
  Step 1: Create a loading state - make sure handleSubmit dispatches action to say form is submitting. - apply loading state to preixisting button - create using useTimeout (2 seconds)
  -dispatch second action to say form submitted successfully

Step 2: Success action

- dispatch second action to say form submitted successfully conitnued..
- conditional statements

Step 3: Link loading state and error
If error is present stop loading screen on button - make sure button normal again ( cant continously show it as loading state)

step 4: Error shows as red box around input that has errored

- there is indiviudal error message below each box

**HACKATHON PLAN GO GO GO 🔥**

   `“npm init playwright@latest”`
    - You should be asked a few questions:
         - Choose JavaScript.
         - Choose `tests` (this is the folder where it'll place your tests).
         - If asked to add a GitHub Actions workflow, choose `no`.
         -If asked to install Playwright browsers, choose `yes`.
        - delete pre-created test files

example User Journeys
- load the home page, click into the booking page, fill out the form, submit the form etc.
-  load the home page then interact with the reviews components.
- these are very broad examples.


**USER JOURNEY 1- from homepage to opening the reviews**
- user clicks link - Checks URL correct
- homepage appears
- User scroll to reviews
- press individual reviews buttons
- individual reviews pop up

stretch:
- Did not test the closeability of the buttons

**USER JOURNEY 2- getting to the form and submitting the form**
- user clicks link - Checks URL correct
- homepage appears
- User scroll to Link for form
- User clicks link
- Form page appears - Checks URL correct
- User fills in all fields correctly
- clicks submit button
- loading button appears
- success box appears


stretch:
- Where to go from success page?
- reload to homepage?

**USER JOURNEY 3- getting to form and submitting incorrect information**
- user clicks link - Checks URL correct
- homepage appears
- User scroll to Link for form
- User clicks link
- Form page appears - Checks URL correct
- User submits one input box incorrectly
- clicks submit button
- errors appear below input box/ possibly at bottom of screen as well

stretch:
- test errors for each input.