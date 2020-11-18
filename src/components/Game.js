import React from 'react';
// Styling & Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Game = ({ game }) => {
	return (
		<GameCard key={game.id}>
			<h3>{game.name}</h3>
			<p>{game.released}</p>
			<img src={game.background_image} />
		</GameCard>
	);
};

const GameCard = styled(motion.div)`
	min-heigh: 30vh;
	box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
`;

export default Game;
