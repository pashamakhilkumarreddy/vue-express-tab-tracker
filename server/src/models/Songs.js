module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: {
      type: DataTypes.STRING,
      unique: true,
    },
    artist: {
      type: DataTypes.STRING,
    },
    genre: {
      type: DataTypes.STRING,
    },
    album: {
      type: DataTypes.STRING,
    },
    albumImageURL: {
      type: DataTypes.STRING,
    },
    youtubeId: {
      type: DataTypes.STRING,
      unique: true,
    },
    lyrics: {
      type: DataTypes.TEXT,
    },
    tab: {
      type: DataTypes.TEXT,
    },
  });
  return Song;
};
