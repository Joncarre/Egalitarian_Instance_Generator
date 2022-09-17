import {
	Container,
	Wrap,
	NewH1,
	NewH2,
	NewP,
	Img
} from "./SubpagesElements";

import eg1 from 'images/eg1.PNG';
import eg3 from 'images/eg3.PNG';
import eg4 from 'images/eg4.PNG';
import eg5 from 'images/eg5.PNG';
import eg6 from 'images/eg6.PNG';
import eg7 from 'images/eg7.PNG';

const ThreeSat = () => {
	return (
		<Container>
			<Wrap>
				<NewH1>What is resource allocation?</NewH1>
				<NewP>Multiagent Resource Allocation (MARA) deals with the problem of delivering some resources to some agents, given their preferences over the resources. The definition of a particular MARA environment depends on many factors, and the first decision to be addressed is what the goal of the distribution is. In our case, the goal is Egalitarian social welfare. When some resources are to be distributed among a set of agents following this model, the goal is to maximize the utility of the agent whose utility turns out to be minimal. Utility is nothing more than a way of measuring an agent's happiness when the auction has ended. For this reason, before starting the auction, the participating agents must establish certain preferences for the available resources.</NewP>
				<NewP>Some of our previous studies (<a href="https://ieeexplore.ieee.org/document/9282975">Measuring the benefits of lying in MARA under egalitarian social welfare</a>) have shown that, under certain conditions and rules, it is considerably easy to lie in preferences and obtain a higher utility (profit); when the restrictions on the preferences that agents must communicate for the available resources are not very strong, they are incentivized to communicate a lie in order to monopolize a larger number of resources. At the same time, we show that we are able to discourage this lie if we impose some restrictions on preferences, such as forcing agents to make the sum of preferences for available resources equal to a constant. These two configurations (weak constraint and strong constraint) gave rise to two scenarios: unlimited and limited.</NewP>

				<NewH1>Operating modes</NewH1>
				<NewP>The first of the scenarios, known as <b>Unlimited</b>, is one in which each of the preferences that an agent communicates to the auctioneer must be an integer number between (0, 1000). Thus, the set of preferences for an agent considering that there are 10 resources available could be something like this:</NewP>
				<Img alt="dev" src={eg6}></Img>
				<NewP>In the second scenario, known as <b>Limited</b>, the sum total of the preferences an agent has for resources must equal 1000. That makes the agent have to think a bit more about what preference he assigns to each resource. In the second of the named articles, we show that agents can obtain a greater benefit by decreasing preferences to appear to be generally less satisfied with the allocation. If we think for a moment, this strategy is considerably difficult to carry out in the Limited scenario for the simple fact that now, when an agent decreases the preference for some resources, then he must necessarily increase the preference for other resources so that in total they still add up to 1000. For example, the set of preferences for an agent considering that there are 10 resources available could be something like this:</NewP>
				<Img alt="dev" src={eg7}></Img>
				<NewP>In addition, in order to provide a wider variety of instances, we have implemented three instance generators that work in both Unlimited and Limited modes.</NewP>
				<Img alt="dev" src={eg3}></Img>
				<NewP>The difference between these generators is the distribution of preferences that each agent has for the available resources. Specifically, Generator A generates instances giving a random weight to the preference that the agent has for each resource.  Generator B, gives a higher weight to the first resources, decreasing the probability of obtaining larger preferences as preferences are assigned. Finally, Generator C acts like Generator B, but gives a lower weight to the first resources.</NewP>
				<Img alt="dev" src={eg1}></Img>

				<NewH1>Types of problem to be solved</NewH1>
				<NewP>The application provides two possible solutions for each of the generated instances, regardless of whether it is an Unlimited or Limited instance. The first solution, which we have called "Auction problem", corresponds to the case in which the researcher would like to solve the instance as an auction problem. In this case, the researcher must solve take the instance by running some kind of algorithm that complies with the rules of Egalitarian social welfare, providing a solution to the given problem. Solutions of this type are vectors of n positions, where n is the number of available resources. For each position of the vector, the index of the position indicates the resource being referred to, and the number contained in that position indicates which agent has taken that resource. For example, this could be the solution for an Auction problem where 4 agents participate and 10 resources are available (we assume that the numbering starts from 0: Agent 0, Agent 1, Agent 2 and Agent 3):</NewP>
				<Img alt="dev" src={eg4}></Img>
				<NewP>The second problem that a researcher can address is to take the instance as an optimization problem, which we have simply called the "Optimization problem". As we named earlier, some of the studies we have done involve finding out what are the best strategies an agent has for communicating a lie. In the Unlimited case we found that lying is trivial. Therefore, this second optimization problem only makes sense in the Limited case. Specifically, what we are trying to do is to find the best lie that an agent could communicate in the Limited case. Let us understand "the best lie" as the set of preferences with which a given agent would obtain the highest possible payoff. Note that the constraint imposed in the Limited case makes this problem considerably difficult. In fact, as we showed in (<a href="https://www.mdpi.com/2227-7390/9/14/1599">On the Hardness of Lying under Egalitarian Social Welfare</a>), the complexity of this problem is one level above NP-Completeness. Despite this, some of our studies using genetic algorithms have shown that it is possible to find considerably good solutions in reasonable times. As an example, the following illustration could be a solution for an Optimization problem in which we have 10 available resources. Note that now we are not interested in which agent obtains which resource, but what we are interested in is which preferences a given agent (the lying agent) should communicate in order to obtain the highest possible benefit. Therefore, each of the ten positions of the vector contains a number between (0, 1000) and, moreover, the sum of all of them must be equal to 1000.</NewP>
				<Img alt="dev" src={eg5}></Img>
				<NewP>Because we have two possible solutions for each instance, let's say that each instance contains two copies: one to be solved as Auction problem and one to be solved as Optimization problem.</NewP>
				<NewP>Finally, it should be noted that the application is a random instance generator and nothing more than that. That is, researchers interested in solving problems of this type (such as the two we have proposed), can use this application to generate random and verifiable testbeds, modifying the number of agents and available resources. This application does not perform any kind of computation that has to do with the solutions to the problems. It is the researchers who, using the application, can test their algorithms and put them to the test.</NewP>

			</Wrap>
		</Container>
	);
}

export default ThreeSat;