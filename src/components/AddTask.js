import React, { useState } from "react";

const AddTask = ({ show, onAddTask }) => {
    const [text, setText]=useState('');
    const [day, setDay]=useState('');
    const [reminder, setReminder]=useState(false);
    const onSubmit= (e)=>{
        e.preventDefault();
        if(!text)
        alert('Please enter text');
        else if(!day)
        alert('Please enter day');
        onAddTask({text, day, reminder});
        setText('');
        setDay('');
        setReminder(false);
    }
  return (
    <>
      {show && (
        <form onSubmit={(e)=>onSubmit(e)}>
          <div className="form-control">
            <label>Name:</label>
            <input
              type="text"
              style={{ backgroundColor: "white", color: "black" }}
              placeholder="Add Task"
              value={text}
              onChange={(e)=>{setText(e.target.value)}}
            />
          </div>
          <div className="form-control">
            <label>Day:</label>
            <input
              type="input"
              style={{ backgroundColor: "white", color: "black" }}
              placeholder="Add day and time"
              value={ day }
              onChange={(e) => {setDay(e.target.value)}}
            />
          </div>
          <div className="form-control-check">
            <label>Set Alert:</label>
            <input
              type="checkbox"
              style={{ backgroundColor: "white", color: "black" }}
              checked={ reminder }
              onChange={(e)=> setReminder(e.currentTarget.checked) }
            />
          </div>

          <button type='submit' style={{ backgroundColor: 'blue' }} className="btn btn-block">Save</button>
        </form>
      )}
    </>
  );
};

export default AddTask;
