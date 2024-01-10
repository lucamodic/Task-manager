require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('659d8e0efb6eb6dfc71c8e7c', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount("659d8e0efb6eb6dfc71c8e7c", 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})