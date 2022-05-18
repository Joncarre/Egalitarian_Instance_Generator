import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from './SidebarElements';

import { connectWallet, getCurrentWalletConnected } from '../interact';

const Sidebar = ({ isOpen, toggle }) => {
  // MetaMask Wallet Connection
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  const history = useHistory()
  const [url, setUrl] = useState(window.location.pathname);

  useEffect(() => {
    const initialSet = async () => {
      const { address, status } = await getCurrentWalletConnected();
      setWallet(address)
      setStatus(status);
      addWalletListener();
    }
    initialSet();
  }, []);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  useEffect(() => {
    return history.listen((location) => {
      setUrl(location.pathname);
    })
  }, [history])

  const handleClick = (path) => {
    // if at the front page, click NavLinks button will scroll to the location of element
    // if not, click NavLinks button will navigate to clicked path
    if (url !== "/" && path !== url) {
      history.push(path);
    }
    toggle();
  }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon>

        </CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='dapp' onClick={() => handleClick('/dapp')}>
            ÐApp
          </SidebarLink>
          <SidebarLink to='how_it_works' onClick={() => handleClick('/howitworks')}>
            How it works
          </SidebarLink>
          <SidebarLink to='3sat' onClick={() => handleClick('/3sat')}>
            3-SAT
          </SidebarLink>
          <SidebarLink to='chainlink' onClick={() => handleClick('/chainlink')}>
            Chainlink
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="" id="walletButton" onClick={connectWalletPressed}>
            {walletAddress.length > 0 ? ("Connected: " +
              String(walletAddress).substring(0, 6) + "..." +
              String(walletAddress).substring(38)) : (<span>Connect Wallet</span>)}
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
