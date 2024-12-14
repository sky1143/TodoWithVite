import { useState } from 'react'

// import './App.css'

function App() {
  const [inputText,setInputText] = useState("")

  const [items,setItems] = useState([])

  function handleClick(event){
     setInputText(event.target.value)

  }

  function addedItem(){
    setItems((prevValue)=>{
      return[...prevValue,inputText]
    })
    setInputText("")
  }

  return (
    <>
    <div>
      <h1  className='heading'>Todo with React</h1>
      <input type="text" onChange={handleClick} value={inputText} />
      <button onClick={addedItem}>add</button>
        <ul>
          {items.map((todoItem, index) => (
            <li key={index}>{todoItem}</li>
          ))}
        </ul>
    </div>
     
    </>
  )
}

export default App
