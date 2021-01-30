const router = require('express').Router()
const {
    login,
    register
} = require('../controllers/userController')
const {
    requireLogin
} = require('../middlewares/requireLogin')
const {alumniIce,alumniEs}=require('../controllers/alumniController')
const { profile } = require('../controllers/Profilecontroller')




router.post('/register', register)
router.post('/login', login)
router.get('/xyz', requireLogin, (req, res) => {
    res.send('sdfsd')
})

router.get('/alumniIce',alumniIce)

router.get('/alumniEs',alumniEs)

router.get('/profile',requireLogin,profile)


module.exports = router