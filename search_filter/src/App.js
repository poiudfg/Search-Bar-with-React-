import JSONDATA from './MOCK_DATA.json'
import './App.css';
import { useState } from 'react';

function App() {
  const [searchTerm ,setSearchTerm] = useState("")
  return (
    <div className="App">
      <h1>Search Filter with React</h1>
      <input type="text" placeholder="Search..." onChange={event =>{setSearchTerm(event.target.value)}} />
      {JSONDATA.filter((val) =>{
        if (searchTerm == ""){
          return val
        }else if (val.first_name.toLocaleLowerCase().includes(searchTerm.toLowerCase())){
          return val
        }}).map((val ,key) => {
        return <div className='user' key={key}>
            <p>{val.first_name}</p>
          </div>
      })}
    </div>
  );
}

export default App;