require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('659d8e7f497397721a35794b').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount("659d86c0b1ab8fa46adfaf15").then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})