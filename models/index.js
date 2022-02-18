const Users = require('./Users');
const BlogPosts = require('./BlogPosts');
const Comments = require('./Comments')

Users.hasMany(BlogPosts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

BlogPosts.belongsTo(Users, {
  foreignKey: 'user_id'
});

BlogPosts.hasMany(Comments, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Comments.belongsTo(BlogPosts, {
  foreignKey: 'post_id'
});

module.exports = { Users, BlogPosts, Comments };
