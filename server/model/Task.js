import { model, Schema } from "mongoose";

const tasksSchema = new Schema
    (
        {
        title :{
           type: String,
           required:true
        },
        description :{
          type: String,
          required:true
        },
        priority :{
            type: String,
            required: true
        }
    },
    {
      timestamps: true,
    })

    const Tasks = model('Tasks', tasksSchema);

export default Tasks; 