/* Application controller */
let App = function () {
    "use strict"

    return {
        init: function (options) {
            this.initBase(options); 
        },
        initBase: function (options) {
            handleLogin(options);   
        }
    };
}();