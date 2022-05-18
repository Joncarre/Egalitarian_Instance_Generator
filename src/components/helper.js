import { generatorAddress, requestAccount } from '../App.js';
import { ethers } from 'ethers';
import Generator from '../artifacts/contracts/Generator.sol/Generator.json';
import { secureStorage } from 'components/secureSession';

/*
* Get hash information about a instance from the smart conrtract
*/
export async function async_getHash(_id) {
	if (typeof window.ethereum !== 'undefined') {
		await requestAccount()
		const provider = new ethers.providers.Web3Provider(window.ethereum)
		const contract = new ethers.Contract(generatorAddress, Generator.abi, provider);
		try {
			const signer = provider.getSigner();
			const result = await contract.connect(signer).getHash(_id);
			if(result[0] !== ''){
				console.log("Solution information for instance " + _id + ":");
				console.log("	- Solution hash: " + result[0]);
				console.log("	- Algorithm hash: " + result[1]);
				console.log("	- Hash method used: " + result[2]);
			}
		} catch (err) {
			console.log("Error: ", err)
		}
	}
}

/*
* Check if the password match with the orcid
*/
export const checkPasswordMatchOrcid = (orcid) => {
	var sha256 = require('js-sha256');
	let secret = cutHash(sha256(orcid));
	// console.log(secret);
	return secret === secureStorage.getItem('password');
	// return true;
}

/*
* Function to obtain the first 10 number elements from the hash generated baed on the orcid
*/
const cutHash = (elem) => {
	var cut = elem.replace(/[^0-9]/g, '');
	var result = cut.substring(0, 10);
	return result;
}