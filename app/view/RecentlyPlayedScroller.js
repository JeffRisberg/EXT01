var playedTpl = new Ext.XTemplate(
  '<tpl for=".">',
  ' <div style="padding: 5px; cursor: pointer">',
  '  <span>{name}</span>',
  '  <span>{album}</span>',
  '  <tpl if="length &gt; 6">',
  '    <b>Duration:</b> {length}',
  '  </tpl>',
  ' </div>',
  '</tpl>');

Ext.define('Panda.view.RecentlyPlayedScroller', {
  extend: 'Ext.view.View',
  alias: 'widget.recentlyplayedscroller',
  store: 'RecentSongs',
  itemTpl: playedTpl
});
