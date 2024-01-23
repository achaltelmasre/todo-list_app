import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import { getApiHealth } from './controllers/health.js';
import { deleteApiTask, getApiTasks, postApiTask , putApiTask} from './controllers/task.js';

const app = express();
app.use(express.json());

const connectDB = async() => {
    const conn = await mongoose.connect(process.env.MONGODB_URI)

    if (conn) {
        console.log('MongoDB connected');
    }
}
connectDB();

const PORT = process.env.PORT || 5000;

app.get('/api/health', getApiHealth );

app.post('/api/task', postApiTask);

app.get('/api/tasks', getApiTasks);

app.put('/api/task/:id', putApiTask);

app.delete('/api/task/:id', deleteApiTask)

 
app.listen(PORT, () => {
    console.log(`server runing on port ${PORT}`);
})


