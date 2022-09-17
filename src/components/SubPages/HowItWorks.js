import {
    Container,
    Wrap,
    NewH1,
    NewH2,
    NewP,
	NewLinkWithoutline,
    Img
} from "./SubpagesElements";

import imag1 from 'images/imag1.PNG';
import imag2 from 'images/imag2.PNG';
import imag3 from 'images/imag3.PNG';
import imag4 from 'images/imag4.PNG';
import imag5 from 'images/imag5.PNG';
import imag6 from 'images/imag6.PNG';
import imag7 from 'images/imag7.PNG';
import imag8 from 'images/imag8.PNG';
import imag9 from 'images/imag9.PNG';
import imag10 from 'images/imag10.PNG';

const HowItWorks = () => {
    return (
        <Container>
            <Wrap>
                <NewH1>Preparing the environment</NewH1>
				<NewP>Decentralised applications do not work in the same way as traditional web applications. For this reason, before explaining how this instance generator works, we need to take a few simple steps that will only take a few minutes.</NewP>
				<NewP>First of all, we need to install a wallet with which we can make transactions to the blockchain. In our case we use Metamask, which is just a plugin available for Chrome, Brave and some other browsers. If this is the first time we use Metamask, we must select the option <b>Create a wallet</b>. 
                    After creating a password and completing the secret backup phrase, we will see that our wallet will be ready to trade and connected to the main Ethereum network, although with 0 ethers. The first thing we are going to do is connect to the Kovan test network, which is where our smart contract is deployed. 
                    To do this, we select the drop-down menu of the main network and click on <b>Show/hide test networks</b>. Then, we activate the option "Show test networks" and we will see how the different test networks appear, where we have to click on the Kovan test network. </NewP>
                <Img alt="dev" src={imag1}></Img>
                <NewP>We can see that in this test network we also do not have enough ether to pay for the gas for the transactions. To obtain gas for the test networks we can visit the following link: <b><NewLinkWithoutline href="https://faucets.chain.link/" target="_blank" rel="noreferrer">Chainlink faucet</NewLinkWithoutline></b></NewP>
                <NewP>At the top right you will see a button that says <b>Connect wallet</b>. We must click it and connect our wallet to this site.</NewP>
                <Img alt="dev" src={imag2}></Img>
                <NewP>We will then see that our wallet address has been connected to the website and, after completing the captcha, we will be able to request ether. By default, every time we make a request it will give us 0.1 ether and 10 LINK. This last token will not be necessary to operate within the DApp.</NewP>
                <Img alt="dev" src={imag3}></Img>
                <NewH1>DApp operation</NewH1>
                <NewP>Now that we have all the preparations in place, we can start interacting with the DApp. On the main page there are some interesting links to learn more about this project, how it works, what kind of problems we are going to tackle or how Chainlink oracles work. If it is our first time, we must register by clicking on the <b>Get started</b> button. This will take you to the registration page where you will be asked for some information: your name, email and researcher ORCID.</NewP>
                <Img alt="dev" src={imag4}></Img>
                <NewP>Whenever we perform a function that involves writing data to the blockchain, Metamask will ask us if we want to confirm the transaction or if we want to reject it. </NewP>
                <Img alt="dev" src={imag5}></Img>
                <NewP>In addition, it will show us a summary of the transaction, the expected waiting time and an approximation of the cost in gas that the transaction will have. All these data (and many others such as block number, gas fee, gas price, gas limit...) can also be verified in <b><NewLinkWithoutline href="https://kovan.etherscan.io" target="_blank" rel="noreferrer">Kovan scan</NewLinkWithoutline></b>, accessing through the address of our wallet, which appears in Metamask. We could even see all the interactions performed by the smart contract by doing a search with the smart contract address.</NewP>
                <Img alt="dev" src={imag6}></Img>
                <NewP>Once we have registered in the application, we will automatically receive an email with a password. This password is associated to our ORCID in the sense that an ORCID will always output the same password. In the <b>Sign in</b> page we will enter this password to access the user panel.</NewP>
                <NewP>On this page we can find the main functionality of the application. The first form allows you to generate instances using three generators: Generator A, B and C. You can consult the way in which these generators generate instances within the <b>Auction</b> section (in the Navbar of the application).</NewP>
                <Img alt="dev" src={imag7}></Img>
                <NewP>These three generators make use of random numbers, which are obtained thanks to Chainlink oracles. Before generating an instance, the user must generate a random number. To do this, the user must click on the gray hexagon in the upper left corner of the form. This will launch a transaction to the oracles and request the randomization. The process of obtaining this random number takes approximately 50 seconds because it is a two-transaction process. Once the numbers are generated, a pop-up window will appear informing us.</NewP>
                <Img alt="dev" src={imag8}></Img>
                <NewP>We have our random number. The next step is to generate one or more instances. To do this, we must fill in two fields: number of agents participating in the auction and available resources. The form checks in real time the range of valid values for these two parameters. If they are left at 0, then the application will set the parameters randomly within the interval. Finally, the last parameter indicates the number of instances we want to generate at the same time (between 1 and 5).</NewP>
                <NewP>The second of the forms shown in the image allows us to search for the instances generated by a given ORCID, whether it is ours or not. The action will display a table containing a summary of the instances generated by an ORCID: instance id, type of problem, number of agents and resources, creation date and whether they have been solved or not.</NewP>
                <Img alt="dev" src={imag9}></Img>
                <NewP>When we click on one of the rows, this will take us to the page where the instance is displayed. Here, we can also download the instance in JSON format by clicking on the button in the second row of the table. In addition, if the instance is ours and is not solved, a form will appear where we can insert the hash of the file containing the solution to the instance, the hash of the algorithm that has been used and the method to calculate the hash values.</NewP>
                <Img alt="dev" src={imag10}></Img>
                <NewP>Finally, it should be noted that each time a new set of instances is generated, we should ask the oracles for randomness again. If we do not do so, the instances we generate will potentially be very similar to each other.</NewP>
                <NewP>By making use of this tool, the application allows us to generate completely random dynamic instances without the need for a third party, storing who created the instance, at what time, what the instance looked like, when it was solved, solution hashes and the algorithm used to check the veracity of the instances.</NewP>
                <NewP>In the <b>Home</b> page of the application, at the bottom of the <b>Footer</b> section, you can find more information about the research group and a contact in case of any doubt or suggestion about this instance generator.</NewP>
            </Wrap>
        </Container>
    );
}

export default HowItWorks;