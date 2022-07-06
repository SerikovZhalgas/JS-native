import React from 'react';
import './App.css';

function App() {

  const names = ["Zhalgas", "Kamila", "Zhanat", "Saule", "Zhasmin"]
  const users = [{id: 1, name: "Zhalgas"},
    {id: 12, name: "Kamila"},
    {id: 123, name: "Zhanat"},
    {id: 1234, name: "Saule"},
    {id: 12345, name: "Zhasmin"}]

  const liElements = names.map(n => <li>{n}</li>)
  const liElements2 = users.map(u => <div key={u.id}><li>{u.name}</li></div>)
  return (
    <div>
      <ul>
        {liElements}
        {liElements2}
      </ul>
    </div>
  );
}

export default App;
