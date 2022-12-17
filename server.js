const express = require('express')
const path = require('path')
const app = express()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const port = 3001

// three method to get html file -----------

// 3rd-----------
app.get('/', (req, res) => {
    // res.send('Hello World!')
    res.sendFile(path.join(__dirname, '/templates/index.html'))

});


app.post('/merge', upload.array('pdfs', 2), function (req, res, next) {
    console.log(req.files);
    res.send({ data: req.files })
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})