Ext.define('Panda.view.FMComboBox', {
  extend: 'Ext.form.field.ComboBox',
  emptyText: 'FM Stations',
  alias: 'widget.fmComboBox',
  store: 'FMStations',
  queryMode: 'local',
  displayField: 'name',
  valueField: 'id'
});