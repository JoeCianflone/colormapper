App.Modules = App.Modules || {};
App.Modules.GetHexValues = function () {
   var o = { };

   var getTheHex = function(data) {
      var hexVal = $('.js-hex-code').val().replace("#", "");
      var match = straightMatch(hexVal);

      if (! match) {
         match = findClosestMatch(hexVal, colorList);
      }

      $(".js-show").html(match);
   };

   var straightMatch = function(color) {
      return _.isUndefined(colorList[color]) ? false : colorList[color];
   };

   var findClosestMatch = function(hexColor, colors) {
       var rgb = hex2rgb(hexColor),
           gap = 3 * Math.pow(256, 2) + 1,
           closest = null;

       _.each(colors, function(value, key, index) {
         var diff = rgbDistance(hex2rgb(key), rgb);
         if (diff < gap) {
             gap = diff;
             closest = value;
         }
       });

       return closest;
   };

   var hex2rgb = function(hex) {
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


   var rgbDistance = function(c1, c2) {
       return Math.pow(c1.r - c2.r, 2) + Math.pow(c1.g - c2.g, 2) + Math.pow(c1.b - c2.b, 2);
   };

   return {
      init: function() { return this; },

      events: function() {
         Events.bind("click", ".js-get-hex").to(getTheHex, this);
         return this;
      }
   };

}();

