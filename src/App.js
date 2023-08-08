import { Component } from 'react' 
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';
import './App.css';

class App extends Component {

  constructor() 
  {
    super();

    this.state=
    {
      monsters: [],
      searchfield: ""
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users#")
    .then((response) => response.json())
    .then((user) => this.setState({monsters:user} ))
  }

  onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();

     this.setState(
       {searchfield:searchString}
     )
   }

  render() 
  {
    
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchfield); 
  }); 

    return (
      <div className="App">

        <h1 className="app-title">Monsters Rolodex</h1>

        <SearchBox onChangeHandler={this.onSearchChange} />

        <CardList  monsters={filteredMonsters}/>

      
      </div>  
    );
  } 

}

export default App;
