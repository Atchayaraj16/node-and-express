import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [editId, setEditId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const getAllUsers = async () => {
    try {
      const res = await axios.get("https://node-and-express-6.onrender.com/movies");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleAddOrUpdate = async () => {
    try {
      if (editId) {
        await axios.put(`https://node-and-express-6.onrender.com/movies/${editId}`, {
          title,
          desc
        });
      } else {
        await axios.post("https://node-and-express-6.onrender.com/movies", {
          title,
          desc
        });
      }
      setTitle('');
      setDesc('');
      setEditId(null);
      getAllUsers();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://node-and-express-6.onrender.com/movies/${id}`);
      getAllUsers();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (movie) => {
    setTitle(movie.title);
    setDesc(movie.desc);
    setEditId(movie._id);
  };

  const filteredUsers = users.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h3>CRUD Application with MERN stack</h3>

      <div className="input-search">
        <input
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className="btn green" onClick={handleAddOrUpdate}>
          {editId ? "Update" : "Add"} record
        </button>
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
          {filteredUsers.map((movie, index) => (
            <tr key={movie._id || index}>
              <td>{movie._id}</td>
              <td>{movie.title}</td>
              <td>{movie.desc}</td>
              <td><button className="btn green" onClick={() => handleEdit(movie)}>Edit</button></td>
              <td><button className="btn red" onClick={() => handleDelete(movie._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
