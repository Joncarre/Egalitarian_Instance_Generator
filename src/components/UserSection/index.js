import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";
import { generatorAddress, requestAccount } from '../../App.js';
import { ethers } from 'ethers';
import Generator from '../../artifacts/contracts/Generator.sol/Generator.json';
import './messagesInfo.css'
import { buildInstance, buildDateArray } from './supportFunctions'
import swal from 'sweetalert';
import { secureStorage } from 'components/secureSession';
import {
  Container,
  FormButton,
  ButtonFlex,
  FormButtonTop,
  Form,
  FormH1,
  FormWrap1,
  FormWrap2,
} from './UserElements'
import {
  FormLabel,
  FormInput,
  FormError
} from '../FormElements'
import logo from '../../images/chainlink.png';

const UserSection = () => {
  var infoArray = [];
  var currentRandomNumber = null;
  var oldRandomNumber = null;
  let history = useHistory();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const {
    register: register2,
    reset: reset2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 }
  } = useForm();

  useEffect(() => {
    // Check whether user entered the password before, if not, go back to /signin page
    if (!secureStorage.getItem('password')) {
      secureStorage.removeItem("password");
      secureStorage.removeItem("currOrcid");
      sessionStorage.setItem("noPassword", true);
      history.push("/signin");
    }
  }, [history])

  useEffect(() => {
    secureStorage.removeItem("currOrcid");
  }, [])

  /*
  * Function to check if the user wnats to use A or B generator
  */
  async function myHandleSubmit(data, event) {
    if (event.nativeEvent.submitter?.id === "submit1")
      async_createAInstance(data);
    else if (event.nativeEvent.submitter?.id === "submit2")
      async_createBInstance(data);
    else if (event.nativeEvent.submitter?.id === "submit3")
      async_createCInstance(data);
  }

  /*
  * This function executes the function to generate a new instance using A generator
  */
  async function async_createAInstance(data) {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(generatorAddress, Generator.abi, signer);
      const transaction = await contract.createAInstance(
        data.agents,
        data.resources,
        secureStorage.getItem('password'),
        data.numInstances,
        secureStorage.getItem('limited'),
        { gasLimit: 30000000 })
      await transaction.wait()
    }
  }

  /*
  * This function executes the function to generate a new instance using B generator
  */
  async function async_createBInstance(data) {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(generatorAddress, Generator.abi, signer);
      const transaction = await contract.createBInstance(
        data.agents,
        data.resources,
        secureStorage.getItem('password'),
        data.numInstances,
        secureStorage.getItem('limited'),
        { gasLimit: 30000000 })
      await transaction.wait()
    }
  }

  /*
  * This function executes the function to generate a new instance using C generator
  */
  async function async_createCInstance(data) {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(generatorAddress, Generator.abi, signer);
      const transaction = await contract.createCInstance(
        data.agents,
        data.resources,
        secureStorage.getItem('password'),
        data.numInstances,
        secureStorage.getItem('limited'),
        { gasLimit: 30000000 })
      await transaction.wait()
    }
  }

  /*
  * Get all instances from smart contract filtered by orcid
  */
  async function async_getAllInstances(data) {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(generatorAddress, Generator.abi, provider);
      try {
        const signer = provider.getSigner();
        const result = await contract.connect(signer).getAllInstances(data.orcid);
        infoArray = buildInstance(result);
        console.log(infoArray);
        secureStorage.setItem("currOrcid", data.orcid)
        history.push({
          pathname: '/instances',
          state: { infoArray }
        });
      } catch (err) {
        console.log("Error: ", err)
      }
    }
  }

  /*
  * VRF function to request the random number
  */
  async function async_getRandomNumber(data) {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(generatorAddress, Generator.abi, signer);
      try {
        const transaction = await contract.getRandomNumber(secureStorage.getItem('password'))
        await transaction.wait();
      } catch (e) {
        alert("Not enough LINK in the smart contract. Please contact the admin.");
      }
    }
  }

  /*
  * Asks to the contract if there is enough LINK to call the oracles
  */
  async function async_getRemainingLINK(data) {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(generatorAddress, Generator.abi, provider);
      try {
        const signer = provider.getSigner();
        const result = await contract.connect(signer).getRemainingLINK();
        console.log("Smart contract balance is: " + (result / 10e17) + " LINK token");
      } catch (err) {
        console.log("Error: ", err)
      }
    }
  }

  /*
  * Function to check the moment when the random number has been generated
  */
  async function async_randomResult(data) {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(generatorAddress, Generator.abi, provider);
      try {
        const signer = provider.getSigner();
        let isCanceled = false;
        oldRandomNumber = currentRandomNumber;
        if (parseInt(currentRandomNumber, 16) === parseInt(oldRandomNumber, 16) && currentRandomNumber !== null && currentRandomNumber != 0)
          swal("Wait!", "You have not yet used the current number", "info");
        while (!isCanceled) {
          currentRandomNumber = await contract.connect(signer).randomResult();
          if (parseInt(currentRandomNumber, 16) !== parseInt(oldRandomNumber, 16) && oldRandomNumber !== null) {
            isCanceled = true;
            swal("Good job!", "Your new random number is available", "success");
          } else {
            oldRandomNumber = currentRandomNumber;
          }
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      } catch (err) {
        console.log("Error: ", err)
      }
    }
  }

  /*
  * Get the array which contains all the dates for the random numbers generated from the SC
  */
  async function async_getDateNumber(data) {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(generatorAddress, Generator.abi, provider);
      try {
        const signer = provider.getSigner();
        const result = await contract.connect(signer).getDateNumber(secureStorage.getItem('password'));
        console.log(buildDateArray(result));
      } catch (err) {
        console.log("Error: ", err)
      }
    }
  }

  return (
    <Container>
      <FormWrap1>
        <Form key={1} onSubmit={handleSubmit(myHandleSubmit)}>
          <FormH1>Create a new instance</FormH1>
          <img className="logo" src={logo} alt='logo' onClick={() => { async_getRandomNumber(); async_getRemainingLINK(); async_randomResult(); }} />
          <span className="field-tip">
            <FormLabel>First parameter</FormLabel>
            <span className="tip-content">This parameter indicates how many agents will participate in the auction. Leave it at 0 to make it random.</span>
          </span>
          <FormInput {...register("agents", {
            required: true,
            max: 8,
            min: 0,
            pattern: /^[0-9\b]+$/
          })} type="number" name="agents" placeholder="agents" />
          {errors?.agents?.type === "required" && <FormError>Field required</FormError>}
          {errors?.agents?.type === "max" && <FormError>Integer number between [0, 8]</FormError>}
          {errors?.agents?.type === "min" && <FormError>Integer number between [0, 8]</FormError>}
          {errors?.agents?.type === "pattern" && <FormError>Numerical characters only</FormError>}
          <span className="field-tip">
            <FormLabel>Second parameter</FormLabel>
            <span className="tip-content">It indicates how many resources will be available in the auction. Leave it at 0 to make it random.</span>
          </span>
          <FormInput {...register("resources", {
            required: true,
            max: 30,
            min: 0,
            pattern: /^[0-9\b]+$/
          })} type="number" name="resources" placeholder="resources" />
          {errors?.resources?.type === "required" && <FormError>Field required</FormError>}
          {errors?.resources?.type === "max" && <FormError>Integer number between [0, 30]</FormError>}
          {errors?.resources?.type === "min" && <FormError>Integer number between [0, 30]</FormError>}
          {errors?.resources?.type === "pattern" && <FormError>Numerical characters only</FormError>}
          <span className="field-tip">
            <FormLabel>Number of instances</FormLabel>
            <span className="tip-content">Enter the number of instances you would like to generate</span>
          </span>
          <FormInput {...register("numInstances", {
            required: true,
            max: 5,
            min: 1,
            pattern: /^[0-9\b]+$/
          })} type="number" name="numInstances" />
          {errors?.numInstances?.type === "required" && <FormError>Field required</FormError>}
          {errors?.numInstances?.type === "max" && <FormError>Integer number between [1, 5]</FormError>}
          {errors?.numInstances?.type === "min" && <FormError>Integer number between [1, 5]</FormError>}
          {errors?.numInstances?.type === "pattern" && <FormError>Numerical characters only</FormError>}
          <ButtonFlex>
            <FormButtonTop id="submit1" type="submit" value="A generator" />
            <FormButtonTop id="submit2" type="submit" value="B generator" />
            <FormButtonTop id="submit3" type="submit" value="C generator" />
          </ButtonFlex>
        </Form>
      </FormWrap1>
      <FormWrap2>
        <Form key={2} onSubmit={handleSubmit2(async_getAllInstances)}>
          <FormH1>Search for instances</FormH1>
          <FormLabel>ORCID</FormLabel>
          <FormInput {...register2("orcid", {
            required: true,
            minLength: 16,
            maxLength: 16,
            pattern: /^[0-9\b]+$/
          })} type="number" name="orcid" />
          {errors2?.orcid?.type === "required" && <FormError>Field required</FormError>}
          {errors2?.orcid?.type === "minLength" && <FormError>It must be a number of 16 digits</FormError>}
          {errors2?.orcid?.type === "maxLength" && <FormError>It must be a number of 16 digits</FormError>}
          {errors2?.orcid?.type === "pattern" && <FormError>Numerical characters only</FormError>}
          <FormButton type="submit" value="Get instances" />
        </Form>
      </FormWrap2>
    </Container>
  )
}

export default UserSection;