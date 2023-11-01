const { Course } = require('../models');
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.status(200).json({ courses });
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getCourseById = async (req, res) => {
    try {
      const { id } = req.params;
      const course = await Course.findByPk(id);
  
      if (course) {
        res.status(200).json({ course });
      } else {
        res.status(404).json({ error: 'Course Not Found' });
      }
    } catch (error) {
      console.error('Error fetching course:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  exports.createCourse = async (req, res) => {
    try {
      const {
        courseName,
        courseDuration,
        subjects,
        description,
        courseStatus,
        termsAndConditions,
        sessionID,
        branchID,
      } = req.body;
  
      const course = await Course.create({
        courseName,
        courseDuration,
        subjects,
        description,
        courseStatus,
        termsAndConditions,
        sessionID,
        branchID,
      });
  
      res.status(201).json({ course });
    } catch (error) {
      console.error('Error creating course:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

exports.updateCourse = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedCourseCount = await Course.update(
        { ...req.body },
        { where: { CourseID: id } }
      );
  
      if (updatedCourseCount[0] === 1) {
        res.status(200).json({ message: 'Course updated successfully' });
      } else {
        res.status(404).json({ error: 'Course Not Found' });
      }
    } catch (error) {
      console.error('Error updating course:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
exports.deleteCourse = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedCourseCount = await Course.destroy({
        where: { CourseID: id },
      });
  
      if (deletedCourseCount === 1) {
        res.status(200).json({ message: 'Course deleted successfully' });
      } else {
        res.status(404).json({ error: 'Course Not Found' });
      }
    } catch (error) {
      console.error('Error deleting course:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  