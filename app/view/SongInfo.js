Ext.define('Panda.view.SongInfo', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.songInfo',

  tpl: '<h1>About {artist}</h1><p>{description}</p>',

  initComponent: function () {
    this.dockedItems = [
      {
        xtype: 'container',
        layout: {
          type: 'hbox',
          align: 'middle',
          pack: 'end'
        },
        height: 100,
        items: [
          {
            xtype: 'component',
            width: 400,
            itemId: 'songdescription',
            tpl: '<h2>{artist}</h2><h1>{name}</h1><h2>{album}</h2>'
          },
          {
            xtype: 'button',
            text: 'menu',
            action: 'song-menu'
          }
        ]
      }
    ];

    this.callParent();
  },

  update: function (record) {
    var data = record ? record.data : {};
    this.down('#songdescription').update(data);
    this.callParent([data]);
  }
});