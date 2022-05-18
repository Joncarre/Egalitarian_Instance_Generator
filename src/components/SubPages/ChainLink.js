import {
	Container,
	Wrap,
	NewH1,
	NewH2,
	NewP,
	Img
} from "./SubpagesElements";

import chainlink1 from 'images/chainlink1.png';
import chainlink2 from 'images/chainlink2.png';

const ChainLink = () => {
	return (
		<Container>
			<Wrap>
				<NewH1>What ́s Chainlink?</NewH1>
				<NewP>First of all, it is useful to know what an oracle is. Oracles are seen as a tool that uses blockchain technology to interact with the physical world. In other words, they are a means of bringing real-world information into the blockchain so that smart contracts can execute actions based on this information. A bridge between the decentralised world of blockchain and the traditional world.</NewP>
				<NewP>In this sense, Chainlink is just that, a huge network of decentralised oracles that runs with the help of the Ethereum (ETH) network and an ERC- 20 token that enables the creation of a self-sustaining, secure and, above all, decentralised operating infrastructure.</NewP>
				<div style={{ textAlign: 'center' }}>
					<Img style={{ maxWidth: '500px', width: '70%' }} src={chainlink1} alt={chainlink1}></Img>
				</div>
				<NewH1>Why was Chainlink created?</NewH1>
				<NewP>The answer is very simple: a blockchain cannot communicate directly with the real world, and this limits its functionality. Faced with this shortcoming, Chainlink and other oracles are looking to create a bridge that allows us to bring information from our real environment, to the blockchain world and its smart contracts, with total security.</NewP>
				<NewP>Suppose a synthetic token has been created in the Synthetix protocol which tracks the price of gold. The price of gold is not a price that is in real time within a blockchain, but is given in traditional markets that are part of our traditional world. This means that Synthetix cannot obtain this information using a smart contract directly.</NewP>
				<NewP>Faced with such a scenario, Synthetix developers turn to Chainlink, who can provide the information they need in real time, using various sources and in a completely decentralised and transparent way. In this way, Synthethix gets the information it needs for its synthetic token, maintains the security of the protocol, and Chainlink fulfils the function for which it was created.</NewP>
				<div style={{ textAlign: 'center' }}>
					<Img style={{ maxWidth: '700px', width: '70%' }} src={chainlink2} alt={chainlink2}></Img>
				</div>
				<NewH1>The Chainlink protocol</NewH1>
				<NewP>Chainlink owes its operation to a network of nodes called Chainlink Nodes (CN). The purpose of these Chainlink Nodes is to run a programme capable of monitoring the data coming from a real-world event and feeding this data to the smarts contracts that are running on the Ethereum network. However, this leaves us with a question: how can we be sure that the data provided by the nodes is correct? To solve this, Chainlink obtains the information from many different nodes randomly. After that, it generates consensus among the obtained answers, taking as valid the answer indicated by the majority of them. As a protection measure for manipulated data, Chainlink uses game theory as well as incentives/disincentives to avoid malpractice or malicious data manipulation. The incentive for node operators is to give correct answers in exchange for a small financial compensation. The more accurate the information, the better the financial compensation, thus creating an environment in which data accuracy is rewarded. In contrast, manipulation of data from nodes results in the opposite, involving a kind of penalty and a degradation in the trustworthiness of that node.</NewP>

				<NewH2>Node operators</NewH2>
				<NewP>Of course, smart contracts on Ethereum are only one part of the whole needed to make Chainlink work. But there is another important part of the operation: the nodes and node operators. Chainlink's node operators participate within decentralised oracle networks, which allows them to securely and reliably obtain external data. They operate the oracle infrastructure so that the smart contracts on each blockchain have access to the real-world data they need to execute properly.</NewP>

				<NewH2>LINK, the economic heart</NewH2>
				<NewP>Another very important part of Chainlink's operation is its token: LINK. It is an ERC-20 token, i.e. it runs on the Ethereum network. It is responsible for serving as an incentive for node operators to do a good job. With each node installed and each request for information handled correctly, the nodes and their operators accumulate Link tokens that are given as compensation for their work.</NewP>
				<NewP>In this sense, we can view the Link token in the same way that we would view the newly generated coins in each Bitcoin block - it is payment for the work that is done. Thus, a Link token holder can go to an exchange and exchange these tokens for other tokens. As with any other cryptocurrency, it is possible to HODL these tokens and bet on their price increase, which is quite common due to the growth of this token in recent months.</NewP>

				<NewH2>Privacy on Chainlink</NewH2>
				<NewP>One of the main challenges for blockchain oracles is to protect the privacy of their users. Firstly, the oracle does not want to have too much access to the information of the users who interact with it, together with the services with which it interacts. And, secondly, the sessions and the information sent and received by the oracle should not allow the traceability of such data from its origin to the recipient, which would obviously allow full identification of the parties that make use of the oracle.</NewP>
				<NewP>Let's take an example to see this in a simpler way. Suppose a user wants to access a DApp where it is only possible to enter with an age of majority. For such a capability, the DApp uses an oracle, which does a search in a database where it can obtain this data. When the search is done, the information that is in the blockchain is passed to the real world and can be associated with that person, their real identity and all their data. In this situation, there are two very important cases. Firstly, verifying age using this system will most likely require you to provide a username and password (or other authentication) to access the information in the database. Secondly, the connection between the oracle and the database is over channels where you have no control over anything. And thirdly, it would be enough for those who manage that database to analyse the traffic of search requests and their origin (the oracle), to know what these people do and why they require your services. At that point, a little more analysis can lead us to the DApp, address used by the user during the interaction and other relevant data.</NewP>
				<NewP>In each of these cases, the privacy of your data is at risk, and Chainlink does not escape this reality. The root of this problem is that while everything in blockchain can be pseudo-anonymous (or completely anonymous), this is not the case outside the blockchain ecosystem. Every time you connect to the Internet you start leaving traces of your identity, or of elements that can lead the authorities (or whoever is interested) to your data and your real person.</NewP>

			</Wrap>
		</Container>
	);
}

export default ChainLink;