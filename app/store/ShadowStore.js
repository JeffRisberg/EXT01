/**
 */
Ext.define('Panda.store.ShadowStore', {
  extend: 'Ext.data.Store',
  requires: ['Ext.data.StoreManager'],
  autoLoad: false,
  autoSync: false,
  proxy: {type: 'memory'},

  constructor: function (config) {
    this.callParent(arguments);
    var store = Ext.data.StoreManager.lookup(this.store);
    this.model = store.model;
    var self = this;

    var copyRecords = function (event) {
      return function () {

        //console.log(event);
        var records = store.getRange();
        self.loadRecords(records);
        self.fireEvent(event, self, records, true);
      };
    };

    //copyRecords('load')();
    //store.on('load', copyRecords('load'));
    store.on('datachanged', copyRecords('datachanged'));
    //store.on('refresh', copyRecords('refresh'));
  }
});
