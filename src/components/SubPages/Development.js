import {
	Container,
	Wrap,
	NewH1,
	NewH2,
	NewP,
	NewLinkWithoutline,
	Img
} from "./SubpagesElements";

import devImg from 'images/development.png';

const Development = () => {
	return (
		<Container>
			<Wrap>
				<NewH1>Technologies used in Development</NewH1>
				<NewP>The development of a decentralised application is most relevant in the backend of the application. These applications make use of many technologies that must fit together perfectly in order to function correctly. Because of this, DApps are generally complex applications to test as there are more elements involved in the development than traditional web applications. Next, we will review the technologies used by this DApp in order to better understand how it works and the steps we have taken during the development of this 3SAT random instance generator project.</NewP>
				<Img alt="dev" src={devImg}></Img>

				<NewH2>
					<NewLinkWithoutline href="https://hardhat.org/" target="_blank" rel="noreferrer">Hardhat</NewLinkWithoutline>
				</NewH2>
				<NewP>One of the methodologies commonly used when developing a DApp is to start by creating a development environment, which allows the functionality associated with smart contracts to be executed. In this sense, Hardhat is an environment developers use to test, compile, deploy and debug DApps based on the Ethereum blockchain. As such, it helps coders and developers to manage many of the tasks that are inherent to developing DApps and smart contracts. Along with providing developers with the proper tools to manage this process, Hardhat also helps automate some of these steps and provides developers with new, helpful functions.</NewP>
				<NewP>Hardhat comes with a pre-built local Ethereum network designed with development at its core. This network focuses on Solidity debugging and features stack traces, messages when transactions of the DApps fail, etc. This provides the developers with essential tools to understand where an application fails and provides them with the answer to solve them.</NewP>
				<NewP>The environment is characterized by plugins which a lot of the functionality originates from. This means that the developers can choose exactly which plugins they would like to include in their development process. However, it comes with built-in defaults, but they can all be overridden. This means that the Hardhat software does not care which tools that the developers end up using.</NewP>

				<NewH2>
					<NewLinkWithoutline href="https://infura.io/" target="_blank" rel="noreferrer">Infura</NewLinkWithoutline>
				</NewH2>
				<NewP>Infura is a blockchain development suite that provides application programming interfaces (APIs) and developer tools. Moreover, Infura provides fast and reliable access to the Ethereum network to enable developers to build sophisticated next-generation software and Web3 applications that scale to meet user demand. Furthermore, as an Infrastructure-as-a-Service (Iaas) and Web3 backend infrastructure provider, Infura offers top-of-the-range documentation and resources to help developers build decentralized applications (DApps) quickly. This is achieved by reducing the time spent building infrastructure from scratch. Infura offers enterprise-ready infrastructure using a distributed cloud-hosted network of nodes. This removes much of the friction associated with the development and ownership of proprietary computing and storage facilities.</NewP>
				<NewP>Infura aims to create an ideal environment for developers and enterprises looking to create exciting blockchain-based products and Web3 applications with a low barrier to entry. In turn, this is enabling developers to build innovative products and services that harness the power of the Ethereum blockchain to be used sector-wide.</NewP>

				<NewH2>
					<NewLinkWithoutline href="https://metamask.io/" target="_blank" rel="noreferrer">Metamask</NewLinkWithoutline>
				</NewH2>
				<NewP>To transact on the blockchain and interact with the underlying contracts, we need a wallet and somehow manage the tokens to pay the cost in gas for these transactions. MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain. It allows users to access their Ethereum wallet through a browser extension or mobile app, which can then be used to interact with decentralized application. In particular, MetaMask allows users to store and manage account keys, broadcast transactions, send and receive Ethereum-based cryptocurrencies and tokens, and securely connect to decentralized applications through a compatible web browser or the mobile app's built-in browser. The application includes an integrated service for exchanging Ethereum tokens by aggregating several decentralized exchanges (DEXs) to find the best exchange rate. This feature, branded as MetaMask Swaps, charges a service fee of 0.875% of the transaction amount.</NewP>

				<NewH2>
					<NewLinkWithoutline href="https://www.emailjs.com/" target="_blank" rel="noreferrer">EmailJS</NewLinkWithoutline>
				</NewH2>
				<NewP>One part of the DApp is to register and receive by email a password generated by SHA256. EmailJS helps to send emails using client-side technologies only. No server is required – just connect EmailJS to one of the supported email services, create an email template, and use our Javascript library to trigger an email. Email templates can optionally contain dynamic variables in almost any field (e.g. subject, content, TO address, FROM name, etc) which are populated from the Javascript call. Additionally, we can easily add attachments, require CAPTCHA validation, switch between the email services without making code changes, review the history of the email request, and more.</NewP>

				<NewH2>
					<NewLinkWithoutline href="https://reactjs.org/" target="_blank" rel="noreferrer">React</NewLinkWithoutline>
				</NewH2>
				<NewP>The front-end development uses functionalities from some of the previous tools and, for the visual components of the application, we make use of React. Basically, React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.</NewP>
				<NewP>One of the most important elements in React is the component, which is nothing more than a piece of user interface such as a button, a certain functionality of the website, a form, etc. The fluidity in the use of applications developed in React is due to the Virtual DOM (Document Object Model), a lightweight in- memory copy of the application's HTML code. In a nutshell, what React does is to constantly compare the real DOM (the one being displayed by the browser) and the virtual DOM stored in memory. In this way, React detects if any of the components has changed its state and proceeds to update only that component.</NewP>

				<NewH2>
					<NewLinkWithoutline href="https://nodejs.org/es/" target="_blank" rel="noreferrer">NodeJS</NewLinkWithoutline>
				</NewH2>
				<NewP>Every application needs a backend to run and this is where Node comes in. Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.</NewP>

				<NewH2>
					<NewLinkWithoutline href="https://www.netlify.com/" target="_blank" rel="noreferrer">Netlify</NewLinkWithoutline>
				</NewH2>
				<NewP>To access the DApp it must be hosted and have an accessible link. This way users can install Metamask in their browser and start interacting by launching transactions. This is where we make use of a tool called Netlify. In a nutshell, Netlify creates its own kind of repository that pushes both to a Github repository and its own microservices. Then, it executes and distributes content across a wide CDN to deliver pre-built static websites to visitors.</NewP>
				<NewP>The best thing about Netlify is that it selects the best CDN and distributes content, which results in pre-built websites that load faster than on traditional hosting networks. Instead of loading the site each time the visitor goes to a page, the visitor gets a pre-loaded version straight from the nearest geographical server, sharply reducing load times.</NewP>
				<NewP>That means that the resulting HTML, CSS, and JS are then deployed and distributed across a large number of content delivery networks. When a visitor tries to access your website, it automatically chooses the data center closest to you and serves you the static files.</NewP>

				<NewH2>
					<NewLinkWithoutline href="https://docs.soliditylang.org/en/v0.8.13/" target="_blank" rel="noreferrer">Solidity</NewLinkWithoutline>
				</NewH2>
				<NewP>In short, Solidity is an object-oriented, high-level programming language used to create smart contracts that automate transactions on the blockchain. After being proposed in 2014, the language was developed by contributors to the Ethereum project. The language is primarily used to create smart contracts on the Ethereum blockchain and create smart contracts on other blockchains.</NewP>
				<NewP>Solidity is similar to one of the most common programming languages, JavaScript. It can be considered as a dialect of JavaScript. This means that if you understand JavaScript, it can be easy to pick up Solidity. Solidity also shares similar characteristics to the programming languages C++ and Python.</NewP>
				<NewP>As a high-level language, Solidity does away with the need to type code in ones and zeros. It makes it much easier for humans to write programs in ways they find easier to understand, using a combination of letters and numbers.</NewP>

				<NewH2>
					<NewLinkWithoutline href="https://chain.link/" target="_blank" rel="noreferrer">Chainlink</NewLinkWithoutline>
				</NewH2>
				<NewP>Chainlink (LINK) is a both cryptocurrency and technology platform that enables non-blockchain enterprises to securely connect with blockchain platforms. Chainlink is middleware that connects blockchain-based smart contracts with external data, such as baseball scores or stock prices. Chainlink's LINK currency is used to pay Chainlink network operators and collateralize the network's smart contract agreements.</NewP>
				<NewP>Chainlink is known as a decentralized oracle network or blockchain abstraction layer. Chainlink uses blockchain technology to securely enable computations on- and off-blockchain, supporting what it calls hybrid smart contracts. Enterprises that use Chainlink can access any of the major blockchain networks, including Ethereum, Solana, and Terra.</NewP>
				<NewP>The Chainlink blockchain is hosted on the Ethereum platform, which uses the proof-of-work operating protocol. Chainlink is an open-source blockchain project, meaning that anyone can view the project's code and contribute.</NewP>
				<NewP>In 2021, the Chainlink network secured more than $75 billion of value as it grew to include over 1,000 projects. Chainlink has a maximum supply of one billion tokens, of which about 467 million have been issued as of Feb. 2022.</NewP>

			</Wrap>
		</Container>
	);
}

export default Development;