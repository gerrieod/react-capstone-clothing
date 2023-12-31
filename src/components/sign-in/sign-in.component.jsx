import { useState } from "react"
import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES}from "../button/button.component";
import "./sign-in.style.scss"

const defaultFormFields = {
    email: "",
    password: "",
}

const SignInForm = () => {

    const [formFields, setFromFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFromFields(defaultFormFields);
    }

    const signInWithGoole = async () => {
        await signInWithGooglePopup();
       
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (err) {
            switch (err.code){
                case "auth/wrong-password":
                    alert("incorrect password for email!")
                    break;
                case "auth/user-not-found":
                    alert("user not found!");
                    break;
                default:
                    alert("Unknown error");
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFromFields({ ...formFields, [name]: value });
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account</h2>
            <span>Signup with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email}></FormInput>
                <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password}></FormInput>
                <div className="buttons-container">
                    <Button type="submit">Sign in</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoole}>Google sign in</Button>
                </div>

            </form>
        </div>
    )
}

export default SignInForm