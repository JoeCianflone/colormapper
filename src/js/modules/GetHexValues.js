App.Modules = App.Modules || {};
App.Modules.GetHexValues = function () {
   /**
    * Entry point. This function will grab the hex
    * code and do the lookups and return the
    * sassMap.
    *
    * @param  Object data
    */
   var colorLookup = function(data) {
      var hexList = $('.js-hex-code').val().split(",");

      _.each(hexList, function(hexItem) {
         var hexVal = hexItem.trim().replace("#", ""),
             match = findMatch(hexVal);

         $(".js-show").append(Handlebars.templates.colorSnippet({
            colorName: match,
            hexValue: hexVal
         }));
      });
   };

   /**
    * Tries to find a matching hex in the colorList
    * if it cannot it will try to find the closest
    * color it can and return that
    *
    * @param  String color
    * @return String
    */
   var findMatch = function(color) {
      return _.isUndefined(App.Helpers.colorList[color]) ? findClosestMatch(color) : App.Helpers.colorList[color];
   };

   /**
    * If We cannot find an exact match in the colorList
    * object, we try to find the closest match. This
    * will loop over all the colors in colorList
    * and calculate a "distance" between the
    * two colors, it will return the name
    * of the color that has the smallest
    * gap between it and the intended
    * hex code.
    *
    * @param  String hexColor

    * @return String
    */
   var findClosestMatch = function(hexColor) {
       var rgb = App.Helpers.hex2rgb(hexColor),
           gap = 3 * Math.pow(256, 2) + 1,
           closest = null;

       _.each(App.Helpers.colorList, function(value, key, index) {
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

         // this will bind the click event to the colorLookup function
         Events.bind("click", ".js-find-color-name").to(colorLookup, this);
         return this;
      }
   };

}();

