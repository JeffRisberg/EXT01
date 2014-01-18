/**
 * A store that knows whether it has already been loaded.
 *
 * @author Peter Potts
 * @since 01/30/13
 */
Ext.define('Panda.store.IsLoadedStore', {
  extend: 'Ext.data.Store',

  constructor: function (config) {
    (function (self) {
      var timeoutId;

      Ext.apply(self, {
        deferredLoad: function () {
          //console.log('Deferred load');

          if (timeoutId) clearTimeout(timeoutId);

          timeoutId = Ext.defer(function () {
            //console.log('Load');
            self.load();
          }, 1000);
        }
      });
    })(this);

    (function (self) {
      var loaded = false;

      Ext.apply(self, {
        isLoaded: function () {
          return loaded;
        },

        triggerLoad: function (onLoad, onReload) {
          var onLoadThenOnReload = function () {
            if (Ext.isFunction(onLoad)) onLoad();
            if (Ext.isFunction(onReload)) self.on('load', onReload, self);
          };

          var onInitialLoad = function () {
            loaded = true;
            onLoadThenOnReload();
          };

          if (loaded) {
            onLoadThenOnReload();
            return self;
          }
          else {
            self.on('load', onInitialLoad, self, {single: true});
            return self.isLoading() ? self : self.load();
          }
        }
      });
    })(this);

    this.callParent(arguments);
  }
});
