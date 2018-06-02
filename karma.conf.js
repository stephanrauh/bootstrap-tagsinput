module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'lib/jquery/jquery.js',
      'dist/bootstrap-tagsinput.min.js',
      'test/helpers.js',
      { pattern: 'test/bootstrap-tagsinput/*.tests.js' }
    ],
    reporters: ['progress'],
    port: 9876,
    logLevel: config.LOG_DEBUG,
    captureTimeout: 60000
  });
};
