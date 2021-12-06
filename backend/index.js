const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const Task = require ('./models/Task')
const tasksRoutes = require('./routes/tasksRoutes')
const cors = require('cors')

const app = express()


app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))


//app.engine('handlebars',exphbs())
//app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use('/tasks', tasksRoutes)
//app.use('/', tasksRoutes)

conn
//.sync({force: true})
.sync()
.then(()=>{
    app.listen(5000)
})
.catch((err)=>console.log(err))