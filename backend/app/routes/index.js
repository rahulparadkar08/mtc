const express = require("express")
const router = express.Router()


router.use('/branch',require('./branch'))
router.use('/session',require('./session'))
router.use('/feesSet',require('./feesSet'))
router.use('/class',require('./class'))
router.use('/course',require('./course'))
router.use('/batch',require('./batch'))






module.exports = router