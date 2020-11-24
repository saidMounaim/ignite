import React from 'react';
import { useSelector } from 'react-redux';
// Components
import Game from './Game';
// Styling & Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Searched = () => {
	const { searched } = useSelector((state) => state.game);

	return (
		<>
			{searched.length !== 0 && (
				<GameList>
					<h2>Searched Games</h2>
					<Games>
						{searched.map((game) => (
							<Game game={game} />
						))}
					</Games>
				</GameList>
			)}
		</>
	);
};

const GameList = styled(motion.div)`
	padding: 0rem 5rem;
	h2 {
		padding: 5rem 0rem;
	}
`;

const Games = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
	grid-column-gap: 3rem;
	grid-row-gap: 5rem;
`;

export default Searched;
