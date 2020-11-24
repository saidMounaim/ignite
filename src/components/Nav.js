import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import logo from '../img/logo.svg';
import { useDispatch } from 'react-redux';
import { loadSearchGame } from '../redux/actions/gameActions';
import { fadeIn } from '../animation';

const Nav = () => {
	const dispatch = useDispatch();
	const [query, setQuery] = useState('');

	const handlerSearch = (e) => {
		setQuery(e.target.value);
	};

	const handlerSubmit = (e) => {
		e.preventDefault();
		if (query == '') {
			return;
		}
		dispatch(loadSearchGame(query));
	};

	const clearSearched = () => {
		dispatch({ type: 'CLEAR_SEARCHED' });
		setQuery('');
	};

	return (
		<StyledNav variants={fadeIn} initial="hidden" animate="show">
			<StyledLogo onClick={clearSearched}>
				<img src={logo} />
				<h3>Ignite</h3>
			</StyledLogo>
			<div className="search">
				<form onSubmit={handlerSubmit}>
					<input type="text" value={query} onChange={handlerSearch} />
					<button type="submit">Search</button>
				</form>
			</div>
		</StyledNav>
	);
};

const StyledNav = styled(motion.div)`
	padding: 3rem 5rem;
	text-align: center;
	input {
		width: 30%;
		font-size: 1.5rem;
		padding: 0.5rem;
		border: none;
		margin-top: 1rem;
		box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
		outline: none;
	}
	button {
		font-size: 1.5rem;
		border: none;
		padding: 0.5rem 2rem;
		cursor: pointer;
		background: #ff7676;
		color: white;
		outline: none;
	}
`;

const StyledLogo = styled(motion.div)`
	display: flex;
	justify-content: center;
	padding: 1rem;
	cursor: pointer;
	img {
		width: 2rem;
		height: 2rem;
	}
`;

export default Nav;
