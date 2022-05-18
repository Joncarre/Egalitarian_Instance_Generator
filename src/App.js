import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "components/Navbar/index";
import Sidebar from "components/SideBar";

import Home from "pages";
import RegisterPage from "pages/register";
import UserSectionPage from 'pages/user';
import SigninPage from 'pages/signin';
import InstancesPage from 'pages/instances';
import InstancePage from 'pages/instance';
import Subpage from 'pages/subpage';

import Dapp from 'components/SubPages/Dapp';
import HowItWorks from 'components/SubPages/HowItWorks';
import ThreeSat from 'components/SubPages/ThreeSat';
import ChainLink from 'components/SubPages/ChainLink';

import TermsOfService from 'components/SubPages/TermsOfService';
import Faqs from 'components/SubPages/Faqs';
import Development from 'components/SubPages/Development';


// Update with the contract address logged out to the CLI when it was deployed 
export const generatorAddress = "0x7B9755e4aADa3e32604992e2ef4A0B6e5Caa54Bf";

// request access to the user's MetaMask account
export async function requestAccount() {
  await window.ethereum.request({ method: 'eth_requestAccounts' });
}

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/register' component={RegisterPage} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/user' component={UserSectionPage} exact />
        <Route path='/instances' component={InstancesPage} exact />
        <Route path='/instance' component={InstancePage} exact />
        {/* Routes of Navbar */}
        <Route path='/dapp' component={() => <Subpage Comp={Dapp} />} exact />
        <Route path='/howitworks' component={() => <Subpage Comp={HowItWorks} />} exact />
        <Route path='/3sat' component={() => <Subpage Comp={ThreeSat} />} exact />
        <Route path='/chainlink' component={() => <Subpage Comp={ChainLink} />} exact />
        {/* Routes of Footer */}
        <Route path='/termsofservice' component={() => <Subpage Comp={TermsOfService} />} exact />
        <Route path='/faqs' component={() => <Subpage Comp={Faqs} />} exact />
        <Route path='/development' component={() => <Subpage Comp={Development} />} exact />
      </Switch>
    </Router>
  );
}

export default App;
