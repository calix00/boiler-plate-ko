const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User");
const config = require('./config/key');

//application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

//application/json
//app.use(bodyParser.json());
app.use(express.json());

const mongoose = require('mongoose')
mongoose.connect('config.mongoURI').then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/register', (req, res) => {
    
    // 회원가입할때 힐요한 정보들을 client에서 가져오면
    // 그것들을 데이터베이스에 넣어준다.

    const user = new User(req.body)

    // user.save((err, userInfo) => {
    //     if (err) return res.json({ success: false, err })
    //     return res.status(200).json({
    //         success: true
    //     })
    // })
    user.save()
        .then((userInfo) => res.status(200).json({ success: true }))
        .catch((err) => res.json({ success: false, err }));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))