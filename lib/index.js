/**
 * @param {Configuration} conf
 */
module.exports = function (conf) {
  // plugin loading:
  conf.registerRule(require('./rules/disallow-var.js'));
  conf.registerRule(require('./rules/require-array-destructuring.js'));
  conf.registerRule(require('./rules/require-comments-to-include-access.js'));
  conf.registerRule(require('./rules/require-enhanced-object-literals.js'));
  conf.registerRule(require('./rules/require-object-destructuring.js'));
  conf.registerRule(require('./rules/require-template-strings-for-concatenation.js'));
  conf.registerPreset('ember-suave', require('../presets/ember-suave-preset.json')); // and your preset
  // not supported: conf.registerReporter('moonlight', require('./reporters/moonlight.js'));
};
