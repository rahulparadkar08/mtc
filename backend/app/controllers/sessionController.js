const { Session } = require('../models');


exports.getAllSession = async (req, res) => {
  try {
    const sessions = await Session.findAll();
    res.status(200).json({ sessions });
  } catch (error) {
    console.error('Error fetching sessions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.getSessionById = async (req, res) => {
  try {
    const { id } = req.params;
    const session = await Session.findByPk(id);
    if (session) {
      res.status(200).json({ session });
    } else {
      res.status(404).json({ error: 'Session Not Found' });
    }
  } catch (error) {
    console.error('Error fetching session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.createSession = async (req, res) => {
  try {
    const { body } = req;
    const newSession = await Session.create(body);
    res.status(201).json({ session: newSession });
  } catch (error) {
    console.error('Error creating session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.updateSession = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const [updatedCount] = await Session.update(body, { where: { sessionID: id } });
    if (updatedCount === 1) {
      res.status(200).json({ message: 'Session updated successfully' });
    } else {
      res.status(404).json({ error: 'Session Not Found' });
    }
  } catch (error) {
    console.error('Error updating session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.deleteSession = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCount = await Session.destroy({ where: { sessionID: id } });
    if (deletedCount === 1) {
      res.status(200).json({ message: 'Session deleted successfully' });
    } else {
      res.status(404).json({ error: 'Session Not Found' });
    }
  } catch (error) {
    console.error('Error deleting session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
