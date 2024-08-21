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
