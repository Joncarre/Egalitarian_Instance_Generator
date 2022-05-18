import {
    Container,
    Wrap,
    NewH1,
    NewP,
} from "./SubpagesElements";

const Faqs = () => {
    return (
        <Container>
            <Wrap>
                <NewH1>What is the usefulness of this website?</NewH1>
                <NewP>It allows to generate instances of the problem known as 3-SAT. These instances are generated using verifiable random numbers and are especially useful for testing algorithms. Thus, a researcher wishing to test an algorithm that finds solutions to the 3-SAT problem could use our application to generate instances and, in this way, test his algorithm/programme.</NewP>
                <NewP>Usually, test generators present some problems such as trusting third parties and ensuring that the generated instances are completely random. By making use of the inherent features of the blockchain, we are able to remove the trust in that third party (which is no longer necessary) and guarantee that the instances are indeed random, thanks to Chainlink oracles.</NewP>       
    
                <NewH1>What is the difference between a Centralized and Decentralized App?</NewH1>
                <NewP>A centralized app is owned by a single company. The application software for a centralized app resides on one or more servers controlled by the company. As a user, you'll interact with the app by downloading a copy of the app and then sending and receiving data back and forth from the company's server.</NewP>
                <NewP>A decentralized app operates on a blockchain or peer-to-peer network of computers. It enables users to engage in transactions directly with one another as opposed to relying on a central authority. The user of a DApp will pay the developer an amount of cryptocurrency to download and use the program's source code. The source code is known as a smart contract, which allows users to complete transactions without revealing personal information.</NewP>

                <NewH1>Why do I need MetaMask to interact with the application?</NewH1>
                <NewP>In order to launch transactions on the blockchain you need to use a wallet address. This address will identify you within the blockchain, but no one will know who the person behind it really is. Wallets allow us to launch transactions to activate the functionalities of smart contracts. Without wallet software, it is impossible to make transactions.</NewP>
            
                <NewH1>Why do I have to wait "so long" for my requests to be executed?</NewH1>
                <NewP>The blockchain works by transactions through smart contracts. These transactions are grouped together to form blocks, which must be verified by the nodes involved in the network. At the same time, the hash calculation for each of the blocks is a complex and time-consuming process. Currently, the waiting time for a new block to be added to the chain on the Ethereum blockchain is about 15 seconds. However, this time is not always accurate as there are many factors involved in the process: computing power of the miners, network congestion, proof of work, etc.</NewP>
                <NewP>On the other hand, some processes even require a double transaction, as in the case of requests to oracles. It is for this reason that obtaining random numbers takes about 45 seconds. Let's not forget that we are testing on a test network, so it is expected to be somewhat slower than the main Ethereum network.</NewP>
             
            </Wrap>
        </Container>
    );
}

export default Faqs;
