import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const res = await axios.get("https://node-and-express-5.onrender.com/movies");

      console.log(res.data);
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="container">
      <h3>CRUD Application with MERN stack</h3>

      <div className="input-search">
        <input type="search" placeholder="Search..." />
        <button className="btn green">Add record</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {users.map((movie, index) => (
            <tr key={movie._id || index}>
              <td>{movie._id}</td>
              <td>{movie.title}</td>
              <td>{movie.desc}</td>
              <td><button className="btn green">Edit</button></td>
              <td><button className="btn red">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
