const express = require('express');
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

const hasAccess = (req, res, next) => {
    let allowAccess = true
    if(allowAccess) {
        next()
    } else {
        res.send ({message: 'Sorry, you cannot access this page!'})
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html')
})

app.post('/login', (req, res) => {
    let registeredEmail = 'prabal@gmail.com'
    let registeredPassword = '123'
    const { email, password } = req.body
    if(email === registeredEmail && password === registeredPassword) {
        res.send({message: 'Logged in successfully!'})
    } else {
        res.send({error: 'Invalid credentials!'})
    }
})

app.get('/products', hasAccess, (req, res) => {
    const products = [
        {
            id: 1,
            title: 'Boat Headphones',
            price: '$78.2',
        }, {
            id: 2,
            title: 'JBL Headphones',
            price: '$92.5',
        }
    ]
    res.json(products)
})

app.get('/students', (req, res) => {
    const students = [
        {
            id: 1001,
            name: 'Prabal',
            batchNo: 4,
        }, {
            id: 1002,
            name: 'Manish',
            batchNo: 8,
        },
        {
            id: 1003,
            name: 'Chandan',
            batchNo: 12,
        }
    ]
    res.send(students)
})

app.get('/download-nodejs-logo', (req, res) => {
    res.download(__dirname + '/nodejs-logo.png')
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})





/*
    HTTP Methods:
    - GET: 'Read' data
    - POST: 'Create' data
    - PUT/PATCH: 'Update' data
    - DELETE: 'Delete' data
*/









































/*
    const http = require('http');

    const server = http.createServer((req, res) => {
        res.end('We have learnt basic Node server!');
    });

    server.listen(3000, () => {
        console.log(`Server running at http://localhost:3000`);
    });
*/