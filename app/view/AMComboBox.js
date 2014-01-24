Ext.define('Panda.view.AMComboBox', {
  extend: 'Ext.form.field.ComboBox',
  emptyText: 'AM Stations',
  alias: 'widget.amComboBox',
  store: 'AMStations',
  queryMode: 'local',
  displayField: 'name',
  valueField: 'id'
});