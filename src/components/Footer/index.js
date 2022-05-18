import React, { useState } from 'react';
import {
	FooterContainer,
	FooterWrap,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	FooterLinkA,
	WebsiteRights,
	CopyButton
} from './FooterElements';

import "./footerStyle.css";

const Footer = () => {
	const [isCopied, setIsCopied] = useState(false);

	const handleCopy = () => {
		if (!isCopied) {
			setIsCopied(true);
			/* Copy the text inside the text field */
			navigator.clipboard.writeText("joncarre@ucm.es");

			setTimeout(() => {
				setIsCopied(false);
			}, 1500)
		}
	}
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>About us</FooterLinkTitle>

							<FooterLinkA href="http://maude.sip.ucm.es/fadoss" target="_blank" rel="noreferrer">Research Group</FooterLinkA>

							<FooterLinkA href="https://github.com/Joncarre/Blockchain" target="_blank" rel="noreferrer">Related projects</FooterLinkA>

							<div className="tooltip">
								<FooterLink to="/">Contact us</FooterLink>
								<div className="bottom">
									<span>joncarre@ucm.es</span>
									<CopyButton onClick={() => handleCopy()}>
										<div className={!isCopied ? "show" : "hide"}>Copy</div>
										<div className={isCopied ? "show" : "hide"}>Copied!</div>
									</CopyButton>
									<i></i>
								</div>
							</div>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>The DApp</FooterLinkTitle>
							<FooterLink to="/development">Development</FooterLink>
							<FooterLink to="/faqs">FAQS</FooterLink>
							<FooterLink to="/termsofservice">Terms of Service</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<WebsiteRights>
					J. Carrero © {new Date().getFullYear()} All rights reserved.
				</WebsiteRights>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;