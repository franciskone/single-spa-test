'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    autoRun: false, // Set autoRun to false, because we only want the ember app to render to the DOM when single-spa tells it to.
    storeConfigInMeta: false, // We're making a single-spa application, which doesn't exclusively own the html file. So we don't want to have to have a `<meta>` tag for the ember environment to be initialized.
    fingerprint: {
      customHash: null, // This is optional, just will make it easier for you to have the same url every time you do an ember build.
    },
    // Add options here
  });

  // Tell ember how to use the single-spa-ember library
  app.import('bower_components/single-spa-ember/amd/single-spa-ember.js', {
    using: [
      {transformation: 'amd', as: 'single-spa-ember'},
    ],
  });

  return app.toTree();
};
