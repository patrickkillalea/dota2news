'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Rankings = new Module('rankings');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Rankings.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Rankings.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Rankings.menus.add({
    title: 'Rankings',
    link: 'rankings example page',
    roles: ['all'],
    menu: 'main'
  });
  
  Rankings.aggregateAsset('css', 'rankings.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Rankings.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Rankings.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Rankings.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Rankings;
});
