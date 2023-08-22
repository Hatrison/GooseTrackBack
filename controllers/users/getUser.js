const User = require("../../models/users");
const getUser = async (req, res) => {
  const user = await User.findById(req.user.id, "-password");

  return res.status(200).json(user);
};
module.exports = getUser;
