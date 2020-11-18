import React from 'react';
// Styling & Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Message = ({ children }) => {
	return (
		<MessageDiv>
			<h4>{children}</h4>
		</MessageDiv>
	);
};

const MessageDiv = styled(motion.div)`
	width: 100%;
	padding: 2rem;
	background-color: grey;
	h4 {
		font-size: 15px;
		font-weight: bold;
	}
`;

export default Message;
