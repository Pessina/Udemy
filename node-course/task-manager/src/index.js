const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
const Task = require('./models/task');
const User = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => console.log(`App is running on port ${port}`));

const main = async () => {
    // const user = await User.findById('5ef149b1de04a0b9fd93c962');
    // await user.populate('tasks').execPopulate();
    // console.log(user.tasks);

//     const task = await Task.findById('5ef149d7de04a0b9fd93c968');
//     await task.populate('owner').execPopulate();
//     console.log(task.owner);
};

main();
