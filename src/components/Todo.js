import React, { useState } from 'react'

export default function Todo() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  return (
    <>
      <div className="main-div">
        <div className="addItems">
          <input type="text" placeholder='Add Notes...' value={inputData} onChange={(e) => setInputData(e.target.value)} />
          <button onClick={addItem}>Add</button>
          <h3>My Notes</h3>

          <div className="showItems">
            <span>My name is Alice</span>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </>
  )
}
