import {
	Container,
	Wrap,
	NewH1,
	NewH2,
	NewP,
	Img
} from "./SubpagesElements";

import logicImg from 'images/3sat_logic.png';

const ThreeSat = () => {
	return (
		<Container>
			<Wrap>
				<NewH1>What ́s 3-SAT?</NewH1>
				<NewP></NewP>

				<NewH1>What ́s 3-SAT?</NewH1>
				<NewP></NewP>
				<div style={{ textAlign: 'center' }}>
					<Img style={{ maxWidth: '700px' }} src={logicImg} alt="logic"></Img>
				</div>

				<NewH1>What ́s 3-SAT?</NewH1>
				<NewP></NewP>

			</Wrap>
		</Container>
	);
}

export default ThreeSat;