const keysDev = require('./dev');
const keysProd = require('./prod');

if (process.env.NODE_ENV === 'production') {
  module.exports = keysProd;
} else {
  module.exports = keysDev;
}
