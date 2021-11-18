const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post('/', [
    check('name', 'Name is required custom error msg pog').not().isEmpty(),
    check('email', 'Please use a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more charaters').isLength({ min: 6 })
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.send('User route');
});

module.exports = router;