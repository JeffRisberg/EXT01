Ext.define('Panda.view.Viewport', {
  extend: 'Ext.container.Viewport',
  layout: 'fit',

  requires: [
    'Panda.view.NewStation',
    'Panda.view.SongControls',
    'Panda.view.StationsList',
    'Panda.view.RecentlyPlayedScroller',
    'Panda.view.SongInfo',
    'Panda.view.AMComboBox',
    'Panda.view.FMComboBox'
  ],

  initComponent: function () {
    this.items = {
      dockedItems: [
        {
          dock: 'top',
          xtype: 'toolbar',
          height: 80,
          items: [
            {
              xtype: 'newStation',
              width: 150
            },
            {
              xtype: 'songControls',
              flex: 10
            },
            {
              xtype: 'component',
              html: 'Pandora',
              flex: 1
            },
            {
              xtype: 'component',
              html: 'Internet Radio',
              flex: 1
            },
            {
              xtype: 'amComboBox',
              flex: 2
            },
            {
              xtype: 'fmComboBox',
              flex: 2
            }
          ]
        }
      ],
      layout: {
        type: 'hbox',
        align: 'stretch'
      },
      items: [
        {
          width: 250,
          xtype: 'panel',
          id: 'west-region',
          layout: {
            type: 'vbox',
            align: 'stretch'
          },
          items: [
            {
              xtype: 'stationsList',
              flex: 1
            },
            {
              html: 'Ad',
              height: 250,
              xtype: 'panel'
            }
          ]
        },
        {
          xtype: 'container',
          flex: 1,
          layout: {
            type: 'vbox',
            align: 'stretch'
          },
          items: [
            {
              xtype: 'recentlyplayedscroller',
              height: 250
            },
            {
              xtype: 'songInfo',
              flex: 1
            }
          ]
        }
      ]
    };

    this.callParent();
  }
});