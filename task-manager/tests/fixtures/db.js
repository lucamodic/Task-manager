const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Luca',
    email: 'luca@example.com',
    password: '56what!!',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name: 'Manuel',
    email: 'manuel@example.com',
    password: '56what!!',
    tokens: [{
        token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
    }]
}

const userThreeId = new mongoose.Types.ObjectId()
const userThree = {
    _id: userThreeId,
    name: 'Leonardo',
    email: 'leonardo@example.com',
    password: '56what!!',
    tokens: [{
        token: jwt.sign({ _id: userThreeId }, process.env.JWT_SECRET)
    }]
}

const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: 'First task',
    completed: false,
    owner: userTwoId
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Second task',
    completed: true,
    owner: userTwoId
}

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Third task',
    completed: true,
    owner: userThreeId
}

const setupDatabase = async () => {
    await User.deleteMany()
    await new User(userOne).save()
}

const setupDatabaseForTasks = async () => {
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userTwo).save()
    await new User(userThree).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()
}

module.exports = {
    taskOne,
    taskTwo,
    taskThree,
    userOneId,
    userOne,
    userTwo,
    userThree,
    setupDatabase,
    setupDatabaseForTasks
}