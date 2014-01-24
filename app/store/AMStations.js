Ext.define('Panda.store.AMStations', {
  extend: 'Panda.store.ShadowStore',
  requires: 'Panda.model.Station',
  model: 'Panda.model.Station',
  store: 'SearchResults',

  filters: [
    function (station) {
      console.log(station.get('name') + " " + station.isAM());
      return station.isAM();
    }
  ]
});