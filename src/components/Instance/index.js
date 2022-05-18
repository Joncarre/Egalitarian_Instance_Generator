import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ethers } from 'ethers';
import Generator from '../../artifacts/contracts/Generator.sol/Generator.json';
import { generatorAddress, requestAccount } from '../../App.js';
import { useLocation } from "react-router-dom";
import { useForm } from 'react-hook-form';
import ColumnHeaderTable from "components/ColumnHeaderTable";
import { checkPasswordMatchOrcid } from "components/helper";
import {
	Container,
	Wrap,
	TableSection,
	FormWrap1,
	FormInput,
	FormH1,
	Form,
	FormButton
} from './InstanceElements'
import './messagesInfo.css';

import { secureStorage } from 'components/secureSession';


const Instance = () => {
	const location = useLocation();
	const [rowData, setRowData] = useState({});
	let history = useHistory();

	const {
		register,
		handleSubmit,
		reset,
	} = useForm();

	useEffect(() => {
		if (location.state) {
			setRowData(location.state.rowData);
		}
	}, [location.state])

	const headerItems = [
		{ name: "id", label: "ID" },
		{ name: "chain", label: "Chain" },
		{ name: "size", label: "Size" },
		{ name: "created", label: "Date Created" },
		{ name: "solution", label: "Solution hash" },
		{ name: "solved", label: "Solved" },
		{ name: "ended", label: "Date Solution" },
	]

	async function async_solveInstance({ solution_hash, algorithm_hash, hash_method }) {
		if (typeof window.ethereum !== 'undefined') {
			await requestAccount()
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner()
			const contract = new ethers.Contract(generatorAddress, Generator.abi, signer);
			const transaction = await contract.solveInstance(
				secureStorage.getItem('password'),
				rowData.id,
				solution_hash,
				algorithm_hash,
				hash_method,
				{ gasLimit: 10000000 })
			await transaction.wait();
			reset({ solution_hash: "", algorithm_hash: "", hash_method: "" });

			history.push({
				pathname: '/user'
			});
		}
	}

	const handleResolve = (data) => {
		console.log(data);
		async_solveInstance(data);
	}

	return (
		<Container>
			<Wrap>
				<TableSection>
					<ColumnHeaderTable headerItems={headerItems} data={rowData} footer></ColumnHeaderTable>
				</TableSection>
			</Wrap>
			{/* solved === false */}
			{Object.keys(rowData).length > 0 &&
				!rowData.solved &&
				secureStorage.getItem("currOrcid") &&
				checkPasswordMatchOrcid(secureStorage.getItem("currOrcid")) &&

				<FormWrap1>
					<Form key={1} onSubmit={handleSubmit(handleResolve)}>
						<FormH1>Resolve the instance</FormH1>
						<span className="field-tip">
							<span className="tip-content">Hash of the file containing the solution</span>
							<FormInput {...register("solution_hash")} type="text" name="solution_hash" placeholder="Solution hash" />
						</span>
						<span className="field-tip">
							<span className="tip-content">Hash of the algorithm file used to find the solution</span>

							<FormInput {...register("algorithm_hash")} type="text" name="algorithm_hash" placeholder="Algorithm hash" />
						</span>
						<span className="field-tip">
							<span className="tip-content">Method used to obtain the hash (MD5, SHA256, Keccak-512...)</span>

							<FormInput {...register("hash_method")} type="text" name="hash_method" placeholder="Hash method" />
						</span>
						<FormButton id="submit1" type="submit" value="Submit data" />
					</Form>
				</FormWrap1>
			}
		</Container>
	);
}

export default Instance;