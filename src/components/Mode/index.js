import { React } from 'react';
import { useHistory } from 'react-router-dom';
import {
	Container,
	TextDiv,
	StyledButton,
	ButtonItem,
	ButtonFlex
} from './ModeElements';

import { secureStorage } from 'components/secureSession';

const Mode = () => {

	let history = useHistory();

	const handleSubmit = (limited) => {
		// unlimited -> 0 (false)
		// limit -> 1 (true)
		if (limited === true) secureStorage.setItem('limited', 1);
		else secureStorage.setItem('limited', 0);
		history.push("/user");
	}

	return (
		<Container>
			<TextDiv>
				The mode indicates the constraints on the preferences of the agents in the generated instances. In Unlimited mode, the preference that an agent has for a given resource is a number within the interval (0, 1000). In Limited mode, this restriction is maintained and, in addition, the total sum of an agent's preferences for the available resources must add up to 1000. Note that, due to the latter constraint, agent preferences in Limited mode will potentially be lower.
			</TextDiv>
			<br/>
			<ButtonFlex>
				<ButtonItem right>
					<StyledButton onClick={() => handleSubmit(false)}>Unlimited</StyledButton>
				</ButtonItem>
				<ButtonItem>
					<StyledButton onClick={() => handleSubmit(true)}>Limited</StyledButton>
				</ButtonItem>
			</ButtonFlex>
		</Container>
	);
}

export default Mode;