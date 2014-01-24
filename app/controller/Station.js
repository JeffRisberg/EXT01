Ext.define('Panda.controller.Station', {
  extend: 'Ext.app.Controller',

  refs: [
    {
      ref: 'stationsList',
      selector: 'stationsList'
    }
  ],

  stores: ['Stations', 'SearchResults', 'AMStations'],

  init: function () {
    // Start listening for events on views
    this.control({
      'stationsList': {
        selectionchange: this.onStationSelect
      },
      'newStation': {
        select: this.onNewStationSelect
      }
    });
  },

  onLaunch: function () {
    var stationsStore = this.getStationsStore();
    stationsStore.load({
      callback: this.onStationsLoad,
      scope: this
    });
  },

  onStationsLoad: function () {
    var stationsList = this.getStationsList();
    stationsList.getSelectionModel().select(0);
  },

  onStationSelect: function (selModel, selection) {
    // Fire an application-wide event
    this.application.fireEvent('stationstart', selection[0]);
  },

  onNewStationSelect: function (field, selection) {
    var selected = selection[0],
      store = this.getStationsStore(),
      list = this.getStationsList();

    if (selected && !store.getById(selected.get('id'))) {
      store.add(selected);
    }
    list.getSelectionModel().select(selected);
  }
});
