const cloudinary = require('cloudinary').v2;

// Configure your cloud name, API key and API secret:

const myconfig = cloudinary.config({
  cloud_name: 'house4rent',
  api_key: '135889654722294',
  api_secret: 'LPev_o8AnUxi8tEg9y2DvXqnhP0',
  secure: true
});

exports.myconfig = myconfig;