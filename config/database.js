if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI:
      'mongodb://<dbuser>:<dbpassword>@ds063546.mlab.com:63546/vidjot-prod-keyspress'
  };
} else {
  module.exports = {
    mongoURI: 'mongodb://localhost/vidjot-dev'
  };
}
