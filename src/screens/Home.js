import React from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
// Components
import UpcomingGames from '../components/UcomingGames';
import NewGames from '../components/NewGames';
import PopularGames from '../components/PopularGames';
import GameDetails from '../components/GameDetails';
import Searched from '../components/Searched';
import { fadeIn } from '../animation';

const Home = () => {
	const location = useLocation();
	const gameId = location.pathname.split('/')[2];

	const { searched } = useSelector((state) => state.game);

	return (
		<motion.div variants={fadeIn} initial="hidden" animate="show">
			<AnimatePresence>{gameId && <GameDetails />}</AnimatePresence>

			<Searched />
			{searched.length === 0 && (
				<>
					<UpcomingGames />
					<PopularGames />
					<NewGames />
				</>
			)}
		</motion.div>
	);
};

export default Home;
