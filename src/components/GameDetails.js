import React from 'react';
// Styling & Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
//Redux
import { useSelector } from 'react-redux';
import { smallImage } from '../util';
//IMAGES
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import nintendo from '../img/nintendo.svg';
import playstation from '../img/playstation.svg';
import xbox from '../img/xbox.svg';
import steam from '../img/steam.svg';
//Stars
import StarEmpty from '../img/star-empty.png';
import StarFull from '../img/star-full.png';

const GameDetails = () => {
	const history = useHistory();
	const { details, screens, loading } = useSelector((state) => state.detail);

	//Exit Detail
	const exitDetailHandler = (e) => {
		const element = e.target;
		if (element.classList.contains('shadow')) {
			document.body.style.overflow = 'initial';
			history.push('/');
		}
	};

	// Get Platform Images
	const getPlatforms = (platform) => {
		switch (platform) {
			case 'PlayStation 4':
				return playstation;
			case 'Xbox One':
				return xbox;
			case 'nintendo Switch':
				return nintendo;
			case 'PC':
				return steam;
			case 'IOS':
				return apple;
			default:
				return gamepad;
		}
	};

	//Get Stars
	const getStars = () => {
		const stars = [];
		const rating = Math.floor(details.rating);
		for (let i = 1; i <= 5; i++) {
			if (i <= rating) {
				stars.push(<img src={StarFull} />);
			} else {
				stars.push(<img src={StarEmpty} />);
			}
		}
		return stars;
	};

	return (
		<>
			{!loading && (
				<CardShadow
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					className="shadow"
					onClick={exitDetailHandler}
				>
					<Detail
						initial={{ opacity: 0, scale: 0.1 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.1 }}
						transition={{ duration: 1 }}
					>
						<Stats>
							<div className="rating">
								<h3>{details.name}</h3>
								<p>Rating : {details.rating}</p>
								{getStars()}
							</div>
							<Info>
								<h3>Platforms</h3>
								<Platforms>
									{details.platforms?.map((data) => (
										<img key={data.platform.id} src={getPlatforms(data.platform.name)} />
									))}
								</Platforms>
							</Info>
						</Stats>
						<Media>
							<img src={details.background_image} alt="img" />
						</Media>
						<Description>
							<p>{details.description_raw}</p>
						</Description>
						<div className="gallery">
							{screens.results?.map((screen) => (
								<img key={screen.id} src={smallImage(screen.image, 1280)} />
							))}
						</div>
					</Detail>
				</CardShadow>
			)}
		</>
	);
};

const CardShadow = styled(motion.div)`
	width: 100%;
	min-height: 100vh;
	overflow-y: scroll;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	&::-webkit-scrollbar {
		width: 0.5rem;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #ff7676;
	}
	&::-webkit-scrollbar-track {
		background-color: white;
	}
`;

const Detail = styled(motion.div)`
	width: 80%;
	border-radius: 1rem;
	padding: 2rem 5rem;
	position: absolute;
	left: 10%;
	color: black;
	background-color: white;
	img {
		width: 100%;
	}
`;

const Stats = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	img {
		width: 2rem;
		height: 2rem;
		display: inline-block;
	}
`;
const Info = styled(motion.div)`
	text-align: center;
`;
const Platforms = styled(motion.div)`
	display: flex;
	justify-content: space-evenly;
	img {
		margin-left: 3rem;
	}
`;

const Media = styled(motion.div)`
	margin-top: 5rem;
	img {
		width: 100%;
		height: 60vh;
		object-fit: cover;
	}
`;

const Description = styled(motion.div)`
	margin: 5rem 0rem;
`;

export default GameDetails;
