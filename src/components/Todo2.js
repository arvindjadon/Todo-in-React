import React from "react";
import "../App.css";

const Todo2 = () => {
  return (
    <>
      <div className="main-div">
        <input type="text" placeholder="Add notes..." />
        <button>Add</button>
        <div className="center-div">
          <h3>My Notes</h3>

          <ol>
            <ul>My apple</ul>
          </ol>
        </div>
      </div>
    </>
  )
}

export default Todo2;