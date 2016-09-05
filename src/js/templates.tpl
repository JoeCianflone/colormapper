this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["colorSnippet"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"color-bloop-item\">\n   <div class=\"color-bloop\" style=\"background-color: #"
    + alias4(((helper = (helper = helpers.hexValue || (depth0 != null ? depth0.hexValue : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hexValue","hash":{},"data":data}) : helper)))
    + "\"></div>\n   <div class=\"color-bloop-text\">"
    + alias4(((helper = (helper = helpers.colorName || (depth0 != null ? depth0.colorName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colorName","hash":{},"data":data}) : helper)))
    + ": #"
    + alias4(((helper = (helper = helpers.hexValue || (depth0 != null ? depth0.hexValue : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hexValue","hash":{},"data":data}) : helper)))
    + ",</div>\n</div>\n";
},"useData":true});