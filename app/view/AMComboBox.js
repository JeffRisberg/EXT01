Ext.define('Panda.view.AMComboBox', {
  extend: 'Ext.form.field.ComboBox',
  emptyText: 'AM Stations',
  alias: 'widget.amComboBox',
  store: 'AMStations',
  queryMode: 'local',
  displayField: 'name',
  valueField: 'id'

  //filters: {
  //  property: 'type',
  //  value: "AM"
  //}
  //constructor: function (cfg) {
  //  var me = this;
  //  cfg = cfg || {};
  //  me.callParent([Ext.apply({
  //    autoLoad: true,
  //    autoSync: true,
  //    filters: {
  //      property: 'type',
  //      value: "AM"
  //    }
  //  }, cfg)]);
  //}
});