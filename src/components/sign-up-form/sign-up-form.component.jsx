import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-up-form.style.scss"
const defaultFormFields ={
    displayName: "",
    email: "",
    password: "",
    confrimPassword: "",
}

const SignUpForm = () =>{

    const [formFields, setFromFields] = useState(defaultFormFields);
    const {displayName, email, password, confrimPassword} = formFields;

    const resetFormFields = () =>{
        setFromFields(defaultFormFields);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        // confirm password match
        if(password != confrimPassword){
            alert("Passwords did not match");
            return
        } 
        
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        }catch(err){
            if(err.code === 'auth/email-already-in-use'){
                alert("Cannot create user emails address already in use");
            }else{
                console.log("user creation encounterd an error", err);
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFromFields({...formFields, [name]: value});
    }

    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Signup with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" required type="text" onChange={handleChange} name="displayName" value={displayName}></FormInput>
                <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email}></FormInput>
                <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password}></FormInput>
                <FormInput label="Confirm Password" required type="password" onChange={handleChange} name="confrimPassword" value={confrimPassword}></FormInput>
                <Button type="submit">Sign up</Button>
            </form>
        </div>
    )
}

export default SignUpForm