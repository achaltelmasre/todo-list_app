import { model, Schema } from "mongoose";

const tasksSchema = new Schema
    (
        {
        taskName :{
           type: String,
           required:true
        },
        description :{
          type: String,
          required: true
        },
        priority :{
            type: String,
            required: true
        }
    },
    {
      timestamp: true,
    })

    const Tasks = model('Task', tasksSchema);

export default Tasks; 