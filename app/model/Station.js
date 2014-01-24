Ext.define('Panda.model.Station', {
  extend: 'Ext.data.Model',

  requires: [
    'Ext.util.Format'
  ],

  fields: [
    {name: 'id', type: 'int'},
    {name: 'name', type: 'string'},
    {name: 'visibility', type: 'string'}, //Visible, Hidden
    {name: 'source', type: 'string'}, // Internal, External
    {name: 'category', type: 'string'}, // could be anything
    {name: 'type', type: 'string'} //AM, FM
  ],

  proxy: {
    type: 'ajax',
    url: 'data/stations.json',
    reader: {
      type: 'json',
      root: 'results'
    }
  },

  idProperty: 'id',

  isVisible: function () {
    return this.get('visibility') === 'Visible';
  },

  isHidden: function () {
    return this.get('visibility') === 'Hidden';
  },

  isInternal: function () {
    return this.get('scope') === 'Internal';
  },

  isExternal: function () {
    return this.get('scope') === 'External';
  },

  isAM: function () {
    return this.get('type') == 'AM';
  },

  isFM: function () {
    return this.get('type') == 'FM';
  }
});
