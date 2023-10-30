const express = require("express")
const router = express.Router()


router.use('/branch',require('./branch'))
router.use('/session',require('./session'))
router.use('/feesSet',require('./feesSet'))



module.exports = router