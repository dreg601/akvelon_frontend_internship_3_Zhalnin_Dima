import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";

export function RegistrationForm () {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [nameDirty, setNameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [nameError, setNameError] = useState('Name field must match /^[a-zA-Z\\s]{1,120}$/')
    const [emailError, setEmailError] = useState('Email field should contain at least 1 symbol')
    const [passwordError, setPasswordError] = useState('Password field should contain at least 8 symbols')

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    const nameHandler = (e) => {
        setName(e.target.value)
        const re = /^[a-zA-Z\s]{1,120}$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setNameError('Incorrect Name')
        }
        else {
            setNameError('')
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length <1) {
            setPasswordError('Email field should contain at least 1 symbols')
        }
        else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length <8) {
            setPasswordError('Password field should contain at least 8 symbols')
        }
        else {
            setPasswordError('')
        }
    }

    const handleClick = () => {
        console.log({name}, {email}, {password})
    }

    return(
        <div style={{
            'display': "inline-block",
            'text-allign': 'center'
        }}>
            <Form style={{
                'display': 'block',
                'margin-left': 'auto',
                'margin-right': 'auto'}}>
                <p><Form.Label>Registration</Form.Label></p>
                {(nameDirty && nameError) && <div style={{'color': 'red'}}>{nameError}</div>}
                <p><input onChange={e=> nameHandler(e)} onBlur={e=> blurHandler(e)} value={name} name='name' type='text' placeholder='Enter your full name'/></p>
                {(emailDirty && emailError) && <div style={{'color': 'red'}}>{emailError}</div>}
                <p><input onChange={e=> emailHandler(e)} onBlur={e=> blurHandler(e)} value={email} name='email' type='email' placeholder='Enter e-mail'/></p>
                {(passwordDirty && passwordError) && <div style={{'color': 'red'}}>{passwordError}</div>}
                <p><input onChange={e=> passwordHandler(e)} onBlur={e=> blurHandler(e)} value={password} name='password' type='password' placeholder='Enter password'/></p>
                <Button style={{'margin-top': '10px'}} onClick={handleClick}>Sign in</Button>
            </Form>
        </div>
    )
}
