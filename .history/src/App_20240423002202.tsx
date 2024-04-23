import { useState } from 'react'
import './App.css'

function App() {
  const [name, setname] = useState('')
  const [nameList, setnameList] = useState([''])
  // useEffect(() => {
  //   nameList.push(name)
  // },[name])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setnameList((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setnameList((prevList) => [...prevList, name]);
    setname(''); // Clear form fields after submission
  };

  return (
    <>
       <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter name"
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {nameList.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App