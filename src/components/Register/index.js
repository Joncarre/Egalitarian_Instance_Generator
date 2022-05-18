import { React } from 'react';
import { useForm } from 'react-hook-form';
import * as emailjs from "emailjs-com";
import { generatorAddress, requestAccount } from '../../App.js';
import { ethers } from 'ethers';
import Generator from '../../artifacts/contracts/Generator.sol/Generator.json';
import {
	Container,
	FormButton,
} from './RegisterElements';

import {
	FormContent,
	FormLabel,
	FormInput,
	FormError,
	Form,
	FormH1,
} from '../FormElements'

import { useHistory } from "react-router-dom";

const Register = () => {
	var sha256 = require('js-sha256');
	var secret, name, email, orcid;
	let history = useHistory();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm();

	const sendEmail = (formData, e) => {
		secret = sha256(e.target.orcid.value);
		name = e.target.name.value;
		email = e.target.email.value;
		orcid = e.target.orcid.value;
		e.target.orcid.value = cutHash(secret);
		secret = e.target.orcid.value;
		// Send email
		emailjs.sendForm("dapp_gmail", "dapp_mail_template", e.target, "user_8Njq6OjGUsVPoTG1GpG30")
			.then((result) => {
				console.log(result.text);
				history.push("/signin");
			}, (error) => {
				console.log(error.text);
			});
		async_setResearcher();
		reset();
	};

	function cutHash(elem) {
		var cut = elem.replace(/[^0-9]/g, '');
		var result = cut.substring(0, 10);
		return result;
	}

	/*
	* Inserts a new researcher
	*/
    async function async_setResearcher(data) {
        if (typeof window.ethereum !== 'undefined') {
            await requestAccount()
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner()
            const contract = new ethers.Contract(generatorAddress, Generator.abi, signer);
            try {
				const transaction = await contract.setResearcher(
					secret,
					name,
					email,
					orcid,
					{ gasLimit: 12000000 })
				await transaction.wait()
            } catch (e) {
			   alert("This ORCID is already registered.");
            }
        }
    }

	return (
		<Container>
			<FormContent>
				<Form onSubmit={handleSubmit(sendEmail)}>
					<FormH1>Register your information</FormH1>
					<FormLabel>Name</FormLabel>
					<FormInput
						{...register("name", {
							required: true,
							maxLength: 20,
							pattern: /^[A-Za-z]+$/i
						})} type="text" name="name" />
					{errors?.name?.type === "required" && <FormError>This field is required</FormError>}
					{errors?.name?.type === "maxLength" && <FormError>First name cannot exceed 20 characters</FormError>}
					{errors?.name?.type === "pattern" && <FormError>Alphabetical characters only</FormError>}
					<FormLabel>Email</FormLabel>
					<FormInput
						{...register("email", {
							required: true,
							pattern: /\S+@\S+\.\S+/
						})} type="email" name="email" />
					{errors?.email?.type === "required" && <FormError>This field is required</FormError>}
					{errors?.email?.type === "pattern" && <FormError>Entered value does not match email format</FormError>}
					<FormLabel>ORCID</FormLabel>
					<FormInput {...register("orcid", {
						required: true,
						minLength: 16,
						maxLength: 16,
						pattern: /^[0-9\b]+$/
					})} type="number" name="orcid" />
					{errors?.orcid?.type === "required" && <FormError>This field is required</FormError>}
					{errors?.orcid?.type === "minLength" && <FormError>It must be a number of 16 digits</FormError>}
					{errors?.orcid?.type === "maxLength" && <FormError>It must be a number of 16 digits</FormError>}
					{errors?.orcid?.type === "pattern" && <FormError>Numerical characters only</FormError>}
					<FormButton type="submit" />
				</Form>
			</FormContent>
		</Container>

	)
}

export default Register;