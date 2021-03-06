const base = require('./karma.base.conf');

module.exports = config => {
  const options = Object.assign(base, {
    browsers: ['PhantomJS'],
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      reporters: [{
        type: 'lcov', dir: '../coverage'
      }, {
        type: 'text-summary', dir: '../coverage'
      }]
    },
    singleRun: true
  });

  // add babel-plugin-coverage for code instrumentation
  options.webpack.babel = {
    plugins: [['coverage', { ignore: ['test/'] }]]
  };

  config.set(options);
};
