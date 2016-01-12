App.Modules = App.Modules || {};
App.Modules.GetHexValues = function () {
   var o = { };

   var getTheHex = function(data) {
      var hexVal = $('.js-hex-code').val();
      var match = straightMatch(hexVal);

      if (!match) {
         match = calcValue(hexVal);
      }

      $(".js-show").html(match);
   };

   var straightMatch = function(color) {
      return _.isUndefined(colorList[color]) ? false : colorList[color];
   };

   var calcValue = function (color) {

   };

   return {
      init: function() {
         return this;
      },
      events: function() {
         Events.bind("click", ".js-get-hex").to(getTheHex, this);
         return this;
      }
   };

}();

