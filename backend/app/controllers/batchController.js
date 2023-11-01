// controllers/batchController.js
const { Batch } = require('../models');

// Create a new batch
exports.createBatch = async (req, res) => {
  try {
    const { batchName, startDate, endDate, classID, courseID } = req.body;
    const batch = await Batch.create({
      batchName,
      startDate,
      endDate,
      classID,
      courseID,
    });

    res.status(201).json({ batch });
  } catch (error) {
    console.error('Error creating batch:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all batches
exports.getAllBatches = async (req, res) => {
  try {
    const batches = await Batch.findAll();
    res.status(200).json({ batches });
  } catch (error) {
    console.error('Error fetching batches:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a batch by ID
exports.getBatchById = async (req, res) => {
  try {
    const { id } = req.params;
    const batch = await Batch.findByPk(id);

    if (batch) {
      res.status(200).json({ batch });
    } else {
      res.status(404).json({ error: 'Batch Not Found' });
    }
  } catch (error) {
    console.error('Error fetching batch:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a batch by ID
exports.updateBatch = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedBatchCount = await Batch.update(req.body, { where: { BatchID: id } });
  
      if (updatedBatchCount[0] === 1) {
        res.status(200).json({ message: 'Batch updated successfully' });
      } else {
        res.status(404).json({ error: 'Batch Not Found' });
      }
    } catch (error) {
      console.error('Error updating batch:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
// Delete a batch by ID
exports.deleteBatch = async (req, res) => {
  try {
    const { id } = req.params;
    const batch = await Batch.findByPk(id);

    if (!batch) {
      return res.status(404).json({ error: 'Batch Not Found' });
    }

    await batch.destroy();
    res.status(200).json({ message: 'Batch deleted successfully' });
  } catch (error) {
    console.error(`Error deleting batch: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
