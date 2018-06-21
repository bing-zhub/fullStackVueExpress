module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Markdown', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    description: DataTypes.STRING,
    content: DataTypes.TEXT('large'),
    imageUrl:DataTypes.STRING
  })
  return Song
}