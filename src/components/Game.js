import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadDetailsGame } from '../redux/actions/detailsActions';
// Styling & Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { smallImage } from '../util';

const Game = ({ game }) => {
	const dispatch = useDispatch();
	const fetchDetailGame = (id) => {
		document.body.style.overflow = 'hidden';
		dispatch(loadDetailsGame(id));
	};

	return (
		<GameCard key={game.id} onClick={() => fetchDetailGame(game.id)}>
			<Link to={`/game/${game.id}`}>
				<h3>{game.name}</h3>
				<p>{game.released}</p>
				<img src={smallImage(game.background_image, 640)} />
			</Link>
		</GameCard>
	);
};

const GameCard = styled(motion.div)`
	min-heigh: 30vh;
	box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	overflow: hidden;
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
`;

export default Game;
