import {
    Container,
    Wrap,
    NewH1,
    NewH2,
    NewP,
    Img
} from "./SubpagesElements";

import Dapp1 from "images/dapp1.png";
import Dapp2 from "images/dapp2.png";

const Dapp = () => {
    return (
        <Container>
            <Wrap>
                <NewH1>What ́s a DApp?</NewH1>
                <NewP>To understand what a DApp is, we first need to understand what Ethereum is. Now, there are other protocols that are used to build DApps, like EOS, NEO, Stellar, Tron, and Cardano, but the big dog is Ethereum.</NewP>
                <NewP>Ethereum is a network protocol that allows users to create and run smart contracts over a decentralized network. A smart contract contains code that runs specific operations and interacts with other smart contracts, which has to be written by a developer. Unlike Bitcoin which stores a number, Ethereum stores executable code.</NewP>
                <NewP>The advantage here is that Ethereum removes the need for a third party to handle transactions between peers. Since the middle man is replaced by code, all kinds of costs are reduced, including time and money. The nodes of the network contain all of the information of all the world's smart contracts, including code, transactions, etc. They're constantly working to keep this information up-to-date so they all have the exact same copy. This what makes smart contracts, and cryptocurrencies in general, decentralized. And since all of the nodes have the same information and are spread across the world, the removal of a node won't interrupt the execution of any smart contract.</NewP>
                <div style={{ textAlign: 'center' }}>
                    <Img style={{ maxWidth: '300px', width: '40%' }} src={Dapp2} alt="dapp2"></Img>
                </div>
                <NewP>Now that we have a good idea of what Ethereum and smart contracts are, we can start diving into the details of what a Dapp is. Decentralised applications are a type of application whose operation does not depend on central control points or servers but operates on the basis of a decentralised network. A network in which its users have full control over the operation of the network. DApps allow people to access different services in a secure way. These applications can be used on personal computers, smartphones or even accessed via the web.</NewP>
                <NewP>To get a clearer idea of what a DApp is, let's think for a moment about a traditional application. In this type of application we have YouTube, Facebook, Twitter and Instagram, among many others. In all these services, data and decisions are made on central servers. This allows the
                    company behind these services to take censorship actions, alter behaviour, or even benefit or harm only certain users, constantly calling into question neutrality and a level playing field.</NewP>

                <NewH1>How it works?</NewH1>
                <NewP>A DApp works in a similar way to a blockchain network. In this case, each user of the DApp is a node within the network. Each user ensures the correct functioning and operations that are carried out in the network. The communication channel used by the DApp is the blockchain. In it, a record is kept of each operation that passes through the smart contract that controls the DApp. The acceptance or non-acceptance of the operations carried out by the DApp users is linked to the programming of the smart contract. In this way, the aim is to ensure that all participants act within the framework specified by the smart contract.</NewP>
                <NewP>The smart contract in this case is an intermediate point that is responsible for corroborating the validity of each interaction. Every time there is a new operation in the DApp, the platform information is updated in each node. This ensures that the information is stored in each node. In this way, each user contributes to keeping the application up and running with the resources of his or her computer. This structure also guarantees that the platform will always be in service. This is due to the impossibility of terminating all the nodes of the network at the same time. A situation that can occur due to a computer attack or other reasons such as censorship.</NewP>
                <div style={{ textAlign: 'center' }}>
                    <Img src={Dapp1} alt="dapp1" style={{ maxWidth: '300px', width: '50%' }}></Img>
                </div>
                <NewH2>Security</NewH2>
                <NewP>DApps run on a blockchain that uses strong cryptography to secure the data it handles. This first point ensures that the information can only be seen by the originator and the rest can only verify its validity or not. At no time is the information originated by one user visible to others.</NewP>
                <NewP>In addition to this, the data handled by the application is at all times in the possession of the user. DApps do not store information in the cloud or on external servers. This minimises the risks associated with the theft of private information or its sale by the company, thus violating the user's privacy.</NewP>

                <NewH2>Decentralisation</NewH2>
                <NewP>Decentralisation refers to the ability to function without central servers. Consider one of the most important centralised applications of our time: Facebook.</NewP>
                <NewP>Facebook is one of the most widely used social networks in the world. With more than 2 billion users, its data centres handle an enormous data load. At this point, keeping its infrastructure up and running is a titanic task. One that has not been free of errors, which have led to the network being unavailable on a global scale. This is because Facebook is a centralised social network.</NewP>
                <NewP>However, a DApp lacks this point of failure thanks to decentralisation. Each user of the DApp has a complete history of the actions taken on the DApp. Something like a global copy of everything that has happened. Because of this, and because it runs on a blockchain, it is enough that only one user is active for the network to keep running smoothly. This ensures that the DApp and its network always works and that the Facebook case does not happen.</NewP>

                <NewH2>Open source</NewH2>
                <NewP>This is another common feature of DApps. The fact that the source code is available guarantees a high level of transparency of the application. This is because the community can always know what the DApp is doing. In addition, it allows community audits, so that anyone with the knowledge can review the source code of the application. This makes it possible to improve it and in any case to continue its development in case the project is abandoned by its original creators.</NewP>
                <NewP>All DApps keep the source code of their smart contracts and all other parts of the application in public form. In this way, anyone can inspect the code, improve it or fork it.</NewP>

                <NewH2>Blockchain inheritance</NewH2>
                <NewP>DApps interact on the blockchain on which their smart contract runs. This means that each interaction in the DApp generates a data entry in the blockchain. This data is stored cryptographically to add transparency and security. All these actions can be publicly reviewed in the block explorer of the blockchain.</NewP>
                <NewP>But only cryptographic interactions can be seen, the entire data is stored in a cryptographically secure manner. In addition to this, the fact that a DApp runs on a blockchain means that a consensus protocol is used to verify each interaction. This can be Proof of Work (PoW) or Proof of Stake (PoS) or whatever the DApp developer chooses. This is to ensure the same level of security applicable to the blockchain over the DApp.</NewP>
            </Wrap>
        </Container>
    );
}

export default Dapp;