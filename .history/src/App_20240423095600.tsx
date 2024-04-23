import { useState } from 'react'
import './App.css'

function App() {
  const [name, setname] = useState('')
  const [nameList, setnameList] = useState<string[]>([])

  // useEffect(() => {
  //   nameList.push(name)
  // },[name])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const { name, value } = e.target;
    setname(() => e.target.value);
  };

  const handleSubmit = () => {
    // e.preventDefault()
    console.log(name)
    setnameList((prevList) => [...prevList, name])
    setname(''); // Clear form fields after submission
  };
  const handleDelete = (index) => {
    // Create a new array without the item at the specified index
    const newDataList = dataList.filter((_, i) => i !== index);
    // Update the state with the new array
    setDataList(newDataList);
  };
  return (
    <>
       <div>
      {/* <form onSubmit={handleSubmit}> */}
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter name"
        />
        <button onClick={handleSubmit}>Submit</button>
      {/* </form> */}
      <ul>
      {nameList.map((str, index) => (
          <li key={index}>{str}<button onClick={() => handleDelete(index)}>Delete</button></li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
