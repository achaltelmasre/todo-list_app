import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import "./components/AddToDo/AddTo.css";


const App =() => {
  const [tasks, setTasks] = useState([]);

  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [isEdit , setIsEdit] = useState(false);

  const AddTask = async () => {
    const response = await axios.post('/api/task', {
      title:title,
      description:description,
      priority:priority
    });
     setIsEdit(true)
    alert(response?.data?.message);
  }


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

  const findTaskById = async (_id) => {
    
    setId(id)
    const response = await axios.get(`/api/task/${id}`);
    const { id,title, description, priority } = response?.data?.data;
    setId(_id)
    setTitle(title);
    setDescription(description);
    setPriority(priority);
   
  }
    
  

  const UpdateTask = async(_id) => {
    setIsEdit(true)
    const indexToUpdate = findTaskById(_id);
       
    
       const response = await axios.put(`/api/task/${_id}` );

      
       const tempArray = []
       tempArray[indexToUpdate ]  = { 
         id: id,
         title: title,
         description:description,
         priority:priority }
      
  }




  useEffect(() => {
    loadTasks();
    findTaskById();
  }, []);

  return (
    <>
      <h1 className="text-center p-2">ToDo-list</h1>

      <div class="container text-center">
        <div class="row">
          <div class="col-md-6">
            <div className="form">

            
         <h3>{isEdit ? "update Task" : "Add Task"}</h3>
        <div className="form">
           
        <input
              type="text"
              placeholder="enter the title "
              className=" p-2 ps-5 pe-5 m-2"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              
            />
            <br />

            <input
              type="text"
              placeholder="enter the description "
              className=" p-2 ps-5 pe-5 m-2"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
           <br />
            <input
              type="text"
              placeholder="enter the priority "
              className=" p-2 ps-5 pe-5 m-2"
                 value={priority}
              onChange={(e) => {
                setPriority(e.target.value);
              }}
            />

            <br /><br/>

        <button 
           type="button"
          className="btn1 "
           onClick={() =>{
            isEdit? UpdateTask(): AddTask()
           }}>
            {isEdit ? 'update ✔️' : 'Add✔️'}
            </button>

        </div>

      
              
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
                    <span  className="delbtn p-2"
                      onClick={() => {deleteTask(_id)}}
                    >🗑️</span>

                    <span className="updatebtn ms-5 p-2"
                     onClick={() => {UpdateTask(_id)}}
                     >
                     ✏️
                    </span>
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
