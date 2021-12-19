const monngoose = require("mongoose");
const UserSchme = new monngoose.Schema({
  username: {
    type: String,
  },

  password: {
    type: String,
  },
});

const UserModel = monngoose.model("User", UserSchme);
module.exports = UserModel;
