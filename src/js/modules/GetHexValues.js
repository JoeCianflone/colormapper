App.Modules = App.Modules || {};
App.Modules.GetHexValues = function () {
   var o = { };

   var colorLookup = function(data) {
      var hexList = $('.js-hex-code').val().split(",");

      _.each(hexList, function(hexItem) {
         var hexVal = hexItem.trim().replace("#", ""),
             match = findMatch(hexVal);

         $(".js-show").append(Handlebars.templates.colorSnippet({
            colorName: match,
            hexValue: hexVal
         }));
         //$(".js-show").append(match + ": #"+hexVal+", <br>");

      });

   };

   var findMatch = function(color) {
      return _.isUndefined(colorList[color]) ? findClosestMatch(color, colorList) : colorList[color];
   };

   var findClosestMatch = function(hexColor, colors) {
       var rgb = App.Helpers.hex2rgb(hexColor),
           gap = 3 * Math.pow(256, 2) + 1,
           closest = null;

       _.each(colors, function(value, key, index) {
         var diff = App.Helpers.rgbDistance(App.Helpers.hex2rgb(key), rgb);
         if (diff < gap) {
             gap = diff;
             closest = value;
         }
       });

       return closest;
   };

   return {
      init: function() { return this; },

      events: function() {
         Events.bind("click", ".js-find-color-name").to(colorLookup, this);
         return this;
      }
   };

}();

