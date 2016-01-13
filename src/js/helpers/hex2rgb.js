App.Helpers = App.Helpers || {};
App.Helpers.hex2rgb = function(hex) {
      hex = parseInt(hex, 16);
      var r = hex >> 16;
      var g = hex >> 8 & 0xFF;
      var b = hex & 0xFF;

      return {
         r: r,
         g: g,
         b: b
      };
};
