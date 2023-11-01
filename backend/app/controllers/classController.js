const { Class } = require('../models');

// Get all classes
exports.getAllClasses = async (req, res) => {
  try {
    const classes = await Class.findAll();
    res.status(200).json({ classes });
  } catch (error) {
    console.error('Error fetching classes:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a specific class by ID
exports.getClassById = async (req, res) => {
  try {
    const { id } = req.params;
    const classObj = await Class.findByPk(id);

    if (classObj) {
      res.status(200).json({ class: classObj });
    } else {
      res.status(404).json({ error: 'Class Not Found' });
    }
  } catch (error) {
    console.error('Error fetching class:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new class
exports.createClass = async (req, res) => {
  try {
    const { className, startDate, endDate, maximumCapacity, currentEnrollment, classStatus, description, sessionID, branchID } = req.body;
    const classObj = await Class.create({
      className,
      startDate,
      endDate,
      maximumCapacity,
      currentEnrollment,
      classStatus,
      description,
      sessionID,
      branchID,
    });

    res.status(201).json({ class: classObj });
  } catch (error) {
    console.error('Error creating class:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a specific class by ID
exports.updateClass = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedClass = req.body;
    const [updatedCount] = await Class.update(updatedClass, {
      where: { ClassID: id },
    });

    if (updatedCount === 1) {
      res.status(200).json({ message: 'Class updated successfully' });
    } else {
      res.status(404).json({ error: 'Class Not Found' });
    }
  } catch (error) {
    console.error('Error updating class:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a specific class by ID
exports.deleteClass = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCount = await Class.destroy({
      where: { ClassID: id },
    });

    if (deletedCount === 1) {
      res.status(200).json({ message: 'Class deleted successfully' });
    } else {
      res.status(404).json({ error: 'Class Not Found' });
    }
  } catch (error) {
    console.error('Error deleting class:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
