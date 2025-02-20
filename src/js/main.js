/* Application Controller */
let App = (function() {
  "use strict";

  let settings;

  return {
    init: function(options) {
      if (options) {
        settings = options;
      }

      this.initBase(settings);
    },
    initBase: function(settings) {
      handleLogin(settings);
      handleRegister(settings);
    },
    initComponents: function(settings) {},
    initPages: function(settings) {}
  };
})();
