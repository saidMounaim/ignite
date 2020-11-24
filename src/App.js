import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components & Pages
import GlobalStyles from './components/GlobalStyles';
import Nav from './components/Nav';
import Home from './screens/Home';

const App = () => {
	return (
		<Router>
			<div className="App">
				<GlobalStyles />
				<Nav />
				<Switch>
					<Route path={['/games/id', '/']}>
						<Home />
					</Route>
					{/* <Route exact path="/game/:id" component={DetailsPage} /> */}
				</Switch>
			</div>
		</Router>
	);
};

export default App;
