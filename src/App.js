import { useEffect, useState } from "react";
import AddTask from "./components/AddTask.js";
import Header from "./components/Header.js";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import About from "./components/About";
import TaskDetail from "./components/Taskdetail"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState(
    []
    //     [
    //     {
    //         id:1,
    //         text: 'Doctors Appointment',
    //         day: 'Feb 5th at 2:30pm',
    //         reminder: true
    //     },
    //     {
    //         id:2,
    //         text: 'Meeting at School',
    //         day: 'Feb 6th at 1:30pm',
    //         reminder: true
    //     },
    //     {
    //         id:3,
    //         text: 'Food Shopping',
    //         day: 'Feb 5th at 2:30pm',
    //         reminder: false
    //     }
    // ]
  );
  const [add, setAdd] = useState(false);
  ///Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
    //setTasks(tasks.filter((task) => task.id !== id));
  };
  const handleDB = async (id) => {
    let newTask = tasks.find((t) => t.id === id);
    newTask.reminder = !newTask.reminder;
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newTask),
    });
    const fetchedTasks = await fetchTasks();
    setTasks(fetchedTasks);

    // setTasks(
    //   tasks.map((task) =>
    //     task.id !== id ? task : { ...task, reminder: !task.reminder }
    //   )
    // );
  };
  const onAddClick = () => {
    setAdd(!add);
  };
  // const addTask = (task) => {
  //   // setTasks(tasks.push( {id: tasks.length, text: }))
  //   const id = tasks.length + 1; /// Math.floor(Math.random * 10000) + 1;
  //   const newTask = { id, ...task };
  //   console.log(newTask);
  //   setTasks([...tasks, newTask]);
  //   setAdd(false);
  // }
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
    setAdd(false);
    alert(tasks.length)
  };
  useEffect(() => {
    const getTasks = async () => {
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
    };
    getTasks();
  }, []);
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    console.log(data);
    return data;
  };

  return (
    <Router>
      <div className="App">
        <Header
          add={add}
          onAddClick={() => {
            onAddClick();
          }}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTask show={add} onAddTask={addTask} />

                {!add && tasks.length > 0 ? (
                  <Tasks
                    onTaskDB={handleDB}
                    tasks={tasks}
                    onDeleteTask={deleteTask}
                  />
                ) : (
                  <h3>No tasks to show.</h3>
                )}
              </>
            }
          />
          <Route
            style={{ color: "white" }}
            path="/about"
            element={<About />}
            text={"About"}
          />
           <Route
            style={{ color: "white" }}
            path='/task/:id'
            element={ <TaskDetail /> }
            text={"About"}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
