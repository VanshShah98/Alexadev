const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');



router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter valid Email').isEmail(),
    body('password', 'Password must be 5 characters').isLength({ min: 5 }),

], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let user = User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry this user exisit already." })
        }

        const salt=bcrypt.genSalt(10);
        const secPass=bcrypt.hash(req.body.password,salt);
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        });
        /*const data={
            user:
            id , user,id
        }*/
        const authtoken =jwt.sign(data,JWT_SECRET);
        res.json({authtoken})
    } catch (error) {
        console.error(error.message);
    }

    //.then(user => res.json(user));
})


module.exports = router