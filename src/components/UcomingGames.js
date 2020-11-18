import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadUpcomingGames } from '../redux/actions/gameActions';
// Components
import Message from './Message';
import Spinner from './Spinner';
import Game from './Game';
// Styling & Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

const UcomingGames = () => {
	const dispatch = useDispatch();

	const { upcoming, loading, error } = useSelector((state) => state.game);

	useEffect(() => {
		dispatch(loadUpcomingGames());
	}, [dispatch]);

	console.log(upcoming);

	return (
		<GameList>
			<h2>Upcoming Games</h2>
			<Games>
				{loading ? (
					<Spinner />
				) : error ? (
					<Message>{error}</Message>
				) : (
					upcoming.map((game) => <Game game={game} />)
				)}
			</Games>
		</GameList>
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

export default UcomingGames;
