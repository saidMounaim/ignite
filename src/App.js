import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPopularGames } from './redux/actions/gameActions';

const App = () => {

  const dispatch = useDispatch();
  const { popular, error, loading } = useSelector(state => state.game);

  useEffect(() => {
    dispatch(loadPopularGames());
  }, []);

  return (
    <div className="App">
      <h1>hello ignite</h1>
    </div>
  );
}


export default App;