import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadDetailsGame } from '../redux/actions/detailsActions';

const DetailsPage = () => {
	// let history = useHistory();
	// let params = useParams();
	// const gameId = params?.id;

	// const dispatch = useDispatch();

	// const { details } = useSelector((state) => state.detail);

	// useEffect(() => {
	// 	dispatch(loadDetailsGame(gameId));
	// 	if (!gameId) {
	// 		history.push('/');
	// 	}
	// }, [dispatch, gameId]);

	// console.log(details);

	return (
		<div>
			<h3>Data</h3>
		</div>
	);
};

export default DetailsPage;
