import React from 'react';
import './App.css';
import { useJokeList } from 'hooks/useJokeList';
import { JokeItem } from 'components/JokeItem';
import { Button } from 'components/Button';

function App() {
  const { jokesList, getData, isLoading } = useJokeList(true);

  return (
    <div className='app'>
      <ul className='app__jokes-list'>
        <li >
          <Button onClick={getData} disabled={isLoading}>
            more!!!!!
          </Button>
        </li>
        {jokesList.map(item => <JokeItem {...item} key={item.id} />)}
      </ul>
    </div>
  );
}

export default App;
