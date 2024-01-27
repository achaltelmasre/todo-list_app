// import React, { useEffect, useState } from "react";
// import "./AddTo.css";
// import axios from "axios";


// function AddTo() {

//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");
//     const [priority, setPriority] = useState("");
//     const [isEdit , setIsEdit] = useState(false);


//     const AddTask = async () => {
//       const response = await axios.post('/api/task', {
//         title:title,
//         description:description,
//         priority:priority
//       });
//        setIsEdit(true)
//       alert(response?.data?.message);
//     }

//     const onLoadTask = async (id) => {
     
//       const response = await axios.get(`/api/task/${id}`);

//       const { title, description, priority } = response?.data?.data;
//       setTitle(title);
//       setDescription(description);
//       setPriority(priority);
//     }

//     useEffect(() => {
//       onLoadTask();
//     }, []);

//     const UpdateTask = async(id) => {
//       const updatedTask = {  title, description, priority }
//       const response = await axios.put(`/api/task/${id}`, updatedTask);

//       setIsEdit(false)
//          alert(response?.data?.message);

//     }

//     return (
//         <>
//          <h3>{isEdit ? "update Task" : "Add Task"}</h3>
//         <div className="form">
           
//         <input
//               type="text"
//               placeholder="enter the title "
//               className=" p-2 ps-5 pe-5 m-2"
//               value={title}
//               onChange={(e) => {
//                 setTitle(e.target.value);
//               }}
              
//             />
//             <br />

//             <input
//               type="text"
//               placeholder="enter the description "
//               className=" p-2 ps-5 pe-5 m-2"
//               value={description}
//               onChange={(e) => {
//                 setDescription(e.target.value);
//               }}
//             />
//            <br />
//             <input
//               type="text"
//               placeholder="enter the priority "
//               className=" p-2 ps-5 pe-5 m-2"
//                  value={priority}
//               onChange={(e) => {
//                 setPriority(e.target.value);
//               }}
//             />

//             <br /><br/>

//         <button 
//            type="button"
//           className="btn1 "
//            onClick={() =>{
//             isEdit? UpdateTask(): AddTask()
//            }}>
//             {isEdit ? 'update ✔️' : 'Add✔️'}
//             </button>

//         </div>

//         </>
//     )
// }
// export default AddTo;