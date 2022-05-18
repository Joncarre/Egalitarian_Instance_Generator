import dappImg from 'images/dapp.png';
import howItWorksImg from 'images/how_it_works.png';
import threeSatImg from 'images/3sat.png';
import chainHomeImg from 'images/chain_home.png';

export const homeObjOne = {
    id: 'dapp',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Ethereum ÐApp',
    headline: 'What is a decentralized application?',
    description: 'Learn more about this type of applications that make use of blockchain technology and discover the advantages of using them and why they are able to solve problems that we usually find in traditional web applications.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: dappImg,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
    url: '/dapp'
};

export const homeObjTwo = {
    id: 'how_it_works',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'How it works',
    headline: 'How a decentralized application works',
    description: 'The way in which we interact with this type of application differs from the methods typically used in web applications. Here you can find the steps to follow so that you can get the most out of this 3-SAT instance generator.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: howItWorksImg,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true,
    url: '/howitworks'
};

export const homeObjThree = {
    id: '3sat',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: '3-SAT',
    headline: 'What is the 3-SAT problem?',
    description: 'The main objective of this DApp is to generate random instances of the 3-SAT problem. Find out a little more about this problem and why it is so important for computer science.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: threeSatImg,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
    url: '/3sat'
};

export const homeObjFour = {
    id: 'chainlink',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Chainlink',
    headline: 'Random and verifiable numbers',
    description: 'The determinism inherent in the blockchain prevents us from generating random numbers by making use only of the information contained in the blockchain. In this section you will discover how we are able to generate random numbers that are also verifiable.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: chainHomeImg,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true,
    url: '/chainlink'
};