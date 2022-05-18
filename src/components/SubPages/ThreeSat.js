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
				<NewP>3SAT, or the Boolean satisfiability problem, is a problem that asks what is the fastest algorithm to tell for a given formula in Boolean algebra (with unknown number of variables) whether it is satisfiable, that is, whether there is some combination of the (binary) values of the variables that will give 1. In other words, it asks whether the variables of a given Boolean formula can be consistently replaced by the values TRUE or FALSE in such a way that the formula evaluates to TRUE. If this is the case, the formula is called satisfiable. On the other hand, if no such assignment exists, the function expressed by the formula is FALSE for all possible variable assignments and the formula is unsatisfiable.</NewP>

				<NewH2>Conjunctive normal form</NewH2>
				<NewP>Conjunctive normal form (in particular with 3 literals per clause) is often considered the canonical representation for SAT formulas. The general SAT problem reduces to 3-SAT, the problem of determining satisfiability for formulas in this form. For example, a 3SAT instance would be to
					know if there are values x&#8321;, x&#8322; and x&#8323; such that the following expression is true.</NewP>
				<div style={{ textAlign: 'center' }}>
					<Img style={{ maxWidth: '700px' }} src={logicImg} alt="logic"></Img>
				</div>

				<NewH2>Complexity</NewH2>
				<NewP>SAT was the first known NP-complete problem, as proved by Stephen Cook at the University of Toronto in 1971 and independently by Leonid Levin at the National Academy of Sciences in 1973. Until that time, the concept of an NP-complete problem did not even exist. The proof shows how every decision problem in the complexity class NP can be reduced to the SAT problem for CNF formulas, sometimes called CNFSAT. A useful property of Cook's reduction is that it preserves the number of accepting answers. For example, deciding whether a given graph has a 3-coloring is another problem in NP; if a graph has 17 valid 3-colorings, the SAT formula produced by the Cook-Levin reduction will have 17 satisfying assignments.</NewP>
				<NewP>NP-completeness only refers to the run-time of the worst case instances. Many of the instances that occur in practical applications can be solved much more quickly. See Algorithms for solving SAT below.</NewP>

				<NewH2>MAX 3-SAT</NewH2>
				<NewP>The maximum satisfiability problem, is an FNP generalization of SAT. It asks for the maximum number of clauses which can be satisfied by any assignment. It has efficient approximation algorithms but is NP-hard to solve exactly. Worse still, it is APX-complete, meaning there is no polynomial-time approximation scheme (PTAS) for this problem unless P = NP.</NewP>

			</Wrap>
		</Container>
	);
}

export default ThreeSat;