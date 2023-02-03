import * as React from 'react';
import * as ReactDOM from 'react-dom';

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


{/*============================= APP COMPONENT =================================*/}
const App = () => (
    <div>
      
      <h1>Welcome to {getTitle('React')} Master Class!</h1>

    <Search />
    <hr/>
    <List />
    </div>
  )



{/* =============================== FUNCTIONS AS COMPONENTS ================================ */}
const Search = () => (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      </div>
  )
    

const List = () => (
  <ul>
  {list.map((item) => (
        <li key={item.objectID}>
          <p>Author: {item.author}</p>
          <p>Link to Documentation:
            <a href={item.url}> {item.title}</a>
          </p>
          <p>Number of possible Comments: {item.num_comments}</p>
          <p>Value Points given: {item.points}</p>
          <p>Topic difficulty: {item.difficulty}</p>
        </li>

  ))}
</ul>)

export default App;
