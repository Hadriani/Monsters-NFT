import { useState, useEffect } from 'react';

import Cardlist from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';

import logo from './logo.svg';
import './App.css';
import { createPortal } from 'react-dom';


const App = () => {
  const [searchField, setSearchField] = useState ('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
 


  useEffect(() => {
    console.log('effect fired');
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then ((response) => response.json())
    .then ((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monsters) => {
      return monsters.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
    

  }, [monsters, searchField]);

  const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
      }
  




  return (
    <div className="App">
      <h1 className="app-title">Monsters NFT</h1>

      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters' />
        <Cardlist monsters={filteredMonsters} />
        

    </div>

  );
}

//class App extends Component {
 // constructor () {
  //  super();

   // this.state = {
     // monsters: [],
      //searchField: ''

   // };
 // }

  //componentDidMount() {
   // console.log('componentDidMount');
   // 
  //  this.setState(() => {
   //   return {monsters: users}
   // }
   // ));

   // this.onSearchChange = 

 // render () {
 //   console.log('render from AppJs');
 //   const { monsters, searchField } = this.state;
 //   const { onSearchChange } = this;


  //  return (
   //   <div className="App">
   //     <h1 className="app-title">Monsters Rolodex</h1>

    //    <SearchBox
    //    className='monsters-search-box' 
     //   onChangeHandler= {onSearchChange} 
    //    placeholder='search monsters' />
     //   <Cardlist monsters = {filteredMonsters} />
     // </div>
   // );
 // }
  
//}

export default App;
