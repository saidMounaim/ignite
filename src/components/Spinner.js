import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const Spinner = () => {
	return (
		<StyledSpinner>
			<Loader
				type="ThreeDots"
				color="#000"
				height={100}
				width={100}
				margin="auto"
				timeout={5000} //3 secs
			/>
		</StyledSpinner>
	);
};

const StyledSpinner = styled.div`
	display: flex;
	justify-content: center;
`;

export default Spinner;
