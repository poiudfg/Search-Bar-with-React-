import JSONDATA from './MOCK_DATA.json'
import './App.css';
import { useState } from 'react';

function App() {
  const [searchTerm ,setSearchTerm] = useState("")
  return (
    <div className="App">
      <h1>Search Filter with React</h1>
      <input type="text" placeholder="Search..." onChange={event =>{setSearchTerm(event.target.value)}} />
      <table>
            <tr>
              <th>first name</th>
              <th>last name</th>
              <th>email</th>
            </tr>
            <tr className='space'>
              <th></th>
              <th></th>
              <th></th>
            </tr>
      {JSONDATA.filter((val) =>{
        if (searchTerm == ""){
          return val
        }else if (val.first_name.toLocaleLowerCase().includes(searchTerm.toLowerCase()) || 
                  val.last_name.toLocaleLowerCase().includes(searchTerm.toLowerCase()) ||
                  val.email.toLocaleLowerCase().includes(searchTerm.toLowerCase())){
          return val
        }}).map((val ,key) => {
        return <div className='user' key={key}>
          <tr>
            <td>{val.first_name} </td>
            <td>{val.last_name} </td>
            <td>{val.email}</td>
          </tr>
          </div>
      })}
      </table>
    </div>
  );
}

export default App;
