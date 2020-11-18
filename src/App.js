import React from 'react';
// Components & Pages
import GlobalStyles from './components/GlobalStyles';
import Home from './screens/Home';

const App = () => {
	return (
		<div className="App">
			<GlobalStyles />
			<Home />
		</div>
	);
};

export default App;
