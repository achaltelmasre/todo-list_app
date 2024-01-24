import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import AddTo from "./components/AddToDo/AddTo";

function App() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const response = await axios.get("/api/tasks");

    setTasks(response?.data?.data);
  };

  const deleteTask = async(id) => {
    const response = await axios.delete(`/api/task/${id}`)
    if (response?.data?.success) {
        loadTasks();
    }
    alert(response?.data?.message)
  }   

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <h1 className="text-center p-2">ToDo-list</h1>

      <div class="container text-center">
        <div class="row">
          <div class="col-md-6">
            <div className="form">
                <AddTo/> 
            </div>
          </div>

          <div class="col-md-6">
            <h3 className="text-center">All Tasks</h3>
            <div>
              {tasks?.map((taskObj, index) => {
                const { _id, title, description, priority, createdAt } = taskObj;

                const date = new Date(createdAt).toLocaleDateString();
                const time = new Date(createdAt).toLocaleTimeString();


                return (
                  <div className="contain">
                    <h2 className="pt-2">{title}</h2>
                    <p className="">{description}</p>
                    <h6 className="p-2">{priority}</h6>
                    <hr/>
                    <p>{date}  <span className="ms-3"> ({time})</span></p>
                    <span  className="delbtn"
                      onClick={() => {deleteTask(_id)}}
                    >🗑️</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
