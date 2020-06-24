const Dev = require('../models/Dev');

module.exports = {
  async store(req, res) {
    const { devId } = req.params;
    const { user } = req.headers;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);

    if (!targetDev) {
      return res.status(400).json({ error: 'Dev not exists' });
    }

    if (targetDev.dislikes.includes(user._id)) {
      return res.json({ message: 'Dev has already disliked' });
    }

    if (loggedDev.dislikes.includes(targetDev._id)){
      return res.json({ message: 'You have already disliked this profile' });
    }

    loggedDev.dislikes.push(targetDev._id);

    await loggedDev.save();

    return res.json(loggedDev);
  }
}