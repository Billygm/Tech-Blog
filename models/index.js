const Users = require('./Users');
const BlogPosts = require('./Project');

Users.hasMany(BlogPosts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

BlogPosts.belongsTo(Users, {
  foreignKey: 'user_id'
});

module.exports = { Users, BlogPosts };
