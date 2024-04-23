import { useState } from 'react'
import './App.css'

function App() {
  const [name, setname] = useState('')
  const [nameList, setnameList] = useState([''])

  // useEffect(() => {
  //   nameList.push(name)
  // },[name])
  const handleChange = () => {
    // const { name, value } = e.target;
    setnameList((prevData) => ({
      ...prevData,
       name
    }));
  };

  const handleSubmit = () => {
    // e.preventDefault();
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
      {nameList.map((str, index) => (
          <li key={index}>{str}</li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
