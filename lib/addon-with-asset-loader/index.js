'use strict';

const ManifestGenerator = require('ember-asset-loader/lib/manifest-generator');

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  }
};
