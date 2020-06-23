const express = require('express');
const Task = require('../models/task');

const auth = require('../middleware/auth');

const router = new express.Router();

router.post('/tasks', auth, async (req, res) => {
    const { _id } = req.user;
    const task = new Task({
        ...req.body,
        owner: _id,
    });

    try {
        await task.save();
        res.status(200).send(task);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get('/tasks', auth, async (req, res) => {
    const { _id: uId } = req.user;
    const match = {};
    const sort = {};

    console.log(req.query);

    if (req.query.completed) {
        const { completed } = req.query;
        match.completed = completed === 'true';
    }

    if (req.query.sortBy) {
        const { sortBy } = req.query;
        const parts = sortBy.split(':');
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
    }

    try {
        // const tasks = await Task.find({ owner: uId, completed });
        await req.user.populate({
            path: 'tasks',
            match,
            options: {
                limit: parseInt(req.query.limit, 10),
                skip: parseInt(req.query.skip, 10),
                sort,
            },
        }).execPopulate();
        res.status(200).send(req.user.tasks);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.get('/tasks/:id', auth, async (req, res) => {
    const { id: _id } = req.params;
    const { _id: uId } = req.user;

    try {
        const task = await Task.findOne({ _id, owner: uId });

        if (!task) {
            res.status(404).send({ error: 'Task not found' });
        }

        res.status(200).send(task);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.patch('/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid update' });
    }

    try {
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id });

        if (!task) {
            res.status(404).send();
        }

        updates.forEach((update) => { task[update] = req.body[update]; });
        await task.save();

        res.send(task);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});

router.delete('/tasks/:id', auth, async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id });

        if (!task) {
            res.status(404).send();
        }

        res.send(task);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;
