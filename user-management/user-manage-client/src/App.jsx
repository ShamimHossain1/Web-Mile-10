import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();

    const name = e.target.Name.value;
    const email = e.target.Email.value;
    const age = e.target.Age.value;
    const user = { name, email, age };
    fetch('http://localhost:3000/users',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => setUsers(data));

    // e.target.reset();
  };

  return (
    <div>
      <h1>Users Management</h1>
      <form action="" onSubmit={handleAddUser} className="flex flex-col">
        <input className='p-2 m-2 bg-gray-300 text-black' name='Name' type="text" placeholder='Name' />
        <input className='p-2 m-2 bg-gray-300 text-black' name='Email' type="text" placeholder='Email' />
        <input className='p-2 m-2 bg-gray-300 text-black' name='Age' type="text" placeholder='Age' />
        <button type='submit'>Add User</button>
      </form>
      {
        users.map(user => (
          <div className='border-2 border-solid m-5 p-5' key={user.id}>
            <h3>User ID: {user.id}</h3>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
          </div>
        ))
      }

    </div>
  )
}

export default App
