const express = require('express');
const { login, getUserProfile,loginAdmin } = require('../controllers/authController');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/login', login);
router.get('/profile', verifyToken.verifyAdmin, getUserProfile);
router.post('/admin/login', loginAdmin);


module.exports = router;
