'use strict';

const ManifestGenerator = require('ember-asset-loader/lib/manifest-generator');

module.exports = ManifestGenerator.extend({
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  }
});
