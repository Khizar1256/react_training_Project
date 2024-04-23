import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [dataList, setDataList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataList((prevList) => [...prevList, formData]);
    setFormData({ name: '', email: '' }); // Clear form fields after submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {dataList.map((data, index) => (
          <li key={index}>{data.name} - {data.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
