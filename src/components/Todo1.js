import React, { useState, useEffect } from 'react'
import "../App.css";

const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } return [];
}

const Todo = () => {

  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState(getLocalItems);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addItem = () => {
    if (!inputData) {

    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData }
          }
          return elem;
        })
      )
      setToggleSubmit(true);
      setInputData("");
      setIsEditItem(null);
    } else {
      // setItems([...items, inputData]);
      const allInputData = { id: new Date().getTime().toString(), name: inputData }
      setItems([...items, allInputData]);
      setInputData('');
    }
  }
  // const deleteItem = (id) => {
  //   console.log(id);
  //   const updateditems = items.filter((elem, ind) => {
  //     return ind !== id;
  //   });
  const deleteItem = (index) => {
    const updateditems = items.filter((elem) => {
      return index !== elem.id;
    });
    setItems(updateditems);
  }
  // adding tasks to localstorage as soon as [items] gets updated
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items))
  }, [items]);

  // edit button
  // get the id and name of the corresponding item that is clicked
  // set toggle mode to change add button into edit button
  //  update value of setInput with new updated value to edit
  // pass the current element id to new state variable for reference

  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id
    });
    console.log(newEditItem);

    setToggleSubmit(false);
    setInputData(newEditItem.name);
    setIsEditItem(id);
  }

  // const removeAll = () => {
  //   setItems([]);
  // }
  return (
    <>
      <div className="main-div">
        <div className="container">
          <div className="addItems">
            <input type="text" placeholder='Add Notes...' value={inputData} onChange={(e) => setInputData(e.target.value)} className="note-input" />
            {
              toggleSubmit ? <button title='Add Note' onClick={addItem} className="first-buttons">Add</button> : <button title='Edit Note' onClick={addItem} className="first-buttons">Edit</button>
            }
          </div>
          <div className="child-div">
            <h3>My Notes</h3>
          </div>

          {/* <div className="showItems">
            {
              items.map((elem, ind) => {
                return (
                  <div className="eachItem" key={ind}>
                    <span>{elem}</span>
                    <button onClick={() => deleteItem(ind)}>Delete Item</button>
                  </div>
                )
              })
            }
          </div> */}
          <div className="showItems">
            {
              items.map((elem) => {
                return (
                  <div className="eachItem" key={elem.id}>
                    {/* <span>{elem.name}</span> */}
                    <input type="text" value={elem.name} className="note" />
                    <div className="last-buttons">
                      <i class="fa-solid fa-trash-can" onClick={() => deleteItem(elem.id)}></i>
                      <i class="fa-solid fa-pen-to-square" onClick={() => editItem(elem.id)}></i>
                    </div>
                  </div>
                )
              })
            }
          </div>

          {/* <div className="showItems">
            <button className="btn effect 04" onClick={removeAll}><span>Check List</span></button>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Todo;