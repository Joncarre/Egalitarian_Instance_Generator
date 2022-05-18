import React from 'react';
import { useHistory } from "react-router-dom";
import { Button } from 'components/ButtonElements';
import {
	InfoContainer,
	InfoWrapper,
	InfoRow,
	Column1,
	Column2,
	Img,
	ImgChainlink,
	ImgWrap,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	BtnWrap,
} from './InfoElements';

const InfoSection = ({ lightBg, id, imgStart, img, topLine, lightText, headline, darkText, description, buttonLabel, alt, url }) => {
	const history = useHistory();

	const handleClick = () => {
		history.push(url);
	}

	return (
		<div>
			<InfoContainer lightBg={lightBg} id={id}>
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>
								<BtnWrap>
									<Button
										to="home"
										spy={true}
										exact="true"
										offset={-80}
										onClick={() => handleClick()}
									>{buttonLabel}</Button>
								</BtnWrap>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								{(id === "chainlink" || id === "how_it_works") &&
									<ImgChainlink src={img} alt={alt}></ImgChainlink>
								}
								{(id === "dapp" || id === "3sat") &&
									<Img src={img} alt={alt}></Img>
								}
							</ImgWrap>

						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</div>
	)
}

export default InfoSection;
