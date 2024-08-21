if (process.env.NODE_ENV === 'rpoduction') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}