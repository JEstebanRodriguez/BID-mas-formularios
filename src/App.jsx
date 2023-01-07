import React, { useState } from 'react'
import Input from './components/Input'

const App = () => {
	const [firstname, setFirstname] = useState('')
	const [lastname, setLastname] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const [firstnameError, setFirstnameError] = useState('')
	const [lastnameError, setLastnameError] = useState('')
	const [emailError, setEmailError] = useState('')
	const [passwordError, setPasswordError] = useState('')
	const [confirmPasswordError, setConfirmPasswordError] = useState('')

	const handleFirstNameChange = ({ target }) => {
		setFirstname(target.value)
		console.log(firstname)
		firstname.length < 2
			? setFirstnameError('El campo debe tener al menos 2 caracteres')
			: setFirstnameError('')
	}
	const handleLastNameChange = ({ target }) => {
		setLastname(target.value)
		lastname.length < 2
			? setLastnameError('El campo debe tener al menos 2 caracteres')
			: setLastnameError('')
	}
	const handleEmailChange = ({ target }) => {
		setEmail(target.value)
		email.length < 5
			? setEmailError('El campo debe tener al menos 5 caracteres')
			: setEmailError('')
	}

	const handlePasswordChange = ({ target }) => {
		setPassword(target.value)
		password.length < 8
			? setPasswordError('El campo debe tener al menos 8 caracteres')
			: setPasswordError('')
	}
	const handleConfirmPasswordChange = ({ target }) => {
		setConfirmPassword(target.value)
		password !== target.value
			? setConfirmPasswordError('Las contraseñas no coinciden')
			: setConfirmPasswordError('')
	}

	return (
		<div className='container py-3'>
			<div className='row'>
				<div className='col-md-4 offset-md-4'>
					<form>
						<Input
							label='First Name'
							type='text'
							name='firstname'
							placeholder='First name'
							value={firstname}
							handleChange={handleFirstNameChange}
							err={firstnameError}
						/>
						<Input
							label='Last Name'
							type='text'
							name='lastname'
							placeholder='Last name'
							value={lastname}
							handleChange={handleLastNameChange}
							err={lastnameError}
						/>
						<Input
							label='Email Address'
							type='email'
							name='email'
							placeholder='Email Address'
							value={email}
							handleChange={handleEmailChange}
							err={emailError}
						/>
						<Input
							label='Password'
							type='password'
							name='password'
							placeholder='Password'
							value={password}
							handleChange={handlePasswordChange}
							err={passwordError}
						/>
						<Input
							label='Confirm Password'
							type='password'
							name='confirm_password'
							placeholder='Password'
							value={confirmPassword}
							handleChange={handleConfirmPasswordChange}
							err={confirmPasswordError}
						/>
					</form>
				</div>
			</div>
		</div>
	)
}

export default App
