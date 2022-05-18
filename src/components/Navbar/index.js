import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import logo from 'images/logo.png';
import { connectWallet, getCurrentWalletConnected } from '../interact';

const Navbar = ({ toggle }) => {
  // MetaMask Wallet Connection
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

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

  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  useEffect(() => {
    return history.listen((location) => {
      setUrl(location.pathname);
      // if go to another page, first remove all the active class of NavLinks
      // so the green bottom line will disappear
      // then check current path, and activate responding class of NavLinks
      const q1 = document.querySelector("#scrollToDapp");
      const q2 = document.querySelector("#scrollToHowItWorks");
      const q3 = document.querySelector("#scrollTo3sat");
      const q4 = document.querySelector("#scrollToChainlink");
      q1.classList.remove('active');
      q2.classList.remove('active');
      q3.classList.remove('active');
      q4.classList.remove('active');
      switch (location.pathname) {
        case "/dapp":
          q1.classList.add('active');
          break;
        case "/howitworks":
          // console.log(location.pathname);
          q2.classList.add('active');
          break;
        case "/3sat":
          q3.classList.add('active');
          break;
        case "/chainlink":
          q4.classList.add('active');
          break;
        default:
          break;
      }
    })
  }, [history])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  const handleClick = (path) => {
    // if at the front page, click NavLinks button will scroll to the location of element
    // if not, click NavLinks button will navigate to clicked path
    if (url !== "/" && path !== url) {
      history.push(path);
    }
  }

  return (
    <>
      <Nav scrollNav={scrollNav} id="navbar">
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>
            <img src={logo} alt='logo' />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks id="scrollToDapp"
                to={url === '/' ? 'dapp' : 'navbar'}
                smooth={true}
                duration={500}
                spy={url === '/' ? true : false}
                exact='true'
                offset={-80}
                onClick={() => handleClick('/dapp')}
              >ÐApp</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks id="scrollToHowItWorks"
                to={url === '/' ? 'how_it_works' : 'navbar'}
                smooth={true}
                duration={500}
                spy={url === '/' ? true : false}
                exact='true'
                offset={-80}
                onClick={() => handleClick('/howitworks')}
              >How it works</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks id="scrollTo3sat"
                to={url === '/' ? '3sat' : 'navbar'}
                smooth={true}
                duration={500}
                spy={url === '/' ? true : false}
                exact='true'
                offset={-80}
                onClick={() => handleClick('/3sat')}
              >3-SAT</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks id="scrollToChainlink"
                to={url === '/' ? 'chainlink' : 'navbar'}
                smooth={true}
                duration={500}
                spy={url === '/' ? true : false}
                exact='true'
                offset={-80}
                onClick={() => handleClick('/chainlink')}
              >Chainlink</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="" id="walletButton" onClick={connectWalletPressed}>
              {walletAddress.length > 0 ? ("Connected: " +
                String(walletAddress).substring(0, 6) + "..." +
                String(walletAddress).substring(38)) : (<span>Connect Wallet</span>)}
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
