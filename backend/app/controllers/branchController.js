const { Branch } = require('../models');

exports.getAllBranches = async (req, res) => {
  try {
    // Fetch all branches from the database
    const branches = await Branch.findAll();

    // Send a JSON response with the list of branches
    res.status(200).json({ branches });
  } catch (error) {
    // Handle errors, and send an error response if necessary
    console.error('Error fetching branches:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.getBranchById = async (req,res)=>{
    try{
        const { id } = req.params;
        const branch = await Branch.findByPk(id)
        if(branch){
            res.status(200).json({branch})
        }
        else{
            res.status(404).json({error:"Branch Not Found"})
        }
    }catch(error){
        console.error('Error fetching branch:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.createBranch = async (req,res) =>{
    try{
        const { branchName, location, phoneNumber, emailAddresses, branchType, openingDate, branchStatus, totalStudents, totalEmployees, branchAdministrator, sessionSchedule, coursesOffered, facilities } = req.body;

        // Create a new branch in the database
        const branch = await Branch.create({
          branchName,
          location,
          phoneNumber,
          emailAddresses,
          branchType,
          openingDate,
          branchStatus,
          totalStudents,
          totalEmployees,
          branchAdministrator,
          sessionSchedule,
          coursesOffered,
          facilities,
        });
        res.status(201).json({branch})
    }catch(error){
        console.error("Erron Creating Branch",error)
        res.status(500).json({error:"internal server Error"})
    }
}


exports.updateBranch = async (req, res) => {
    try {
      const { id } = req.params; // Extract branch ID from the URL
      const branchData = req.body; // Updated branch data
  
      // Find the branch by its ID and update it
      const branch = await Branch.findByPk(id);
  
      if (!branch) {
        return res.status(404).json({ error: 'Branch Not Found' });
      }
  
      await branch.update(branchData);
  
      res.status(200).json({ message: 'Branch updated successfully', branch });
    } catch (error) {
      console.error(`Error updating branch: ${error.message}`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

  exports.deleteBranch = async (req, res) => {
    try {
      const { id } = req.params; // Extract branch ID from the request body
      // Find the branch by its ID and delete it
      const branch = await Branch.findByPk(id);
  
      if (!branch) {
        return res.status(404).json({ error: 'Branch Not Found' });
      }
  
      await branch.destroy();
  
      res.status(200).json({ message: 'Branch deleted successfully' }); // Send a No Content response upon successful deletion
    } catch (error) {
      console.error(`Error deleting branch: ${error.message}`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  