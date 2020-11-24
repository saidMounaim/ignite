import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadPopularGames } from '../redux/actions/gameActions';
// Components
import Message from './Message';
import Spinner from './Spinner';
import Game from './Game';
// Styling & Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PopularGames = () => {
	const dispatch = useDispatch();

	const { popular, loading, error } = useSelector((state) => state.game);

	useEffect(() => {
		dispatch(loadPopularGames());
	}, [dispatch]);

	return (
		<GameList>
			<h2>Popular Games</h2>
			<Games>{error ? <Message>{error}</Message> : popular.map((game) => <Game game={game} />)}</Games>
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

export default PopularGames;
