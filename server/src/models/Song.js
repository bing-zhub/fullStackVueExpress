module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    genre: DataTypes.STRING,
    album: DataTypes.STRING,
    albumImageUrl: DataTypes.STRING,
    youtubeID: DataTypes.STRING,
    lyrics: DataTypes.TEXT('large'),
    tab: DataTypes.STRING
  })

  return Song
}