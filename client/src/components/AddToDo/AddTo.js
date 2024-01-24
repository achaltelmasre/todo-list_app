import React, { useState } from "react";
import "./AddTo.css";
import axios from "axios";


function AddTo() {

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

      alert(response?.data?.message);
    }

    // const UpdateTask = async() => {
    //   const updatedTask = { _id , title, description, }
    //   const response = await axios.put(`/api/task/${id}`, updatedTask);

    //      alert(response?.data?.message);

    // }



    return (
        <>
         <h3>Add Task</h3>
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
           onClick={AddTask}
          >Add</button>

        </div>

        </>
    )
}
export default AddTo;