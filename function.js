const axios = require('axios')

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = { firstName: 'Brad' }
        user['lastName'] = 'Traversy'
        return user
    },
    fetchUser: () => {
        return axios
        .get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => {
            //console.log(res.data)
            return res.data
        })
        .catch(err => 'error')
    }
}

//functions.fetchUser()

module.exports = functions