const express = require('express')

const app = express()

app.set('secret', 'nimadashabi6390')

app.use(require('cors')())
app.use(express.json())
app.use('/', express.static(__dirname + '/web'))
app.use('/admin', express.static(__dirname + '/admin'))
app.use('/upload', express.static(__dirname + '/upload'))

require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)

app.listen(3000, () => {
    console.log('http://localhost:3000')
})