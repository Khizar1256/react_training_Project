import { useState } from 'react'
import './App.css'
import TodoList from './components/todoList/todoList';

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
  const handleDelete = (index: number) => {
    // Create a new array without the item at the specified index
    const newDataList = nameList.filter((_, i) => i !== index);
    // Update the state with the new array
    setnameList(newDataList);
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
        <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded' onClick={handleSubmit}>Add</button>
      {/* </form> */}
      <TodoList nameList={nameList} handleDeleteFunc={handleDelete}/>
    </div>
    </>
  )
}

export default App
