Ext.define('Panda.Application', {
  name: 'Panda',

  extend: 'Ext.app.Application',

  views: [
    // don't need to put any here, since Panda.view.Viewport is always loaded, and that has all the others
  ],

  controllers: ['Station', 'Song'],

  models: ['Station', 'Song'],

  stores: ['Stations', 'RecentSongs', 'SearchResults', 'AMStations']
});
