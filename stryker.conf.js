module.exports = function(config) {
  config.set({
	files: [
	  'lib/**/*.js',
	  'test/**/*.js'
	],
    mutate: [
      'lib/**/*.js',
      '!lib/index.js'
    ],
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["clear-text", "progress"],
    testRunner: "mocha",
    transpilers: [],
    testFramework: "mocha",
    coverageAnalysis: "perTest"
  });
};
