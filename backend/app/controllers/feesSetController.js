const {FeesSet} = require('../models')

exports.getAllFeesSet = async (req,res) => {
    try{
        const feesSet = await FeesSet.findAll()
        res.status(200).json({feesSet})
    }catch(error){
        console.log("error fetching branches : ",error)
        res.status(500).json({error:"internal server error"})
    }
}

exports.getFeesSetById = async (req,res) => {
    try{
        const {id} = req.params;
        const feesSet = await FeesSet.findByPk(id)
        res.status(200).json({feesSet})
    }catch(error){
        console.log("error fetching branche : ",error)
        res.status(500).json({error:"internal server error"})
    }
}

exports.createFeesSet = async (req,res) => {
    try{
        const {feeType,
               feesAmount,
               maxDiscountAmount,
               feesDescription,
               feesStatus,
               sessionID,
               courseID,
               branchID} = req.body
        const feesSet = await FeesSet.create({
               feeType,
               feesAmount,
               maxDiscountAmount,
               feesDescription,
               feesStatus,
               sessionID,
               courseID,
               branchID
        })
        res.status(200).json({feesSet})
    }catch(error){
        console.error("Erron Creating feesSet",error)
        res.status(500).json({error:"internal server Error"})
    }
}


exports.updateFeesSet = async (req, res) => {
    const { id } = req.params;
  
    try {
      const updatedFeesSet = await FeesSet.update(req.body, {
        where: { feesSetID: id },
      });
  
      if (updatedFeesSet[0] === 1) {
        // Successfully updated
        res.status(200).json({ message: 'FeesSet updated successfully' });
      } else {
        // FeesSet with the specified ID was not found
        res.status(404).json({ error: 'FeesSet not found' });
      }
    } catch (error) {
      console.error('Error updating FeesSet:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

  exports.deleteFeesSet = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedRows = await FeesSet.destroy({ where: { feesSetID: id } });
  
      if (deletedRows === 1) {
        // Successfully deleted
        res.status(200).json({ message: 'FeesSet deleted successfully' });
      } else {
        // FeesSet with the specified ID was not found
        res.status(404).json({ error: 'FeesSet not found' });
      }
    } catch (error) {
      console.error('Error deleting FeesSet:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  