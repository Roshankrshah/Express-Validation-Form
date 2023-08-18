const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator')
const app = express();

app.set('view engine', 'ejs');

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', urlencodedParser, [
    check('username', 'This username must me 3+ characters long')
        .exists()
        .isLength({ min: 3 }),
    check('email', 'Email is not valid')
        .isEmail()
        .normalizeEmail(),
    check('password','Password should be 6+ characters long')
        .exists()
        .isLength({min:6})
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const alert = errors.array()
        res.render('register', {
            alert
        })
    }
    res.send('Submitted Enjoy')
})

const port = 2003;

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});