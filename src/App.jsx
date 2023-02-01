import * as React from 'react';

const title = 'React';
function getTitle(title){
  return title;
}

const list = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  difficulty: 8,
  objectID: 0,
  },
  {
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  difficulty: 6,
  objectID: 1,
  },
];


function App() {
  return (
    <div>
      
      <h1>Welcome to {getTitle('React')} Master Class!</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

    <ul>
      {list.map(function (item) {
           return (
            <li key={item.objectID}>
              <p>Author: {item.author}</p>
              <p>Link to Documentation:
                <a href={item.url}> {item.title}</a>
              </p>
              <p>Number of possible Comments: {item.num_comments}</p>
              <p>Value Points given: {item.points}</p>
              <p>Topic difficulty: {item.difficulty}</p>
            </li>
          );
      })}
    </ul>

    </div>
  )
}

export default App;