Ext.define('Panda.view.NewStation', {
  extend: 'Ext.form.field.ComboBox',
  emptyText: 'Search station',
  alias: 'widget.newStation',
  store: 'SearchResults',
  queryMode: 'local',
  displayField: 'name',
  valueField: 'id'
});