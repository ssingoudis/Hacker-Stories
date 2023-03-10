import * as React from 'react';
import * as ReactDOM from 'react-dom';

const title = 'React';
function getTitle(title){
  return title;
}



{/*============================= APP COMPONENT =================================*/}
const App = () => {
  const stories = [
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
    {
    title: 'Next.JS',
    url: 'https://redux.js.org/',
    author: 'Je m\'apelle, Tobias Schnell',
    num_comments: 10,
    points: 1,
    difficulty: 1,
    objectID: 2,
    },
  ];

  return (
      <div> 
        <h1>Welcome to {getTitle('React')} Master Class!</h1>
        <Search />
        <hr/>
        <List list={stories}/>
      </div>
  );
};



{/* =============================== FUNCTIONS AS COMPONENTS ================================ */}

const List = (props) => (
  <ul>
  {props.list.map((item) => (
    <Item key={item.objectID} item={item} />
  ))}
  </ul>
);

const Item = (props) => (
  <li>
  <span>
    <a href={props.item.url}>{props.item.title}</a>
  </span>
  <span>, {props.item.author},</span>
  <span> {props.item.num_comments},</span>
  <span> {props.item.points}</span>
</li>
);


const Search = () => { 
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log('Rendering')
  }
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>Searching for <strong>{searchTerm}</strong></p>
      </div>
  )}
    
  

export default App;
