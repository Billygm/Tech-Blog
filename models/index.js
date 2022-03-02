const Users = require("./Users");
const Posts = require("./Posts");
const Comments = require("./Comments");

Posts.belongsTo(Users, {
  foreignKey: "user_id",
});

Users.hasMany(Posts, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comments.belongsTo(Posts, {
  foreignKey: "post_id",
});

Posts.hasMany(Comments, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Comments.belongsTo(Users, {
  foreignKey: "user_id",
});

Users.hasMany(Comments, {
});



module.exports = { Users, Posts, Comments };
