import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";
import { generatorAddress } from '../../App.js';
import { ethers } from 'ethers';
import Generator from '../../artifacts/contracts/Generator.sol/Generator.json';

import { secureStorage } from 'components/secureSession';

import {
	Container,
	FormButton
} from './SinginElements'

import {
	FormContent,
	FormLabel,
	FormInput,
	FormError,
	Form,
	FormH1,
} from '../FormElements'

const SignIn = () => {

	let history = useHistory();
	const [hasPassError, setHasPassError] = useState(false);
	const [noPassError, setNoPassError] = useState(sessionStorage.getItem("noPassword"));

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	useEffect(() => {
		secureStorage.removeItem("password");
		return (() => {
			sessionStorage.removeItem("noPassword");
		})
	}, [])

	async function async_checkPass(data) {
		if (typeof window.ethereum !== 'undefined') {
			const provider = new ethers.providers.Web3Provider(window.ethereum)
			const contract = new ethers.Contract(generatorAddress, Generator.abi, provider);
			try {
				const signer = provider.getSigner();
				const result = await contract.connect(signer).checkPass(data.secret);
				if (result) {
					secureStorage.setItem('password', data.secret);
					history.push("/user");
				} else {
					setHasPassError(true);
				}
			} catch (err) {
				console.log("Error: ", err);
			}
		}
	}

	const handleChange = () => {
		setHasPassError(false);
		setNoPassError(false);
		sessionStorage.removeItem("noPassword");
	}

	return (
		<Container>
			<FormContent>
				<Form onSubmit={handleSubmit(async_checkPass)}>
					<FormH1>Access to information</FormH1>
					<FormLabel>Password from email</FormLabel>
					<FormInput {...register("secret", {
						required: true,
						minLength: 10,
						maxLength: 10,
						pattern: /^[0-9\b]+$/
					})} type="number" name="secret" onChange={() => handleChange()} />
					{errors?.secret?.type === "required" && <FormError>This field is required</FormError>}
					{errors?.secret?.type === "minLength" && <FormError>It must be a number of 10 digits</FormError>}
					{errors?.secret?.type === "maxLength" && <FormError>It must be a number of 10 digits</FormError>}
					{errors?.secret?.type === "pattern" && <FormError>Numerical characters only</FormError>}
					{hasPassError && <FormError>Incorrect password</FormError>}
					{noPassError && <FormError>Please enter valid password first</FormError>}
					<FormButton type="submit" />
				</Form>
			</FormContent>
		</Container>
	)
}

export default SignIn;