Ext.define('Panda.model.Song', {
  extend: 'Ext.data.Model',
  fields: ['id', 'name', 'artist', 'album', 'description', 'length', 'played_date', 'station'],

  proxy: {
    type: 'ajax',
    url: 'data/recentsongs.json',
    reader: {
      type: 'json',
      root: 'results'
    }
  }
});