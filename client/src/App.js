import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const response = await axios.get("/api/tasks");

    setTasks(response?.data?.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <h1 className="text-center p-2">ToDo-list</h1>

      <div class="container text-center">
        <div class="row">
          <div class="col-md-6">Column</div>

          <div class="col-md-6">
            <h3 className="text-center">All Tasks</h3>
            <div>
              {tasks?.map((taskObj, index) => {
                const { title, description, priority, createdAt } = taskObj;

                return (
                  <div className="contain">
                    <h2 className="p-2">{title}</h2>
                    <p className="">{description}</p>
                    <h6 className="p-2">{priority}</h6>{" "}
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
