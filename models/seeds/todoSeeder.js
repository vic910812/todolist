const Todo = require('../todo')
const db = require('../../config/mongoose')

db.once('open', () => {
    console.log('mongodb connected!')

    for (let i = 0; i < 10; i++) {
        Todo.create({ name: `name-${i}`})
    }
    //資料庫沒按照順序是正常的，因為網頁傳輸造成的非同步

    console.log('done.')
})