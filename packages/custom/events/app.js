'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var I18n = new Module('events');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
I18n.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  events.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  events.menus.add({
    title: 'events example page',
    link: 'events example page',
    roles: ['authenticated'],
    menu: 'main'
  });

  events.aggregateAsset('js', '../lib/eventsnext/eventsnext.js', { weight: 1 });
  events.aggregateAsset('js', '../lib/ng-eventsnext/dist/ng-eventsnext.js', { weight: 2 });

  events.angularDependencies(['jm.eventsnext', 'mean.system']);

  events.aggregateAsset('css', 'events.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    I18n.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    I18n.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    I18n.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return events;
});
