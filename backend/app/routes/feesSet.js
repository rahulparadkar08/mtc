const express = require("express");
const router = express.Router()
const feesSetController = require("../controllers/feesSetController.js")


//Routed for branches
router.get('/',feesSetController.getAllFeesSet);
router.get('/:id',feesSetController.getFeesSetById);
router.post('/',feesSetController.createFeesSet);
router.put('/:id',feesSetController.updateFeesSet);
router.delete('/:id',feesSetController.deleteFeesSet);

module.exports = router
