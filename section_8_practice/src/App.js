import React, { useState } from 'react';

import AddUser from './components/AddUser/AddUser';
import Users from './components/Users/Users';

function App() {
  const [users, setUsers] = useState([])

  const addUserHandler = (user) => {
    setUsers(prevUsers => {
      return [...prevUsers, user]
    });
  };

  return (
    <div className="App">
      <AddUser addUser={addUserHandler}/>
      <Users userList={users}/>
    </div>
  );
}

export default App;
