import Tasks from "../model/Task.js";

//post/task
const postApiTask = async (req, res) => {
    const {title, description, priority}= req.body;

    const task = new Tasks({
        title,
        description,
        priority
    });

    try{
        const savedTask = await task.save();

        return res.json({
            success: true,
            message: 'tasked saved',
            data: savedTask
        })
    }
    catch (e){
     
            return res.json({    
                success: false,
                message: e.message
            })

    }
}

//get/tasks
const getApiTasks = async (req, res) => {
    const allTask = await Tasks.find();

    return res.json({
        success: true,
        message: 'Successfully fetched all tasks',
        data: allTask
    })     
}

//put/task
const putApiTask = async (req, res) => {

    const {title, description, priority}= req.body;
    
    const {id} = req.params;

     await Tasks.updateOne({_id: id}, {$set: {
      title:title,
      description:description,
      priority:priority
   }});

   const updatedTask = await Tasks.findById(id);

   return res.json({
    success: true,
    message: 'Task updated successfully',
    data: updatedTask
   });
}

//delete/ task
const deleteApiTask = async (req, res) => {
    const { id } = req.params;

    await Tasks.deleteOne({_id: id});

    return res.json({
        success: true,
        message: `Successfully deleted transaction with id ${id}`,
        data: {
            id: id
        }
    })
}

//get/task/:id
const getAPiTaskId = async (req, res) => {
    const { _id } =  req.params;

    const task = await Tasks.find({user: _id})

    return res.json({
        success: true,
        message : "Tasks fetched successfully",
        data: task
    });

}

    
export { postApiTask , getApiTasks, putApiTask, deleteApiTask , getAPiTaskId}