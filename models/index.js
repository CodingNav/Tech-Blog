const User = require('./User');
const Post = require('./Post');

User.hasMany(Post);

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment);

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

module.exports = { User, Post };