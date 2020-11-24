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
	height: 5rem;
	padding: 2rem;
	background-color: #cb6060;
	border-radius: 27px;
	color: #fff;
	h4 {
		font-size: 15px;
		font-weight: bold;
	}
`;

export default Message;
